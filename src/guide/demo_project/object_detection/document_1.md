# CorgiDude บอร์ดกับการทำ Object Detection โดยใช้ Yolo

ดีครับ สำหรับบอร์ด CorgiDude ที่อยากจะทำ  Object Detection นั้นนะครับ บทความนี้จะมาสอนใช้โมเดลที่มีอยู่แล้วนะครับ แต่ถ้าอยากจะเทรนเองเดียวมีบทความต่อให้นะครับ เรามาเริ่มกันเลยดีกว่าครับ Object Detection คือ การหาวัตถุ บนภาพ เช่า ตรวจจับใบหน้า ตรวจจับหน้าแมว ตรวจจับลูกบอล ตัวอย่างของผมเป็นตัวอย่าง yolov2 20class  ตรวจจับได้ 20 อย่างเลย 

classes = ['aeroplane', 'bicycle', 'bird', 'boat', 'bottle', 'bus', 'car', 'cat', 'chair', 'cow', 'diningtable', 'dog', 'horse', 'motorbike', 'person', 'pottedplant', 'sheep', 'sofa', 'train', 'tvmonitor'] 

ก่อนอื่นก็ต้องมี โมเดลก่อนครับ ลิ้งโหลดด้านล่างครับ (https://github.com/AiDude-io/CorgiDude/blob/master/models/yolo2/20class.kmodel)[https://github.com/AiDude-io/CorgiDude/blob/master/models/yolo2/20class.kmodel] ต่อไปก็ทำการ Flash model ที่ได้โหลดมาครับ หรื่อใคร Flash model ไม่เป็น ไปทำตามบทความตามลิ้งต่อไปนี้ครับ (https://www.aiiotshop.com/b/5)[https://www.aiiotshop.com/b/5] Flash  ไปที่ตำแหน่ง 0x500000 เลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/el/tm/4n.png)

ต่อไปมาลอง Script ดูครับ

```python
import sensor,image,lcd,time
import KPU as kpu

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.set_vflip(1)
sensor.run(1)
lcd.init(type=2, freq=20000000, color=lcd.BLACK)
lcd.rotation(2)
clock = time.clock()
classes = ['aeroplane', 'bicycle', 'bird', 'boat', 'bottle', 'bus', 'car', 'cat', 'chair', 'cow', 'diningtable', 'dog', 'horse', 'motorbike', 'person', 'pottedplant', 'sheep', 'sofa', 'train', 'tvmonitor']
task = kpu.load(0x500000) 
anchor = (1.08, 1.19, 3.42, 4.41, 6.63, 11.38, 9.42, 5.11, 16.62, 10.52)
a = kpu.init_yolo2(task, 0.5, 0.3, 5, anchor)
while(True):
    clock.tick()
    img = sensor.snapshot()
    code = kpu.run_yolo2(task, img)
    print(clock.fps())
    if code:
        for i in code:
            a=img.draw_rectangle(i.rect())
            a = lcd.display(img)
        for i in code:
            lcd.draw_string(i.x(), i.y(), classes[i.classid()], lcd.RED, lcd.WHITE)
            lcd.draw_string(i.x(), i.y()+12, '%.3f'%i.value(), lcd.RED, lcd.WHITE)
    else: 
        a = lcd.display(img)
a = kpu.deinit(task)
```

สำหรับใครที่ Copy Script แล้วมีปัญหา โหลดได้ครับ

(https://github.com/AiDude-io/CorgiDude/blob/master/models/yolo2/yolo2.py)[https://github.com/AiDude-io/CorgiDude/blob/master/models/yolo2/yolo2.py]

ผลการทดลอง

![](https://ff.lnwfile.com/_/ff/_raw/gf/vn/ya.jpg)

![](https://ff.lnwfile.com/_/ff/_raw/m3/3f/cr.jpg)

