# การทำ dataset แบบ Object Detection ชนิด VOC ที่สามารถเอาไปใช้ตอนเทรนใน yolo2 ได้เลยครับ

สวัสดีครับ 
บทความนี้ จะมาแนะนำโปรแกรม การทำ dataset แบบ Object Detection ชนิด VOC ที่สามารถเอาไปใช้ตอนเทรนใน yolo2 ได้
ชึ่งโปรแกรมนี้ผมใช้มาตลอดครับ มันใช้คงใช้งานง่ายสำหรับผมนะครับแต่ไม่รู้เหมือนกันว่าคนอื่นจะใช้งานง่ายด้วยไหม
การที่เราจะทำ dataset เองนั้นแปลว่า dataset ที่เราอยากได้นั้นมันไม่มีใครแจก เราจึงต้องทำเองใช้ไหมครับ แต่ถ้ามี dataset อยู่แล้ว
ผมไม่แนะนำให้ทำเองนะครับเพราะ มันใช้เวลามากครับ 

โปรแกรมที่ใช้เป็นตัวนี้ครับ (labelImg)[https://github.com/tzutalin/labelImg]

(https://github.com/tzutalin/labelImg)[https://github.com/tzutalin/labelImg]

วิธีการโหลด คลิกตามที่ขีดเส้นไต้ครับ

![](https://ff.lnwfile.com/_/ff/_raw/id/7j/mb.png)

แล้วคลิกตามที่ขีดเส้นไต้ครับ

![](https://ff.lnwfile.com/_/ff/_raw/cd/0d/p7.png)

หลังจากโหลดเสร็จ แตกไฟล์ เปิด labelImg.exe ได้เลยครับ หลังจากเปิดแล้ว ตั้งค่าตามรูปครับ 

![](https://ff.lnwfile.com/_/ff/_raw/qy/ka/l6.png)

หลังจากตั้งค่าเสร็จแล้ว ต่อไปมา ปุ่มที่ต้องให้นะครับ

![](https://ff.lnwfile.com/_/ff/_raw/fb/id/kt.png)

Open เปิดรูปที่เราจะเฉลย รูปเดียว

Open Dir เปิดรูปที่เราจะเฉลย ทั้ง folder

Change Save Dir เป็นที่อยู่ Annotation

ถ้าเป็น YOLO ให้เปลียนเป็น PascalVOC แต่ถ้าเป็น PascalVOC อยู่แล้วไม่ต้องเปลี่ยนครับ

ต่อไปเป็น KEY ลัดที่ผมชอบใช้ครับ

w คือ เอาใว้วาดกรอบว่าจะเอาจับอะไร
d คือ เปลียนรูปถัดไป
a คือ ย้อนกลับรูป เพื่อแก้ไข

หมายเหตุ การกด d,a เสร็จจะทำการบันทึกตลอด

File List คือตัวแสดงรูปทั้งหมดที่เราจะใส่ Object 

![](https://ff.lnwfile.com/_/ff/_raw/4v/sq/za.png)

Box Labels คือ หน้าต่าง ตั้งค่า Object ชื่ออะไร
แต่ถ้าไม่อยากเพิ่มทุกครั้ง ให้ติก Use default label ตรงช่องว่างให้ใส่ ก็ใส่เป็นชื่อ Object ไปเลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/wm/iq/uv.png)

ตัวอย่างเป็น วีดีโอ

[![](http://img.youtube.com/vi/B0M7R0dK18U/0.jpg)](http://www.youtube.com/watch?v=B0M7R0dK18U "")