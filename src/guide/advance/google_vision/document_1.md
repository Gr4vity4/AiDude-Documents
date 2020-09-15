# การใช้งาน Google Vision

**🌟 ภาพตัวอย่างการใช้ Google Vision อ่านป้ายทะเบียนรถ**

![](https://ff.lnwfile.com/_/ff/_raw/xm/17/19.jpg)

😲 **ผลลัพธ์ที่ได้จาก Google Vision**

![](https://ff.lnwfile.com/_/ff/_raw/57/no/pl.png)

จากภาพตัวอย่าง ในส่วนเรื่องความแม่นยำจะเห็นว่า ตัวอักษร 'ง' ถูกสะกดเป็น 'ม' จะไม่แม่นยำ 100% แต่ทั้งนี้ความแม่นยำจะขึ้นอยู่กับ font ที่เลือกใช้ หรือความชัดของรูปภาพด้วยนั่นเอง ทั้งนี้เราอาจจะเก็บทั้งรูปภาพ และให้ Google Vision แกะตัวอักษรควบคู่ก็ได้เช่นกัน เพื่อใช้ตรวจสอบภายหลัง

ก่อนอื่นเรามาทำความรู้จักกับ **Google Vision** เบื้องต้นกันเถอะ Google Vision เป็นบริการจากทาง Google ที่มี API ให้ใช้งานทางด้าน **Machine Learning (ML)** โดยจะมีทั้งเอกสาร และโค้ดตัวอย่างของภาษาโปรแกรมมิ่ง เช่น **C#, GO, Java, Node.js, PHP, Python, Ruby** เรียกได้ว่า Google ยกตัวอย่างภาษาโปรแกรมมิ่งยอดนิยมมาให้ใช้กันเลยทีเดียว

ในบทความนี้เราจะใช้หนึ่งในบริการจาก Google Vision นั้นก็คือ **Optical Character Recognition (OCR)** หรือที่เรารู้จักกัน คือการแกะตัวอักษรจากรูปภาพ หากต้องการทราบความสามารถ Google Vision ทั้งหมด แน่นอนว่ามีฟีเจอร์อีกมากมายที่บทความนี้ไม่ได้พูดถึง ให้เข้าไปดูรายละเอียดได้ที่ลิงก์ **https://cloud.google.com/vision**

**🌟 ภาษาโปรแกรมมิ่งที่ใช้ทดสอบการใช้งาน Google Vision**
ในตัวอย่างบทความเราจะเลือกใช้ **Node.js** และเรียก **REST API** เพื่อใช้งาน **OCR** มาแกะตัวอักษรป้ายทะเบียนรถ

🌟 **ขั้นตอนการทำงานของโปรแกรม**

**📌 Step 1
**Line Messaging API ใช้เพื่อส่งรูปภาพจากแชทไลน์ ไปประมวลผลบน Server

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/100px-LINE_logo.svg.png)

วิธีการตั้งค่าการใช้งาน Line Messaging API มีบทความในอินเทอร์เน็ตค่อนข้างเยอะเลยทีเดียว เช่น

[**13 สัญญาณจาก Webhook Events ที่จะปลุกให้ LINE Bot ของคุณตื่นจากภวังค์**](https://medium.com/linedevth/12-สัญญาณจาก-webhook-events-ที่จะปลุกให้-line-bot-ของคุณตื่นจากภวังค์-4cb7da653274)

**[Chat Bot ง่ายๆ ด้วย Line Messaging API !! [PHP, NodeJS, Heroku\] แบบ Step by step](https://medium.com/@benz20003/chat-bot-ง่ายๆ-ด้วย-line-messaging-api-php-nodejs-heroku-แบบ-step-by-step-943322819854)**

**📌 Step 2**
Node.js ใช้เพื่อการประมวลผล Webhook (Line Messaging API)

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png)

Source Code : **https://github.com/Gr4vity4/Google-Vision-OCR**

**📌 Step 3**
Google Vision ใช้ฟีเจอร์ OCR เพื่ออ่านป้ายทะเบียนรถ โดยประมวลผลที่รับมาจาก Node.js และส่งผลลัพธ์กลับ

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Google_Cloud_Logo.svg/250px-Google_Cloud_Logo.svg.png)

หมายเหตุ : ให้ทำการสร้าง Credential ในส่วน API Key ให้เรียบร้อยก่อน เพื่อที่เราจะนำ Key ที่ได้ไปใช้งานภายใน REST API

![](https://ff.lnwfile.com/_/ff/_raw/a8/sz/m3.png)

และตรวจสอบการเปิดใช้งาน Library **Cloud Vision API**

![](https://ff.lnwfile.com/_/ff/_raw/wh/uc/u2.png)
