# ยิงข้อมูลจาก CorgiDude เข้า Google Spreadsheet ผ่านทาง IFTTTT

เริ่มต้นด้วยการโหลด library ที่ชื่อว่า urequest.py มาเป็นตัวช่วยสำหรับการทำ HTTTP Request ให้ CorgiDude ของเราครับ ซึ่ง [คลิ๊กเพื่อโหลดได้ที่นี่เลย!](https://gist.github.com/NAzT/5821cacdb98d9eb28d30a597186e4be1/archive/bc072c17109a8be64e7885161516f778cf181464.zip)

![](https://ff.lnwfile.com/_/ff/_raw/zw/xa/1n.png)

เลือกไฟล์ > อัพโหลดไฟล์เข้าไปในบอร์ด > รอจนขึ้นว่า **save file OK**

![](https://ff.lnwfile.com/_/ff/_raw/ch/p7/dh.png)

IFTTT

หลังจากนั้น เรามาเริ่มด้วยการคลิ๊ก **Create** เพื่อเป็นการเริ่มสร้างโปรเจ็คใน IFTTT กัน
ซึ่งเราะใช้ Webhook มารับ HTTP Request และ ใช้ Google Sheet เพื่อเก็บข้อมูลครับ

![](https://ff.lnwfile.com/_/ff/_raw/ai/o0/g6.png)

![](https://ff.lnwfile.com/_/ff/_raw/m2/10/hn.png)

**มาเริ่มกันเลย!**

ขั้นตอนที่ 1 หลังจากคลิ๊กตรงคำว่า **This** ก็มาเลือก Webhook ครับ

![](https://ff.lnwfile.com/_/ff/_raw/zs/qp/gy.png)

ตั้งชื่อ event ว่าอะไรก็ได้ ในเคสนี้ผมตั้งว่า **spreadsheet** ครับ!

![](https://ff.lnwfile.com/_/ff/_raw/bc/ib/r3.png)

หลังจากนั้นคลิ๊กคำว่า **That** แล้วเชื่อม Service Sheet เข้ากับ Webhook ครับ

![](https://ff.lnwfile.com/_/ff/_raw/g2/za/92.png)

![](https://ff.lnwfile.com/_/ff/_raw/gm/xa/je.png)

หลังจากนั้นก็มา Custom format โดยในภาพจะเห็นเป็น 3 คอลัมม์ นั่นก็คือ 3 Value นั่นเองครับ

![](https://ff.lnwfile.com/_/ff/_raw/zo/vk/eg.png)

เมื่อเรากด Create Action แล้วให้เราไปก๊อป IFTTT Token มาครับ ซึ่งสามารถไปหาได้จากลิ้งก์นี้เลยครับ

เข้าหน้า https://ifttt.com/maker_webhooks/settings เพื่อไปกีอปปี้ Token มาเก็บไว้

![](https://ff.lnwfile.com/_/ff/_raw/pq/5c/m5.png)

หลังจากนั้น Copy Token มาใส่ในโปรแกรมของเรา โดยแก้ token, trigger และ query สำหรับการส่งข้อมูลเข้า Spreadsheet ของเราครับ

![](https://ff.lnwfile.com/_/ff/_raw/a5/j6/rz.png)

โหลดโค๊ดทั้งหมดได้ที่นี่เลย

```python
from Maix import GPIO
from machine import UART
from fpioa_manager import fm, board_info

import lcd, image
import usocket, network, time
import urequests as request

fm.register(8, fm.fpioa.GPIOHS0)
wifi_en=GPIO(GPIO.GPIOHS0,GPIO.OUT)

fm.register(board_info.WIFI_RX,fm.fpioa.UART2_TX)
fm.register(board_info.WIFI_TX,fm.fpioa.UART2_RX)

counter = 1
line_height = 20

WIFI_SSID = "LiLy_2.4G"
WIFI_PASS = "@O53732i36"


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
    #print(nic.ifconfig())

    headers ={
        "User-Agent": "MaixPy"
    }

    token = "dXUumQ_B39s6MarHpq2d11"
    trigger = "sheet1"
    query = "value1=Nat&value2=StayX"


    url = "http://maker.ifttt.com/trigger/{}/with/key/{}?{}".format(trigger, token, query)

    draw_line("")
    draw_line("HTTP Requesting...")
    res = request.post(url, headers=headers)
    print(res.content)
    print(res.status_code)

    if res.status_code == 200:
        draw_line(str(res.status_code), lcd.GREEN)
    else:
        draw_line(str(res.status_code))

    draw_line(res.content, lcd.YELLOW)
```

เมื่อเปิดดูใน Spreadsheet เราจะเห็นข้อมูลแบบนี้ (ซึ่งสามารถแก้ได้ตรง query ได้เลย)

![](https://ff.lnwfile.com/_/ff/_raw/jm/k2/ki.png)

ตอน Request ก็จะได้ข้อมูลแบบนี้ครับ 

![](https://ff.lnwfile.com/_/ff/_raw/f9/dm/jb.jpg)

แล้วเจอกันในบทความหน้าครับ :)

ณัฐ วีระวรรณ์