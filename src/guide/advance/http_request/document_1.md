# การใช้งาน HTTP Request

การเราจะไปทำ IoT Project กับ Corgidude ด้วยโพรโตคอลยอดนิยมกับ MQTT กัน เรามาเริ่มกันแบบง่ายๆไปกับการสร้าง HTTP Request กันนะครับ

![](https://ff.lnwfile.com/_/ff/_raw/he/0m/78.png)

เริ่มต้นด้วยการโหลด library ที่ชื่อว่า urequest.py มาเป็นตัวช่วยสำหรับการทำ HTTTP Request ให้ CorgiDude ของเราครับ ซึ่ง **[คลิ๊กเพื่อโหลดได้ที่นี่เลย!](https://gist.github.com/NAzT/5821cacdb98d9eb28d30a597186e4be1/archive/91cd28ae2389168f02a39c4ded0c12c02d0d1252.zip)**
หลังจากนั้นโยนไฟล์เข้าไปในบอร์ด CorgiDude โดยการเลือก Tools > transfer file to board

![](https://ff.lnwfile.com/_/ff/_raw/zw/xa/1n.png)

เลือกไฟล์ > อัพโหลดไฟล์เข้าไปในบอร์ด > รอจนขึ้นว่า **save file OK**

![](https://ff.lnwfile.com/_/ff/_raw/ch/p7/dh.png)

หลังจากนั้นเราก็มาเขียนโค๊ดกันเลย!

```python
import network, time
import time
from Maix import GPIO
from machine import UART
from fpioa_manager import fm, board_info

import lcd, image
import usocket, network, time
import urequests as request

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
    uart = UART(UART.UART2,921600,timeout=1000, read_buf_len=10240) # important! baudrate too low or read_buf_len too small will loose data
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

import urequests as request
headers ={
    "User-Agent": "MaixPy"
}

draw_line('')
draw_line("HTTP Requesting...")
print(nic.ifconfig())

url = "http://maker.ifttt.com/trigger/event/with/key/key?value1=Nat&value2=StayX"

res = request.get(url, headers=headers)

draw_line("status code={}".format(str(res.status_code)))
```

ซึ่งโค๊ดด้านบนผมลองเขียน Request ไปที่ IFTTT แต่ว่า ผมไม่ระบุ Token จึงได้ status 401 กลับมานั่นคือ Not authorized นั่นเองครับ

![](https://ff.lnwfile.com/_/ff/_raw/f1/7s/79.jpg)

โดย ณัฐ วีระวรรณ์
