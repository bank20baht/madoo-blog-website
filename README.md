# madoo-website DCW Final Assignment
blog website demo project for 240-311 client sever
# สมาชิกในกลุ่ม
- 6310110148 นายณัฐพงศ์ พรมทอง  section.02		// frontend
- 6310110471 ศหฤงคาร สุขสบาย	section.02 	  	// backend
- 6310110558 อภิมุข สุวรรณรัตน์	section.01		    // backend

## Backend

- มีการเก็บ log โดยใช้ morgan เเละใช้ file stream ในการนำ log นั้นมาเก็บค่าใน access.log
### Authentication

- ใช้ nextauth ใน next.js ในการทำ oauth ของ google ซึ่งจะมีการ genarate jwt ออกมาเเละยังสามารถกำหนดเวลาหมดอายุได้

```
console.log('Hello')
```


```
console.log('Hello')
```
- ใช้ cors เป็น middleware เพื่อใช้ในการส่งข้อมูล ของบทความ ไปแสดงใน frontend 

- ใช้ compression ในการบีบอัดเพื่อให้ประหยัด bw

- มีการใช้หลักการของ CRUD

- ใช้ mongodb เป็น database

- มีการใช้ env จาก dotenv

# Frontend
- มีหน้าเเสดง บทความทั้งหมดในเว็บไซต์ (get all) เเสดงบทความของฉัน (get by user_name) เเละข้อความนั้นๆ (get by id)

- มีหน้า edit article

- มีการใช้ session หากไม่ได้ login ก็จะไปที่หน้า เขียน blog ไม่ได้

- มีหน้า login

- มีหน้า เขียน blog

- หากเราเป็นคนเขียนบล๊อคนั้นๆเราสามารถที่จะลบบทความนั้นได้

- โดยหลักการทั้งหมดนี้จะมีการใช้ api ในส่วนของ backend ซึงจะมีการใช้ร่วมกับ axios เพื่อใช้ในการทำ CRUD บนหน้า frontend