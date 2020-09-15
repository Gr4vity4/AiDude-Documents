# CorgiDude การใช้งาน GPIO

การใช้งาน GPIO ของบอร์ด CorgiDude นั้นก็จะมีที่ให้ใช้งานอยู่ 4 จุดด้วยกันนะครับ

![](https://ff.lnwfile.com/_/ff/_raw/o6/99/a4.jpg)

จากรูปภาพข้างต้น จะมี INPUT 2 จุด OUTPUT 2 จุด
INPUT 1 มี 11-15 เป็นชื่อขาใช้งานนะครับ 
INPUT 2 มี 1-3,10 เป็นชื่อขาใช้งานนะครับ 
OUTPUT 1 มี 18-21 เป็นชื่อขาใช้งานนะครับ
OUTPUT 2 มี 32-35 เป็นชื่อขาใช้งานนะครับ

เมื่อเราได้รู้จักการกับขาต่างๆ แล้ว ต่อไปก็มาดูโปแกรมกันเลยครับ 
ในที่นี้จะใช้เป็น micropython นะครับ

ในที่นี้ผมจะใช้ โมดูล Buttun ตัวนี้ในการแนะนำการใช้งานนะครับ

![](https://ff.lnwfile.com/_/ff/_raw/cy/dt/ld.png)

![](https://ff.lnwfile.com/_/ff/_raw/38/u5/zq.png)

หาซื้อได้จาก (https://www.aiiotshop.com/)[https://www.aiiotshop.com/] ได้เลยครับ

โมดูลตัวนี้ active high

ต่อ โมดูลเข้ากับ CorgiDude  เลือก INPUT 1 เลยนะครับ

![](https://ff.lnwfile.com/_/ff/_raw/hp/1f/b9.png)

หลังจากต่อเสร็จ มาดูโปรแกรมกันต่อครับ

```
import utime
from Maix import GPIO
from board import board_info
from fpioa_manager import fm
```

ข้อความข้างบนเป็น เรียกใช้  library ในที่นี้ก็จะมี 
utime เวลาที่นับขึ้นตั้งแต่เปิดเครื่อง
GPIO คือ GPIO ให้ใช้งาน

```
#board_info คือ ใช้ที่ใช้แทงขา
#fm คือ ตัวจอง GPIO ภายใน
fm.register(11, fm.fpioa.GPIOHS0, force=True)
fm.register(12, fm.fpioa.GPIOHS1, force=True)
fm.register(13, fm.fpioa.GPIOHS2, force=True)
fm.register(14, fm.fpioa.GPIOHS3, force=True)
fm.register(15, fm.fpioa.GPIOHS4, force=True)

#เป็นการตั้งค่า GPIO ภายในกับภายนอก 
#ภายนอกเป็น 11,12,13,14,15 เป็นต้น
#ภายในเป็น fm.fpioa.GPIOHS0,fm.fpioa.GPIOHS1,fm.fpioa.GPIOHS2 เป็นต้น
input11 = GPIO(GPIO.GPIOHS0, GPIO.IN)
input12 = GPIO(GPIO.GPIOHS1, GPIO.IN)
input13 = GPIO(GPIO.GPIOHS2, GPIO.IN)
input14 = GPIO(GPIO.GPIOHS3, GPIO.IN)
input15 = GPIO(GPIO.GPIOHS4, GPIO.IN)

#ต่อไปกำหนดว่าเป็น INPUT หรือ OUTPUT 
GPIO.IN คือ กำหนดให้เป็น INPUT
GPIO.OUT คือ กำหนดให้เป็น OUTPUT
while 1:
    print("input:", input11.value(), input12.value(), input13.value(), input14.value(), input15.value())

    utime.sleep_ms(500)

#แสดงผมทุกขาออกมา
input11.value() คือ การดึงค่า INPUT มาแสดงได้
input11.value(0) คือ การกำหนด ลอจิก 0 ไปยัง input11 นั้นเอง

#ดังนี้ถ้าเอาโปรแกรมมาต่อรวมกับ

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import utime
from Maix import GPIO
from board import board_info
from fpioa_manager import fm


fm.register(11, fm.fpioa.GPIOHS0, force=True)
fm.register(12, fm.fpioa.GPIOHS1, force=True)
fm.register(13, fm.fpioa.GPIOHS2, force=True)
fm.register(14, fm.fpioa.GPIOHS3, force=True)
fm.register(15, fm.fpioa.GPIOHS4, force=True)

input11 = GPIO(GPIO.GPIOHS0, GPIO.IN)
input12 = GPIO(GPIO.GPIOHS1, GPIO.IN)
input13 = GPIO(GPIO.GPIOHS2, GPIO.IN)
input14 = GPIO(GPIO.GPIOHS3, GPIO.IN)
input15 = GPIO(GPIO.GPIOHS4, GPIO.IN)


while 1:
    print("input:", input11.value(), input12.value(), input13.value(), input14.value(), input15.value())

    utime.sleep_ms(500)

///////////////////////////////////////////////////////////////////////////////////////////////////////////
```


ก็จะได้โปรแกรมอ่านค่า Button ทั้งโหมดในโมดูล

หลังจากนี้ ผมจะให้ โจทย์ ลองเขียนแสดง หลอดไป LED RGB แบบกระพริบพร้อมกับ ที่อยู่บนบอด์ทโดย ขา R=22,G=24,B=23 ใช้ทำ 10 นาทีครับเริ่มครับ