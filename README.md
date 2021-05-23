# fullstack-react

http://boiling-hollows-93786.herokuapp.com/

###### Surveys Web app

- เป็นโปรเจคเกี่ยวกับ สร้าง surveys ส่งไปที่ email แล้วเก็บข้อมูล feedback yes/no จาก email ที่เราส่งไปให้
- สอนจาก https://www.udemy.com/course/node-with-react-fullstack-web-development/
###### Feature
- login google OAtuh
- เพิ่ม credit ในการ สร้าง surveys ได้
- create surveys ทุกครั้ง -1 credit
- user 1 คน สามารถสร้างได้หลาย surveys

###### โปรเจคนี้ได้เรียนรู้ service หลายตัวของ nodeJS มีดังนี้ (คร่าวๆ)

1. Heroku https://dashboard.heroku.com/ 
 - เป็น free hosting ใช้ในการ deploy project ให้รันบน server ได้
 - สามารถอ่านค่า config env ที่ setup ไปได้
2. google cloud api ใช้ OAuth
 - ใช้ goole OAuth ในการ login สำหรับ project นี้
3. Mongo DB
 - เก็บข้อมูลของโปรเจตนี้
4. Stripe  https://dashboard.stripe.com
 - ใช้ในการเพิ่ม credit สร้าง survey
 - ใช้ lib react-stripe-checkout โหมด test ทำการ fake เสียเงินจากบัตรเครดิต
5. Sendgrid Email
 - เป็น Service ที่ provide ในการส่ง email 
 - ใช้ lib ของ sendgrid เลย
 - ข้อเสีย -> สมัครโคตรยาก ขนาดใช้ฟรี
6. front-end -> ใช้ react ไม่ต้องอธิบาย น่าจะรู้อยู่แล้ว ^^
