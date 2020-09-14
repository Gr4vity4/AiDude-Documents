# เชื่อมต่อ MQTT ไปกับ CorgiDude

หลังจากที่เรา [เริ่มต้น IoT กับ CorgiDude ด้วยการสร้าง HTTP Request ด้วย urequests.py ](https://www.aiiotshop.com/article/8/เริ่มต้น-iot-กับ-corgidude-ด้วยการสร้าง-http-request-ด้วย-urequests-py)กันไปแล้ว
คราวนี้มาถึงคิว MQTT โพรโตคอลยอดนิยมกันแล้วครับ!! 

![](https://ff.lnwfile.com/_/ff/_raw/ko/ds/xd.png)

ใน CorgiDude มี chip ESP8285 อยู่ด้วย แต่ Firmware ข้างในเป็นรุ่น AT-Command แต่ว่าไม่ใช่ปัญหาแต่อย่างใด เนื่องจากทาง MaixPy Firmware เอง ได้ implement usocket มาให้เราแล้ว... เราจึงสามารถใช้งาน mqtt library ของ micropython ได้เลยครับ 

เริ่มต้นด้วยการ ดาวน์โหลดไฟล์ umqtt.py กันก่อนได้ [โดยการคลิ๊กที่นี่](https://gist.github.com/NAzT/b564e5576e674defa3cfd0ebc08a7af8/archive/0c9ab95dc69a4d142c5882090be5e9b6fe07b7cf.zip)

หลังจากนั้นอัพโหลดไฟล์ umqtt.py เข้าไปเลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/zw/xa/1n.png)

หลังจากนั้น ก็มาทดลอง publish และ subscribe กันได้เลยครับ!

```python
import network, time
import time
from Maix import GPIO
from machine import UART
from fpioa_manager import fm, board_info

import lcd, image
from umqtt import MQTTClient

WIFI_SSID = "LiLy_2.4G"
WIFI_PASS = ""

counter = 1
line_height = 20


lcd.init(type=1, freq=15000000)
lcd.freq(16000000)


def draw_line(text, color=lcd.RED):
    global counter
    lcd.draw_string(0, line_height*counter, text, color, lcd.BLACK)
    counter += 1


draw_line("CorgiDude!", lcd.YELLOW)
time.sleep(2)
draw_line("Setting up gpios", lcd.YELLOW)



fm.register(0, fm.fpioa.GPIOHS1, force=True)
wifi_io0_en=GPIO(GPIO.GPIOHS1, GPIO.OUT)


fm.register(8, fm.fpioa.GPIOHS0)
wifi_en=GPIO(GPIO.GPIOHS0,GPIO.OUT)

fm.register(board_info.WIFI_RX,fm.fpioa.UART2_TX)
fm.register(board_info.WIFI_TX,fm.fpioa.UART2_RX)

def wifi_enable(en):
    global wifi_en
    wifi_en.value(en)


draw_line("Preparing NIC...")
uart = UART(UART.UART2,115200,timeout=1000, read_buf_len=4096)

wifi_enable(0)
time.sleep_ms(200)
wifi_enable(1)


def wifi_reset():
    global uart
    print("wifi reset")
    wifi_enable(0)
    time.sleep_ms(200)
    wifi_enable(1)
    time.sleep(2)
    uart = UART(UART.UART2,115200,timeout=1000, read_buf_len=1024)
    tmp = uart.read()
    uart.write("AT+UART_CUR=921600,8,1,0,0\r\n")
    time.sleep_ms(200);
    print(uart.read())
    uart = UART(UART.UART2,921600,timeout=1000, read_buf_len=4096) # important! baudrate too low or read_buf_len too small will loose data
    time.sleep_ms(200);
    print(uart.read())
    uart.write("AT\r\n")
    tmp = uart.read()
    print(tmp)
    if tmp and not tmp.endswith("OK\r\n"):
        print("reset fail")
        return None
    try:
        nic = network.ESP8285(uart)
    except Exception:
        return None
    return nic


nic = wifi_reset()

print(nic)
if not nic:
    raise Exception("WiFi init fail")

nic.connect(WIFI_SSID, WIFI_PASS)

print("connected")

draw_line('')
print(nic.ifconfig())


def sub_cb(topic, msg):
    print((topic, msg))


c = MQTTClient("umqtt_client", "test.mosquitto.org")
c.set_callback(sub_cb)
c.connect()

#c.disconnect()

c.subscribe(b"foo_topic")
count = 0

while True:
    if True:
        # Blocking wait for message
        c.publish(b"foo_topic", b"hello {}".format(counter))
        counter += 1
        c.wait_msg()
    else:
        # Non-blocking wait for message
        c.check_msg()
        # Then need to sleep to avoid 100% CPU usage (in a real
        # app other useful actions would be performed instead)
        time.sleep(1)

c.disconnect()
```

จะเห็นว่า เราได้รับ message ของตัวเองผ่าน topic foo_topic ได้แล้วครับ

![](https://ff.lnwfile.com/_/ff/_raw/1j/x6/f2.png)

ณัฐ วีระวรรณ์