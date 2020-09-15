# CorgiDude บอร์ด Image Clssification โดยใช้ MobilenetV1

ดีครับ สำหรับบอร์ด CorgiDude ที่อยากจะทำ Image Clssification นั้นนะครับ บทความนี้จะมาสอนใช้โมเดลที่มีอยู่แล้วนะครับ
แต่ถ้าอยากจะเทรนเองเดียวมีบทความต่อให้นะครับ เรามาเริ่มกันเลยดีกว่าครับ
ก่อนอื่นก็ต้องมี โมเดลก่อนครับ ลิ้งโหลดด้านล่างครับ

(https://github.com/AiDude-io/CorgiDude/blob/master/models/MobilenetV1_1000/mbnet751.kmodel)[https://github.com/AiDude-io/CorgiDude/blob/master/models/MobilenetV1_1000/mbnet751.kmodel]

ต่อไปก็ทำการ Flash model ที่ได้โหลดมาครับ หรื่อใคร Flash model ไม่เป็น ไปทำตามบทความตามลิ้งต่อไปนี้ครับ

(https://www.aiiotshop.com/b/5)[https://www.aiiotshop.com/b/5]

Flash ไปที่ตำแหน่ง 0x200000 เลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/ju/h2/l5.png)

หลังจาก Flash เสร็จแล้ว ต่อไปนำไฟล์ labels.txt ไปใว้ใน SD Card ได้เลยครับ
ไฟล์ labels.txt หาได้จาก 

(https://github.com/AiDude-io/CorgiDude/blob/master/models/MobilenetV1_1000/labels.txt)[https://github.com/AiDude-io/CorgiDude/blob/master/models/MobilenetV1_1000/labels.txt]

นำไฟล์ labels.txt ไปใส่ SD Card ได้เลยครับ เรามารัน script ต่อไปนี้ได้เลยครับ

```python
import sensor, image, lcd, time
import KPU as kpu
sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.set_windowing((224, 224))
sensor.set_vflip(1)
sensor.run(1)
lcd.init(type=2, freq=20000000, color=lcd.BLACK)
lcd.rotation(2)
f=open('/sd/labels.txt','r')
labels=f.readlines()
f.close()

task = kpu.load(0x200000) 
clock = time.clock()
while(True):
    img = sensor.snapshot()
    clock.tick()
    fmap = kpu.forward(task, img)
    fps=clock.fps()
    plist=fmap[:]
    pmax=max(plist) 
    max_index=plist.index(pmax)
    a = lcd.display(img)
    lcd.draw_string(0, 0, "%.2f:%s "%(pmax, labels[max_index].strip()))
    print(fps)
a = kpu.deinit(task)
```

สำหรับใครที่ Copy Script แล้วมีปัญหา โหลดได้ครับ

(https://github.com/AiDude-io/CorgiDude/blob/master/models/MobilenetV1_1000/MobilenetV1_1000.py)[https://github.com/AiDude-io/CorgiDude/blob/master/models/MobilenetV1_1000/MobilenetV1_1000.py]

ผลจากการรันดูครับ

![](https://ff.lnwfile.com/_/ff/_raw/dx/wf/qr.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/p9/r8/f0.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/j2/xc/2f.jpg)

