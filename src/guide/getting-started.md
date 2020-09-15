# เริ่มต้นการใช้งาน

## วิธีการลง MAIXPY ใน sipeed maix bit

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

## การใช้งาน kflash_gui และการติดตั้ง ทั้งอับโหลด .bin kmodel

ในการที่เราจะ flash K210 นั้นจะต้องใช้โปรแกรม kflash_gui เราสามารถไปโหลดได้จากข้างล่างต่อไปนี้โหลด Firmware MaixPy (ตัวนี้รองรับโมเดล V4) ได้จากที่นี้
https://github.com/AiDude-io/CorgiDude/releases

โปรแกรม kflash_gui

โหลดได้จากที่นี้ https://github.com/sipeed/kflash_gui/releases

ลง Firmware MaixPy ในตัว บอร์ด ก่อนโดย

เปิดโปแกรม kflash_gui

![](https://lh6.googleusercontent.com/C6F-jgqpPS6WldL8gyPmKYFChrThkeKHwUVHUmIAOTTM8_MC681E08LIb22MkHhuqynopfgREPtvORxdfxm5jo_UThKX5DN7DWmyeExiyYN5zSpsTwW5kVogml-u-dVMFfSHwCnP)

Open File แล้วเลือกไฟล์ Firmware MaixPy ที่ให้ไปโหลดมามีชื่อว่า corgidude_firmware_full.bin ประมาณนี้

![](https://ff.lnwfile.com/_/ff/_raw/k4/ik/ga.png)

เลือก Port ให้ตรงกับบอร์ดของเรา แล้ว Download เลย

![](https://lh6.googleusercontent.com/0dmpmvfSdzSZulHnrWOJq2C4rxWSrFbAYyuqqGCnfQdFzU3SJ1dBYb1AmovMJ6Dxlm0JM-nVAekL0LHNfO8hUbf_KWCVwoys_UiAr8q_F1GabZxiqkxZ9i6PzGjR3gmXN2j2rba-)

รอ จนกว่าจะเสร็จ แล้วจะขึ้น Downlond success แปลว่าเสร็จแล้ว OK

![](https://lh4.googleusercontent.com/5ZM8oekxcVHoSMLT7J4C6tfHLckXpWx8mDWEH7VWK3n1KQEFiBhwSkPcfWPxORaoAGv0U3y4UfM0pfSQ2R-1LPuFURqufw3ivIRTT-e9T0V6tkO48xMuenxhScfKQ7fvMc2K0hW9)

ต่อไป เรื่อง kmodel
kmodel นั้นจะให้รันบนตัว k210 นั้น ตอนรันสคริป นั้นก็จะต้องมีการโหลด kmodel มาได้ 2 ทาง

ทางที่ 1 คือ อ่านจาก sd card
เราก็เอา ไฟล์ kmodel วางใว้ใน sd card ได้เลย

ทางที่ 2 คือ อ่านจาก flash ภายใน บอด์ท
การที่จะนำเอา kmodel นั้นลงไปยัง flash ก็ต้องใช้ kflash_gui เหมือนกัน ตามรูปเลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/9g/re/cm.png)

เจ้าเลข 0x400000 เป็นตำแหน่งที่เราเอา model เขียนลงไปครับ เวลาอ่าน ก็ต้องอ่าน จากตำแหน่งที่เราเขียนลงไปนะครับ

แล้วกด Download ได้เลยครับ

![](https://lh6.googleusercontent.com/0dmpmvfSdzSZulHnrWOJq2C4rxWSrFbAYyuqqGCnfQdFzU3SJ1dBYb1AmovMJ6Dxlm0JM-nVAekL0LHNfO8hUbf_KWCVwoys_UiAr8q_F1GabZxiqkxZ9i6PzGjR3gmXN2j2rba-)

รอ จนกว่าจะเสร็จ แล้วจะขึ้น Downlond success แปลว่าเสร็จแล้ว OK

## การใช้งาน MaixPy IDE เบื้องต้น

สวัสดีครับ หลังจากที่เราได้ อับโหลดโปรแกรม MaixPy.bin ลงไปยัง CorgiDude บอร์ด แล้ว แปลว่า CorgiDude บอร์ด นั้นก็สามารถรัน micropython ได้แล้วผ่านทาง serial port ที่ได้ต่อกับคอมพิวเตอร์ของเรานะครับ เราสามารถพิมคำสั่งผ่านทาง serial port ได้เลยครับ แต่มันก็อยากอยู่ดีทาง sipeed ก็ได้ทำ IDE ขึ้นมา ชื่อว่า MaixPy IDE โหลดได้จากที่นี้ [https://dl.sipeed.com/MAIX/MaixPy/ide/\_/v0.2.4](https://dl.sipeed.com/MAIX/MaixPy/ide/_/v0.2.4) อาจจะช้าหน่อยนะครับ ทนเอานะครับโตๆกันแล้ว พอลงเสร็จก็จะได้ maixpyide.exe มานะครับ ก็เข้าโปรแกรมขึ้นมาได้เลยครับ

![](https://ff.lnwfile.com/_/ff/_raw/vk/rb/a9.jpg)

ก็จะได้หน้าตาแบบนี้ขึ้นมาครับ
ต่อไปก็ไปดูตำแหน่ง File ได้เลยครับว่ามีอะไรบ้าง

![](https://ff.lnwfile.com/_/ff/_raw/cv/qg/pw.jpg)

New File คือ เปิดหน้าใหม่
Open File คือ เปิดไฟล์ที่เคยบันทึกใว้
Exampler คือ ตัวอย่าง
Recent File คือ ไฟล์ที่เคยเปิด
แล้วก็มีคำสังมาตราฐาน ทั่วไปอื่นๆๆ

ต่อไปเป็น Edit

![](https://ff.lnwfile.com/_/ff/_raw/dp/by/tu.jpg)

มีคำสังมาตราฐาน ทั่วไปอื่นๆๆ แล้วก็คีลัดต่างๆๆ

ต่อไป Tools อันนี้สำคัญ มาก (ถ้าใช้ CorgiDude บอร์ด ใช้เลือก Sipeed Maix Dock)

![](https://ff.lnwfile.com/_/ff/_raw/sy/wu/rk.jpg)

อันแรก Select Board คือ การเลือก บอร์ด ต่างๆๆ ถ้าเราใช้ บอร์ดไหนก็เลือกให้ตรงนะครับ ถ้าไม่ตรงมันอาจจะใช้ไม่ได้ครับ

![](https://ff.lnwfile.com/_/ff/_raw/sb/sq/z6.jpg)

Open Terminal คือ ดูว่ามี Serial Port ไหนบ้างที่ต่อกับคอมอยู่

![](https://ff.lnwfile.com/_/ff/_raw/gu/dj/lu.jpg)

Machine Vision คือเครื่องมือที่โปรแกรมให้มา เลือกใช้ได้เลยครับ

ส่วนนี้เป็นหน้าต่าง สตรีม รูปจาก ตัวบอร์ด กด Zoom ได้ Disable ได้

![](https://ff.lnwfile.com/_/ff/_raw/su/ye/s2.jpg)

ส่วนต่อไปเป็นพื่นที่เขียนโปรแกรม นะครับ

![](https://ff.lnwfile.com/_/ff/_raw/gq/fn/6e.jpg)

ต่อไปเป็น Serial ที่ส่งมาจากบอร์ด

![](https://ff.lnwfile.com/_/ff/_raw/2i/w2/1u.jpg)

ต่อไปตรงนี้เป็น ปุ่มเชื่อมต่อกับ บอร์ด

![](https://ff.lnwfile.com/_/ff/_raw/io/tf/z4.jpg)

และ ปุ่มรันโปรแกรม จากตรงนี้ไก้เลย
ต่อไปก็จะรันตัวอย่างให้ดู นะครับ

![](https://ff.lnwfile.com/_/ff/_raw/wm/6a/hn.jpg)

หวังว่าบทความนี้จะมีประโยชน์ กับผู้อ่านนะครับ ถ้าพิมผิดไปขออภัยในนะที่นี้ด้วยนะครับ (เขียนโดย นายอภินันท์ บุญทอง)
