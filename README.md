### Plans

#### project initialize (requirements)

- [x]  gitda repo ochish
- [x]  mongodb kompga òrnatish
- [x]  nodejs project initialize qilish
- [x]  nodemonda start qilish
- [x]  mongodb da db (e-commerce) yaratish va nodejs ga ulash (mongoose orqali) 
- [x]  postman ni o'rnatish
- [x]  screen qilib yuborish



### Sprint 1

#### **Day one**
- [x] **Configuration**
  - [x] kerakli package larni o'rnatish va o'rganib chiqish.
    - [ ] express, express-validator, mongoose
    - [ ] dotenv, body-parser
  - [x] `controller`, `models`, `routes` papkalar yaratish
- [x] **Routerlar**
  - [x] `signin` va `signup` (post metod) routerlar yaratish [src/routes/user.js] (ichiga hech narsa yozmay turish kerak)
  - [x] `user.js` dagi routerni `index.js` ga chaqirish `app.use('api', userRoutes)`
- [x] **Schema yaratish**
  - [x] `userSchema` yaratish [src/models/user.js]
  - [x] **maydonlar**
    - [x] firstName - String, required, trim, min=3, max=10
    - [x] lastName - String, required, trim, min=3, max=20
    - [x] userName - String, required, trim, unique, index, lowercase
    - [x] email - String, required, trim, unique, lowecase
    - [x] hash_password- String, required
    - [x] role - String, enum: ['user, admin], default-admin
    - [x] timestamp 
- [x] **Passwordni sozlash**
  - [x] bcrypt (package) ni o'rganib chiqish
  - [x] virtual funksiyani o'rganib chiqish(mongoose)
  - [x] virtual function orqali `hash_password` yaratish 
  - [x] `userSchema` da `authenticate` metod yaratish(tizimga kirishdan kiritilgan pass bilan bazadagi passni hashlab taqqoslash)
