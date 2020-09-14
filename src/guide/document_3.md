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