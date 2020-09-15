# ตัวอย่างการใช้งาน CorgiDude เก็บข้อมูลเมื่อตรวจเจอใบหน้าคนด้วย ThingSpeak

🌟 ยินดีต้อนรับผู้อ่านทุกท่าน วันนี้เราจะมาเพิ่มความสามารถให้กับ CorgiDude ด้วยการเก็บข้อมูลบน Cloud กันแบบฟรี ๆ 🎉 แต่มีข้อแม้ข้อมูลจะต้องเป็นตัวเลข เท่านั้น เหมาะสำหรับการเก็บข้อมูลในรูปแบบนับจำนวน นอกจากนี้ยังทราบได้ว่าข้อมูลถูกบันทึกไว้ช่วงเวลาใด ทำให้สะดวกมากก นั่นคือ ThingSpeak นั่นเอง

**📚 สมัครสมาชิก ThingSpeak**

ขั้นตอนแรก ให้ทำการสมัครสมาชิกให้เรียบร้อยกันก่อนโดยเข้าไปที่ลิงก์ https://thingspeak.com/login

![](https://ff.lnwfile.com/_/ff/_raw/p9/yw/jt.png)

ขั้นตอนถัดมาให้เรากรอกข้อมูล อีเมล, ประเทศ, ชื่อ-นามสกุล และคลิกปุ่ม Continue ระบบจะส่งลิงก์ยืนยันไปยังอีเมลที่เราใช้สมัคร ให้ทำการยืนยันให้เรียบร้อยก่อนการใช้งาน

![](https://ff.lnwfile.com/_/ff/_raw/p7/5y/s4.png)

**📚 สำหรับผู้ที่สมัครสมาชิก ThingSpeak เรียบร้อยแล้ว**

ให้ทำการล็อกอิน ThingSpeak ได้ที่ลิงก์ https://thingspeak.com/login หลังจากเข้ามาแล้ว เราจะพบกับหน้า Channel ว่างเปล่า (หากยังไม่เคยสร้าง Channel มาก่อนหน้า) โดยให้เราคลิกปุ่ม New Channel

![](https://ff.lnwfile.com/_/ff/_raw/nn/hu/fd.png)

หลังจากนั้นเราจะพบกับหน้าแบบฟอร์มสร้าง Channel โดยในตัวอย่างภาพจะมี 2 ส่วนที่เป็นพื้นฐานตั้งค่า ซึ่งในส่วน A ให้เราทำการตั้งชื่อ Channel ที่เราจะใช้เก็บข้อมูล โดยในตัวอย่างตั้งชื่อว่า CorgiDude Channel และในส่วน B ให้เราติ๊กถูก Field ตามจำนวนที่ต้องการใช้งาน เช่น หากต้องการเก็บค่าอุณภูมิอากาศ ให้เก็บใน Field1 หากต้องการเก็บค่าความชื้นในอากาศให้แยกเก็บใน Field2 เป็นต้น

![](https://ff.lnwfile.com/_/ff/_raw/f1/ld/u3.png)

ในส่วนข้อมูลอื่น ๆ หากมีข้อมูลอยู่แล้วสามารถกรอกเพิ่มเติมได้เลย หลังจากกรอกข้อมูลเสร็จแล้ว ให้ทำการคลิกปุ่ม Save Channel

![](https://ff.lnwfile.com/_/ff/_raw/ao/ao/8t.png)

หลังจากสร้าง Channel เรียบร้อยแล้ว เราจะพบกับหน้าเว็บดังตัวอย่างภาพ เพียงเท่านี้ก็พร้อมให้ CorgiDude ส่งข้อมูลมายัง ThingSpeak ได้แล้ว 🎉

![](https://ff.lnwfile.com/_/ff/_raw/yd/p9/y9.png)

**📚 วิธีการดู ThingSpeak API Key เพื่อใช้ในการส่งข้อมูล**

คลิกเมนู API Keys จะพบกับหน้าดังภาพตัวอย่าง ซึ่งในส่วน Write และ Read จะมี API Key แตกต่างกันเหมาะสำหรับไว้ใช้ในการนำไปเขียนโปรแกรมเพื่อเช็คสิทธิ์ในการ อ่าน / เขียน นั่นเอง

![](https://ff.lnwfile.com/_/ff/_raw/gi/z1/pu.png)

**📚 ตัวอย่าง Source Code การตรวจจับใบหน้าคนด้วยบอร์ด CorgiDude และส่งข้อมูลไปยัง ThingSpeak**

**หมายเหตุ :** ให้ทำการอัพเดท Firmware CorgiDude เป็น Version ล่าสุด และตั้งค่าการเชื่อมต่อ WiFi ให้เรียบร้อย ซึ่งสามารถทำตามบทความได้จากลิงก์ https://www.aiiotshop.com/b/22

[![](http://img.youtube.com/vi/8PCeLBL6Hvg/0.jpg)](http://www.youtube.com/watch?v=8PCeLBL6Hvg)

```python
import sensor
import image
import lcd
import KPU as kpu
from Corgi85 import corgi85
import random

while(corgi85.wifi_check() == 0):
    print("WIFI Connecting")
    time.sleep(1)

corgi85.Thingspeak_init()
corgi85.Thingspeak_accountSetup("_____WRITE_KEY_____", "_____CHANNEL_ID_____")

lcd.init()
lcd.rotation(0)

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.run(1)

task = kpu.load(0x300000)

anchor = (1.889, 2.5245, 2.9465, 3.94056, 3.99987, 5.3658, 5.155437, 6.92275, 6.718375, 9.01025)
a = kpu.init_yolo2(task, 0.5, 0.3, 5, anchor)

while(True):
    img = sensor.snapshot()

    faces = kpu.run_yolo2(task, img)

    if faces:
        for face in faces:
            img.draw_rectangle(face.rect(),color=(0,255,0),thickness=2)
    img = img.resize(240,240)
    lcd.display(img)

    if faces:
        corgi85.Thingspeak_writeField(3, 100)
        print("Person Detect!")
    else:
        corgi85.Thingspeak_writeField(3, 0)

kpu.deinit(task)
```

micropython ที่ใช้ใน CorgiDude ได้เลย โดย ตัวอย่าง code เป็นแบบนี้ครับ ([รายละเอียดเพิ่มเติม LINK](https://www.aiiotshop.com/b/2))
