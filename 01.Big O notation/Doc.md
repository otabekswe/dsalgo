<h1 align=center><b>Big O notation</b></h1>

> Algorithm - muammoni yechish uchun harakatlar ketma-ketligiga aytiladi.

Bilamizki hayotimizda ko'p narsalar o'lchovli va bularga misol qilib: vaqt, og'irlik, hajm va shu kabi o'lchovlarni olishimiz mumkin. Demak barcha narsalarda o'lcham bo'lgani kabi `Data Structure` va `Algorithm`larda ham bor.

Uzunlikni lineykada, suvni litr o'lchagich va og'irlikni tarozida o'lchaymiz.`Algorithm` va `Data Structure`larni esa **`Big O`** da o'lchaymiz. Ammo qanday qilib?


> `Algoritm`lar - asosan harakatlar soniga qarab o'lchaniladi.

> `Data Structure`lar - asosan xotiradan olinadigan joylar soniga qarab o'lchanadi.

---

## **Misollar :**

Tasavvur qiling oldingizda 100ta eshik turibdi va ularning biriga Kungfu-Panda multfilmidagi "Sirli Noma" yashiringan. 99ta xona bo'sh ammo bittasida "Sirli Noma" bor. Vazifangiz o'sha nomani topish. Siz bu yerda nima qilasiz? 


<p align=center><img src="../Assets/Images/Doors.avif"></p>

Albatta 1-eshikdan boshlab har bir eshikni ochib xona ichida "Sirli Noma" bormi yo'qmi tekshirasiz. 

<p align=center><img src="../Assets/Images/open%20doors.jpg"></p>

Har bir eshikni ochishimiz bu 1ta operatsiya deb oladigan bo'lsak, eshiklar soni qancha oshgani sari harakatlar ya'ni operatsiyalar soni ham oshib boradi. Agar bizni oldimizda `n`ta eshik bo'lsa biz eng ko'pi bilan `n`ta eshikni ochishimiz kerak deani. Shunday qilib harakatlar sonini biz `n` deb olishimiz mumkin. 

Biz "eng ko'pi bilan" degan iborani ishlatdik va u `worst case` degan tushunchani ilg'or suradi. Algoritmlarda muhim narsa bu **kam harakat** qilish. Shuning uchun ham `best case` bu kam harakat qilish, `worst case` bu ko'p harakat qilish deb olsak bo'ladi.

Biz odatda Big O notation bilan `worst case` o'lchovni xisoblaymiz. Yuqorida berilgan muammoni biz `O(n)` bilan o'lchaymiz. Nima uchun unday? Chunki eshiklar soni `n`ta bo'lsa biz eng ko'pi bilan `n`ta eshikni ochamiz degani. Bu esa `n`ta operatsiyani bajaramiz degani. Shuning uchun ham uni biz `O(n)` bilan o'lchadik.

> O'lchovlar `O()` orqali ifoda qilinadi.

