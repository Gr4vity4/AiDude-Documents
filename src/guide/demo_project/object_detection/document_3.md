# CorgiDude บอร์ดกับการทำ Cat Face Detection โดยใช้ Yolo2

ดีครับ สำหรับบอร์ด CorgiDude ที่อยากจะทำ  Cat Face Detection นั้น ครับ บทความนี้จะมาสอนใช้โมเดลที่มีอยู่แล้วนะครับ
Cat Face Detection คือ การหาหน้าในรูปภาพ จะได้ตำแหน่งของหน้าแมว ตามจำนวนหน้าเลยครับ
เรามาเริ่มกันเลยดีกว่าครับ
ก่อนอื่นก็ต้องมี โมเดลก่อนครับ ลิ้งโหลดด้านล่างครับ

(https://github.com/AiDude-io/CorgiDude/blob/master/models/Cat_face_Detection/model006.kmodel)[https://github.com/AiDude-io/CorgiDude/blob/master/models/Cat_face_Detection/model006.kmodel]

ต่อไปก็ทำการ Flash model ที่ได้โหลดมาครับ หรื่อใคร Flash model ไม่เป็น ไปทำตามบทความตามลิ้งต่อไปนี้ครับ

(https://www.aiiotshop.com/b/5)[https://www.aiiotshop.com/b/5]

Flash ไปที่ตำแหน่ง 0x400000 เลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/p6/u9/9e.png)

ต่อไปมาลอง Script ดูครับ

```python
import sensor,image,lcd,time
import KPU as kpu

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.set_windowing((224, 224))
sensor.set_vflip(1)
sensor.run(1)
lcd.init(type=2, freq=20000000, color=lcd.BLACK)
lcd.rotation(2)
clock = time.clock()
classes = ['face','eye']
task = kpu.load(0x400000)
a = kpu.set_outputs(task, 0, 7,7,35)
anchor = (0.57273, 0.677385, 1.87446, 2.06253, 3.33843, 5.47434, 7.88282, 3.52778, 9.77052, 9.16828)
a = kpu.init_yolo2(task, 0.5, 0.3, 5, anchor)
while(True):
    img = sensor.snapshot()
    #a= img.resize(224,224)
    a = img.pix_to_ai()
    code = kpu.run_yolo2(task, img)
    if code:
        for i in code:
            a=img.draw_rectangle(i.rect(),color = (0, 255, 0),thickness=4)
    a = lcd.display(img)

a = kpu.deinit(task)
```

มาดูผลการทดลองดูครับ

![](https://ff.lnwfile.com/_/ff/_raw/cq/nv/z8.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/yy/p0/02.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/e0/66/bq.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/ui/h7/kl.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/ex/7j/93.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/8g/u4/bj.jpg)

