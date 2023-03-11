## madoo-website DCW Final Assignment
blog website demo project for 240-311 client sever
## สมาชิกในกลุ่ม
- 6310110148 นายณัฐพงศ์ พรมทอง  section.02		// frontend
- 6310110471 ศหฤงคาร สุขสบาย	section.02 	  	// backend
- 6310110558 อภิมุข สุวรรณรัตน์	section.01		    // backend

## Frontend
# มีการใช้ nextjs ที่เป็น react framwork ใช้ในการทำ frontend เเละใช้ axios ในการดึงข้อมูลจากตัว restful api ที่ได้ทำไว้ ซึ่งรายละเอียดเป็นดังนี้

```
cd frontend
npm i
npm run dev
```
- มีหน้าเเสดง บทความทั้งหมดในเว็บไซต์ (get all) เเสดงบทความของฉัน (get by user_name) เเละข้อความนั้นๆ (get by id)
![main page](https://user-images.githubusercontent.com/89448778/224480033-ebe20981-4b58-4875-b833-07cf1b4be225.png)
![my article page](https://user-images.githubusercontent.com/89448778/224480050-14684e4d-0399-4284-8862-6cf34763ec33.png)

- มีหน้า เขียน blog
![create article](https://user-images.githubusercontent.com/89448778/224480217-25be5252-aa5e-4ffa-82bf-bb2da4182d47.png)


- หากเป็นเจ้าของบทความสามารถเเก้ไขเเละลบได้
![my article can edit or delete](https://user-images.githubusercontent.com/89448778/224480111-8c72cc59-fb46-4c2d-8e2d-307dd8b8ab07.png)

- หน้า edit article 
![edit article](https://user-images.githubusercontent.com/89448778/224480070-5b677ff9-b950-4327-9e64-0a57b9798b8b.png)

- ถ้าไม่มีก็จะไม่มีปุ่ม edit หรือ delete
![not my article (2)](https://user-images.githubusercontent.com/89448778/224480187-e721396f-9c39-4f52-9212-bb800702d502.png)

- มีหน้า login ซึ่งจะใช้เป็น google signin api
![login page](https://user-images.githubusercontent.com/89448778/224480281-9f20ba02-3ef6-48b5-82e1-34032f6bad86.png)
![login with google](https://user-images.githubusercontent.com/89448778/224480257-076dc020-5b55-4f1d-bbe2-eca0aa563dec.png)

- มีการใช้ session หากไม่ได้ login ก็จะไปที่หน้า เขียน blog ไม่ได้ หาก session หมดอายุก็จะออกจากระบบ
- axios เพื่อใช้งาน api ในการทำ CRUD บนหน้า frontend เเละใช้หลักการของ asyn await (non-blocking ทั้งหมด)

## Backend
# ใช้ node.js ร่วมกับ express ในการดึงข้อมูลจาก mongodb (บน cloud) ออกมาเเสดงผลที่ส่วน frontend เเละใช้หลักการของ asyn await (non-blocking ทั้งหมด) โดยมีรายละเอียดดังนี้

```
cd backend
npm i
node server.js
```
# มีการเก็บ log โดยใช้ morgan เเละใช้ file stream ในการนำ log นั้นมาเก็บค่าใน access.log
![log](https://user-images.githubusercontent.com/89448778/224479679-dfdec40c-cd29-41a5-bfa3-9cf164fd78b5.png)

# Authentication
- ใช้ nextauth ใน next.js ในการทำ oauth ของ google ซึ่งจะมีการ genarate jwt ออกมาเเละยังสามารถกำหนดเวลาหมดอายุได้ ในโปรเจคนี้ได้กำหนดที่ 1 วัน
![token](https://user-images.githubusercontent.com/89448778/224479743-ed8071be-9ff7-4d98-a422-3e9bda6c5f56.png)

# express.json(): แปลงข้อมูลที่มีรูปแบบ JSON String ให้อยู่ในรูป JSON Object

# ใช้ cors เป็น middleware เพื่อใช้ในการส่งข้อมูล ของบทความ ไปแสดงใน frontend เพราะมันอยู่คนละโดเมนต้องใช้เพื่อให้ browser อนุญาติ

# ใช้ compression ในการบีบอัดเพื่อให้ประหยัด bw

# มีการใช้หลักการของ CRUD
- POST /api/addArticle: สร้างบทความใหม่พร้อมกับบันทึก title, content, user_email, user_name และ user_img ในฐานข้อมูล พร้อมข้อความแสดงสถานะและข้อมูลบทความที่สร้างขึ้น
- GET /api/articles: ดึงข้อมูลบทความทั้งหมดจากฐานข้อมูล
- GET /api/article/:id: ดึงบทความที่มี ID ตรงกันในฐานข้อมูล
- GET /api/user/:id: ดึงข้อมูลบทความทั้งหมดจากฐานข้อมูลที่เป็น ID ของผู้ใช้
- DELETE /api/article/:id: ลบบทความที่มี ID ตรงกันในฐานข้อมูลพร้อมข้อความแสดงสถานะ
- PUT /api/update/article: อัปเดตบทความที่มีอยู่ในฐานข้อมูล พร้อมข้อความแสดงสถานะและข้อมูลบทความที่ถูกอัปเดต

# มีการใช้ env จาก dotenv กำหนดตัวแปรสภาพแวดล้อมจากไฟล์ .env

