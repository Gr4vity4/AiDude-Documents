# ระบบลงเวลาด้วยใบหน้า EP3

ใน ep นี้เราจะมาทดสอบแล้วก็รันโค้ดกัน บอร์ดที่ลงโมเดลและลงโค้ด (บันทึกให้รันอัตโนมัติไว้แล้ว) จะทำการจับภาพใบหน้าและส่งไปยัง FaceEncoder เพื่อทำการจำแนกใบหน้าออกมา และนำ ID ใบหน้าที่ได้ส่งเข้าไปใน Google Sheet ผ่าน IFTTT ตามที่เราได้ตั้งค่าไว้
Log ที่ได้ผมได้เขียน Script เพื่อให้สามารถดึงข้อมูลวันที่และ ID ออกมาเป็นระบบลงเวลาอย่างง่าย ๆ ถ้ามีใบหน้าปรากฏในช่วงเวลาที่กำหนดจะแสดงเลข 1 ออกมา สามารถนำไปประยุกต์ใช้งานต่อได้ตามสะดวกเลยครับ
เดี๋ยว EP หน้าจะอธิบายโค้ดและ วิธีแก้ไขพารามิเตอร์ต่าง ๆ กัน

=> [[google sheet การเอา log ไปใช้งาน]] (ให้ทำการก๊อปปี้ไปใช้ เข้าไปที่เมนู ไฟล์ -> ทำสำเนา) : [https://docs.google.com/spreadsheets/d/1XRgiMkV72p_w7jd6VNcCcLb2Z9OipHG7r4OOdyiSQXI/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1XRgiMkV72p_w7jd6VNcCcLb2Z9OipHG7r4OOdyiSQXI/edit?usp=sharing)

=> [[โค้ด Download ได้จาก]] : [https://github.com/AiDude-io/CorgiDude/tree/master/09%20-%20Face%20Recognition](https://github.com/AiDude-io/CorgiDude/tree/master/09%20-%20Face%20Recognition)

<video width="640" height="360" controls>
  <source :src="$withBase('/face_recognition/ep3.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
