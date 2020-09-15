# CorgiDude บอร์ดกับการทำ License Plate Detection ของรถมอเตอร์ไซค์เท่านั้นนะครับโดยใช้ Yolo2

สวัสดีครับ
วันนี้ผมมาแจก โมเดล ตรวจจับป้ายทะเบียนรถมอเตอร์ไซค์ 
แล้วมันจะมีประโยชน์อะไร มีครับ
\- เอาไปนับรถเข้าได้
\- เอาไปตรวจจับรถมอเตอร์ไซค์บนทางเท้าได้แล้วถ่ายรูปส่งผ่าน Line (อันนี้ถ้าเอาไปให้ตำรวจอาจจะได้เงิน)

เรามาเริ่มกันเลยดีกว่า

ก่อนอื่นก็ต้องมี โมเดลก่อนครับ ลิ้งโหลดด้านล่างครับ

(https://github.com/AiDude-io/CorgiDude/blob/master/models/License_Plate_Detection/LIIII_anchors_gen.kmodel)[https://github.com/AiDude-io/CorgiDude/blob/master/models/License_Plate_Detection/LIIII_anchors_gen.kmodel]

ต่อไปก็ทำการ Flash model ที่ได้โหลดมาครับ หรื่อใคร Flash model ไม่เป็น ไปทำตามบทความตามลิ้งต่อไปนี้ครับ

(https://www.aiiotshop.com/b/5)[https://www.aiiotshop.com/b/5]

Flash ไปที่ตำแหน่ง 0x600000 เลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/39/1f/0w.png)

ต่อไปมาลอง Script ดูครับ

```python
import sensor,image,lcd,time
import KPU as kpu

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.set_windowing((224, 224))
sensor.set_vflip(1)
sensor.set_brightness(-2)
#sensor.set_contrast(-2)
sensor.run(1)
lcd.init(type=2, freq=20000000, color=lcd.BLACK)
lcd.rotation(2)
clock = time.clock()
classes = ["LI"]
task = kpu.load(0x600000)
#task = kpu.load("/sd/plate.kmodel")
a = kpu.set_outputs(task, 0, 7,7,30)
anchor = (0.45,0.50, 0.67,0.77, 0.91,1.08, 1.38,1.31, 2.45,2.19)
a = kpu.init_yolo2(task, 0.3, 0.3, 5, anchor)
time2 = 0
while(True):
    time1 = time2
    time2 = time.ticks_ms()
    img = sensor.snapshot()
    #a= img.resize(224,224)
    #a = img.pix_to_ai()
    code = kpu.run_yolo2(task, img)
    if code:
        for i in code:
            a=img.draw_rectangle(i.rect(),color = (0, 255, 0),thickness=5)
    a = lcd.display(img)
    print(1000/(time2-time1))

a = kpu.deinit(task)
```

ตัวอย่างการทดสอบ