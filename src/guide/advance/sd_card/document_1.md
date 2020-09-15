# CorgiDude บอร์ด กับการใช้งาน อ่านและเขียนไฟล์ใน SD Card

สวัสดีครับ วันนี้ผมจะมาพูดเรื่องการใช้งาน **CorgiDude บอร์ด กับการใช้งาน อ่านและเขียนไฟล์ใน SD Card** ติดมานะครับ
การใช้งานการอ่านก่อนเลยนะครับ 

การใช้งาน SD Card นั้นต้องใส่ SD Card ก่อนนะครับ 
เมื่อทำการต่อเสร็จแล้ว

ต่อไปมาดูโปรแกรม ตัวอย่าง

การอ่าน SD card ก่อนเลยนะครับ
การอ่าน SD card นั้นผมจะมาสอนอยู่ 2 อย่างครับอย่างที่่ 1 อ่านรูปจาก SD card อย่างที่่ เป็นการอ่านไฟล์ txt 
เรามาเริ่มอ่านรูปจาก SD card ก่อนเลยครับ
ก่อนอื่นก็เตรียมรูปผมแนะนำให้เป็นไฟล์ jpg นะครับนำไปใส่ใน SD card ไว้ได้เลยครับ
หลังจากที่เราได้เอารูปใส่ใน SD card แล้วให้เราจำชื่อไฟล์รูปของเราด้วยนะครับเพื่อเอาไปใช้งานตอนไหน script เราจะได้นำชื่อรูปใส่ในคำสั่งอ่านรูปครับ

```python
img = image.Image("/sd/33.jpg")
```

จากคำสั่งข้างบน อ่านรูปชื่อ 33.jpg ใน SD นะครับ

```python
import sensor, image, time,lcd

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time = 2000)

lcd.init(type=2, freq=20000000, color=lcd.BLACK)

clock = time.clock()

while(True):
    clock.tick()
    #img = sensor.snapshot()
    img = image.Image("/sd/33.jpg")
    lcd.display(img)
    print(clock.fps())
```

![](https://ff.lnwfile.com/_/ff/_raw/7k/i5/tf.jpg)

สิ่งที่สำคัญ รูปไม่ควรใหญ่กว่าจอ นะครับ ถ้าใหญ่ได้แต่ต้องรีขนาด และถ้าใหญ่เกินแรมจะไม่พอนะครับ ต่อไปมาดูตัวอย่างการอ่านไฟล์ TXT ต่อกันเลยนะครับ นำไฟล์ .txt ที่เราจะอ่านไปใว้ใน SD ครับ ไฟล์ของผมชื่อ test.txt โปรแกรมตัวอย่างครับ

```python
import sensor, image, time,lcd

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time = 2000)

lcd.init(type=2, freq=20000000, color=lcd.BLACK)

clock = time.clock()

f=open('/sd/test.txt','r')
labels=f.read()
f.close()

img = image.Image()
img.draw_string(0, 0, labels, scale=1)
lcd.display(img)
```

![](https://ff.lnwfile.com/_/ff/_raw/fj/71/ga.jpg)

ต่อไปมาดูวิธีการบันทึกรูปลงใน SD กันครับ

```python
a = img.save("/sd/test.jpg")

import sensor, image, time,lcd

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time = 2000)

lcd.init(type=2, freq=20000000, color=lcd.BLACK)

clock = time.clock()
mun = 0
while(True):
    clock.tick()
    img = sensor.snapshot()
    #img = image.Image("/sd/33.jpg")
    mun = mun+1
    img.save("/sd/"+str(mun)+".jpg")
    lcd.display(img)
    print(clock.fps())
```

โปรแกรมตัวนี้บันทึกรูปไปเรื่อยๆๆโดยผมเปลียนชื่อครับ

![](https://ff.lnwfile.com/_/ff/_raw/x1/cb/9z.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/s3/91/2k.jpg)

ต่อไปผมจะมาให้ตัวอย่าโปรแกรมเขียนไฟล์ .csv นะครับ อันดับแรไปสร้างไฟล์ .csv ใน SD ก่อนครับตั้งชื้ออะไรก็ได้ครับ ยิ่งสั่นยิ่งดีครับ ของผม เป็น test.csv แล้วกันครับ

```python
import os
import time


f = open('/sd/test.csv', 'a')
deta =0
deta2 =0
deta3 =0


while True:
    deta = deta+1
    deta2 = deta2+2
    deta3 = deta3+3
    f.write(str(deta)+","+str(deta2)+","+str(deta3)+"\n")
    f.flush()
    time.sleep(1)
```

