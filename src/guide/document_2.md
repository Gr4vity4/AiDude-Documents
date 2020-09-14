# วิธีการลง MAIXPY ใน sipeed maix bit

สวัสดีครับ บทความนี้จะมาพูดถึงเรื่องของ K210 หรือ sipeed maix bit พอดีผมได้ลองใช้งาน MAIXPY ใน k210 นะครับ

kendryte k210 คืออะไร

![](https://ff.lnwfile.com/_/ff/_raw/b0/ve/ng.jpg)

เป็น IC คล้ายๆ กับไมโคร หรือ esp32 แต่ K210 ไม่มี wifi ให้ใช้งาน แต่มี KPU สำหรับประมวลผม AI ได้ 230GOPs
แล้วก็มี kendryte IDE ที่ทาง kendryte ทำมาให้ใช้งาน [https://kendryte.com/ ](https://kendryte.com/)ลิ้งให้ศึกษาข้อมูล
ต่อมาก็มี sipeed ซื้อ IC มาทำบอร์ดให้ใช้งาน มี sipeed maix bit ,Sipeed MAIX GO , Sipeed M1w Dock และอื่นๆ
ยังไม่หมดนะครับว่า sipeed ทำอะไรบ้าง sipeed ได้ สร้าง maixpy ที่เป็น micropython มาให้เราได้ใช้งานด้วย แล้วมี maixduino ที่สามารถเขียนโปรแกรมด้วย
arduino ide ก็ยังได้นะครับ ดังนั้น ไม่ว่าใครจะถนัด python ก็เขียนได้เลย หรือจะถนัด arduino ide ก็ยังได้นะครับเห็นแล้วครอบคลุม ทุการใช้งาน

ต่อไปมาดู คุณสมบัติ ของตัว k210 กันได้เลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/sz/er/8y.jpg)

สถาปัตยกรรมแบบ RISC-V 64 bit IMAFDC แบบ dual-core
มี KPU (หน่วยประมวลผล neural network) ภายในขนาด 64 KPU ( 576bit) ที่ 230GOPs ความถี่ 400MHz
SRAM ความเร็วสูงสุด 8MB
กินพลังงานสูงสุดเพียง 1W
รองรับการใช้งาน AI
และ IOT บางโมดูล นะครับ
หลังจากที่ได้รู้ข้อมูลเบื่องต้นแล้ว อลังการ มากเลยครับ

ต่อไปมาดู sipeed maix bit กันบ่างว่ามีอะไรติดมาบ้าง

![](https://ff.lnwfile.com/_/ff/_raw/5p/zf/b7.jpg)

ตามรูปเลยครับ คล้าย arduino nano ด้วยนะครับ เจ้าตัว sipeed maix bit ตัวนี้สามารถต่อ กล้องได้ ต่อ จอLCD ก็ได้ด้วยนะครับ เหมาะกับเอามาทำ AI ขนาดเล็ก สั่นมากขายเป็นชุด ตามรูปเลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/s0/lu/8p.jpg)

ดูจากรูปแล้ว มีกล้อง จอ แล้วก็มี IO ให้ใช้งานได้เลยด้วย
แล้วก็ลองคิดเล่นๆ ว่าจะเอาไปใช้ทำโปรเจค อะไรได้มากมาย เช่น

เครื่องมือตรวจจับสัตว์และไล่สัตว์
เครื่องให้อาหารสัตว์แล้วก็แยกด้วยว่าจะใช้สัตว์ตัวไหน
เครื่องเปิดประตูด้วยใบหน้า
เครื่องรดน้ำต้นไม้ด้วยกล้องก็ยังได้
เป็นต้น นะครับ

พอละ โม้มาเยอะแล้ว มาเข้าเนื้อหากันเลยดีกว่า
บทความนี้มาสอนลง maixpy ใน sipeed maix bit

โหลดโปรแกรม kflash_gui มาก่อนนะครับ หาได้จากลิ้ง https://github.com/sipeed/kflash_gui
โหลดมาก็เปิดใช้งานได้เลยครับ ถ้าได้เข้าโปรแกรมหน้าตาก็ตามรูปเลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/x9/ot/e0.jpg)

ต่อไป โหลดไฟล์ .bin จากลิ้ง https://github.com/cmmakerclub/maixpy_kmodel_v4_support/blob/master/maixpy_kmodel_v4_support.bin
ตัวนี้เป็น maixpy ตัวใหม่ที่รองรับโมเดล V4 ที่พี่ตูมตามได้ บิวมาให้เลยครับ

ต่อไป หลังจากที่เราได้เป็ดโปรแกรมมาแล้ว

![](https://ff.lnwfile.com/_/ff/_raw/hb/di/37.jpg)

เปิดไฟล์ .bin ที่ให้โหลดมาเลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/u0/jd/w9.jpg)

ปรับ Board เป็น Auto

![](https://ff.lnwfile.com/_/ff/_raw/fa/v0/b6.jpg)

เปลี่ยน Port เป็น Port ของ บอร์ท ที่เราได้ต่ออยู่

![](https://ff.lnwfile.com/_/ff/_raw/tc/72/vq.jpg)

กด Download

![](https://ff.lnwfile.com/_/ff/_raw/s4/7n/e5.jpg)

รอจนกว่าจะโหลดข้อมูลเสร็จ

![](https://ff.lnwfile.com/_/ff/_raw/14/nd/1q.jpg)

ขึ้นแบบนี้แปลว่าเสร็จแล้ว

จบแล้วครับ แค่นี้เราก็ได้ [maixpy](https://github.com/cmmakerclub/maixpy_kmodel_v4_support)
มาแล้วครับ บทความต่อไปก็จะเป็นบทความการใช้งาน [maixpy IDE ](https://github.com/cmmakerclub/maixpy_kmodel_v4_support)
นะครับรอติดตามกันได้เลยครับ

และสุดท้ายก็ขออภัยถ้าพิมผิดหรืออ่านไม่เข้าใจด้วยนะครับ(เขียนโดย นายอภินันท์ บุญทอง)
