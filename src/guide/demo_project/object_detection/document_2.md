# CorgiDude บอร์ด ตรวจจับใบหน้าด้วย Yolo Face detection

ดีครับ สำหรับบอร์ด CorgiDude ที่อยากจะทำ Face detection นั้น ครับ บทความนี้จะมาสอนใช้โมเดลที่มีอยู่แล้วนะครับ
Face detection คือ การหาหน้าในรูปภาพ จะได้ตำแหน่งของหน้า ตามจำนวนหน้าเลยครับ
เรามาเริ่มกันเลยดีกว่าครับ
ก่อนอื่นก็ต้องมี โมเดลก่อนครับ ลิ้งโหลดด้านล่างครับ

(https://github.com/AiDude-io/CorgiDude/blob/master/models/Face_detection/facedetect.kmodel)[https://github.com/AiDude-io/CorgiDude/blob/master/models/Face_detection/facedetect.kmodel]

ต่อไปก็ทำการ Flash model ที่ได้โหลดมาครับ หรื่อใคร Flash model ไม่เป็น ไปทำตามบทความตามลิ้งต่อไปนี้ครับ

(https://www.aiiotshop.com/b/5)[https://www.aiiotshop.com/b/5]

Flash  ไปที่ตำแหน่ง 0x300000 เลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/3g/jy/2j.jpg)

ต่อไปมาลอง Script ดูครับ

```python
import sensor
import image
import lcd
import KPU as kpu

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.run(1)
lcd.init(type=2, freq=20000000, color=lcd.BLACK)
task = kpu.load(0x300000)
anchor = (1.889, 2.5245, 2.9465, 3.94056, 3.99987, 5.3658, 5.155437, 6.92275, 6.718375, 9.01025)
a = kpu.init_yolo2(task, 0.5, 0.3, 5, anchor)
while(True):
    img = sensor.snapshot()
    code = kpu.run_yolo2(task, img)
    if code:
        for i in code:
            print(i)
            a = img.draw_rectangle(i.rect(),color=(255,0,0),thickness=2)
    a = lcd.display(img)
a = kpu.deinit(task)
```

สำหรับใครที่ Copy Script แล้วมีปัญหา โหลดได้ครับ

(https://github.com/AiDude-io/CorgiDude/blob/master/models/Face_detection/find_face.py)[https://github.com/AiDude-io/CorgiDude/blob/master/models/Face_detection/find_face.py]

ผลจากการทดลอง

![](https://ff.lnwfile.com/_/ff/_raw/je/ny/0t.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/3e/dt/tk.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/kq/ox/yn.jpg)

