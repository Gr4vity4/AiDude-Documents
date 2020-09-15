# การเชื่อมต่อ WiFi

หลังจากที่ได้ลองเขียนโค๊ดลง CorgiDude กันไปแล้ว วันนี้เรามาเพิ่มความสามารถ เชื่อมต่อ WiFi กันดูดีกว่าครับ!

![](https://ff.lnwfile.com/_/ff/_raw/ys/5p/en.jpg)

เนื่องจาก CorgiDude ใช้ Sipeed K210 Module ที่มี chip ESP8285 อยู่ในนั้นด้วย เราจึงสามารถประมวลผล AI และเชื่อมต่อ Internet ผ่าน WiFi กันได้ แบบครบเครื่องบน CorgiDude ตัวเดียวเลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/ko/ds/xd.png)

ภาพ Sipeed Module

เริ่มเชื่อมต่อ WiFi!
เริ่มต้นด้วยการ Select Board ให้เป็น Sipeed Maix Dock

![](https://ff.lnwfile.com/_/ff/_raw/ge/ia/aw.png)

มาเริ่มโค๊ดกันเลย!

```python
from Maix import GPIO
from machine import UART
from fpioa_manager import fm, board_info

import lcd, image
import usocket, network, time


fm.register(8, fm.fpioa.GPIOHS0)
wifi_en=GPIO(GPIO.GPIOHS0,GPIO.OUT)

fm.register(board_info.WIFI_RX,fm.fpioa.UART2_TX)
fm.register(board_info.WIFI_TX,fm.fpioa.UART2_RX)

counter = 1
line_height = 20

WIFI_SSID = "CMMC_3BB_2.4GHz"
WIFI_PASS = "xxxxxxxxxx"


lcd.init(type=1, freq=15000000)
lcd.freq(16000000)


def draw_line(text, color=lcd.RED):
    global counter
    lcd.draw_string(0, line_height*counter, text, color, lcd.BLACK)
    counter += 1

def wifi_enable(en):
    global wifi_en
    wifi_en.value(en)
    #draw_line("wifi_en({})".format(en))


def wifi_reset():
    global uart
    print("wifi reset")
    wifi_enable(0)
    time.sleep_ms(200)
    wifi_enable(1)
    time.sleep_ms(200)
    uart = UART(UART.UART2,115200,timeout=1000, read_buf_len=1024)
    tmp = uart.read()
    time.sleep_ms(200);
    print(uart.read())
    uart.write("AT\r\n")
    tmp = uart.read()
    if tmp and not tmp.endswith("OK\r\n"):
        draw_line("reset failed")
        print("reset fail")
        return None
    try:
        nic = network.ESP8285(uart)
        #draw_line("NIC OK!", lcd.GREEN)
    except Exception:
        return None
    return nic

draw_line("CorgiDude!", lcd.YELLOW)
time.sleep(2)
draw_line("Preparing NIC...")
nic = wifi_reset()


if not nic:
    draw_line("WiFi init fail!")
    raise Exception("WiFi init fail")
else:
    draw_line("Connectin to WiFi...")
    nic.connect(WIFI_SSID, WIFI_PASS)
    ip,subnet,gateway,dns,b,mac,ssid = nic.ifconfig()
    print("WiFi Connected. ip={}, gateway={}".format(ip,gateway))
    draw_line("WiFi Connected.", lcd.GREEN)
    draw_line("")
    draw_line("ip={}, gateway={}".format(ip,gateway), lcd.YELLOW)
    draw_line("mac={}, ssid={}".format(mac,ssid), lcd.YELLOW)
```
