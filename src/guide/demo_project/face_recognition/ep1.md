# Face Recognition EP1

มาทำระบบจดจำใบหน้า พร้อมส่งข้อมูลเข้า Google Sheet เพื่อทำระบบลงเวลา ด้วยบอร์ด CorgiDude กัน
โดยตอนนี้จะเป็น ทฤษฏีแบบคร่าว ๆ นะครับปูพื้นฐานสำหรับคนที่ไม่เคยรู้มาก่อนว่ามันทำยังไงก่อนที่จะเริ่มเขียนโปรแกรม

หัวใจสำคัญของ Face Recognition ก็คือตัว Face Encoder (หรือจะเรียน face embedding / feature extractor ก็แล้วแต่) หน้าที่ของมันคือ จะแปลงภาพใบหน้าให้ออกมาเป็นตัวเลขจำนวนหนึ่ง (ใน CorgiDude เป็นเลขทศนิยม 128 ตัว) ความพิเศษของโมเดลนี้คือ ถ้าเราเอาภาพใบหน้าที่คล้าย ๆ กันเข้าไปมันจะได้เลขชุดที่คล้าย ๆ กันออกมา
เราจึงสามารถเอาเลขชุดนี้ไปเปรียบเทียบกับฐานข้อมูลเลขใบหน้าแต่ละคนที่เราเก็บไว้ เพื่อหาว่ามันคล้ายกับเลขไหนมากที่สุด แล้วทายว่าเป็นคนนั้นออกมา
รายละเอียดจะเป็นยังไง ดูใน Video นี้ได้เลยครับ

<video width="640" height="360" controls>
  <source :src="$withBase('/face_recognition/ep1.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>
