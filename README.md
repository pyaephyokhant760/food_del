# 🍔 Food Del - Food Delivery Web App

ဒီ Project ကတော့ React, Node.js, Express နဲ့ MongoDB (MERN Stack) ကို အသုံးပြုပြီး တည်ဆောက်ထားတဲ့ စားသောက်ကုန် မှာယူတဲ့ platform တစ်ခု ဖြစ်ပါတယ်။

---

## 🚀 Features (လုပ်ဆောင်ချက်များ)
* **Admin Panel:** အစားအသောက်စာရင်းများ ထည့်သွင်းခြင်း၊ ဖျက်ခြင်းနှင့် မှာယူမှုများကို စီမံခြင်း။
* **User Frontend:** အစားအသောက်များကို ရွေးချယ်ခြင်းနှင့် Cart ထဲသို့ ထည့်ခြင်း။
* **Order Tracking:** မှာယူထားသော အခြေအနေကို စစ်ဆေးခြင်း။
* **Payment Integration:** ငွေပေးချေမှုစနစ် ပါဝင်ခြင်း။

## 🛠️ Tech Stack
* **Frontend:** React.js
* **Backend:** Node.js & Express.js
* **Database:** MongoDB
* **Deployment:** Docker & Docker Compose

---

## 🐳 Docker ဖြင့် Run နည်း (Development)

ဒီ Project ကို Docker အသုံးပြုပြီး လွယ်ကူစွာ run နိုင်ပါတယ်။

### ၁။ Image ကို Build လုပ်ခြင်း
```bash
docker build -t food-backend ./backend
