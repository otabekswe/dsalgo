<h1 align=center><b>Array</b></h1>

Har qanday dasturlash tilida bu nomlar boshqacha atalsada Computer Science da ularning nomi bitta bo'ladi. Python dasturlash tilida Array degan nomdagi Data Structure bo'lmasa ammo u mavjud shunchaki **List** nomi bilan.

> Pythonda List - turli xil data typedagai ma'lumotlarni saqlab turuvchi konteyner xisoblanadi.

```python
my_list = ['o', 'apple', 17, 3.14]
```

Keling bugundan boshlab biz **Array** tushunchasini umumiy tarzda olsak va qachonki **Array** so'zi ishlatilsa biz uni Python dasturlash tilida **List**ligini tushuna olaylik.

<br>

## **Creating an array - Massiv yaratish**

```python
names = ["Jonh", "Alan", "Charlie", "George"] # Listni qiymatlar bilan yaratish.

my_list = [] # Bo'sh list yaratish
my_list = list() # Bo'sh list yaratishning yana bir yo'li

numbers = list(range(1, 100)) # range() orqali 1-99 gacha sonlar listini yaratish.

# Listni print qilish mumkin
print(names)
print(my_list)
print(numbers)
```

Python Listlari ichiga biz string, integer, float, character, function va biz istagan ma'lumot turimizni kiritishimiz mumkin. Ba'zan biz List ichida List ko'rib qolishimiz ham mumkin va bu aytib o'tganimizdek List hohlagan data typedagi ma'lumotni o'z ichida saqlay oladi.

<img src="../Images/array_indices.webp" alt="Array with Indexes">

Ularning ichidagi elementlarni access qilish ya'ni kirish uchun biz **Index**lardan foydalanamiz. Yuqoridagi rasmda ko'rib turganingizdek sanoq 1 dan emas 0 dan boshlangan.

> **Xazil**: Agar sizga biror dasturchi sen mening birinchi muhabbatimsan desa ishonmang. Chunki dasturlashda sanoq 0dan boshlanadi. 😉

Qiymatlarni ammo qanday olishni tushunmagan bo'lsangiz pastdagi kodga qarang:

```python
nums = [3, 8, 1, 0, 5, -2, 32] # Rasmdagi list 

print(nums[3]) # Array ichidan 3chi indeksdagi qiymatni oldik.
```

<br>

## **List Methods - List metodlari**

Pythonda hamma narsa object agar siz OOP ni yaxshi bilmasangiz bu tushuncha sizga biroz g'alati tuyilishi mumkin ammo hech qisi yo'q Internet to'la ma'lumot shunchaki o'rganib chiqishni hoziroq boshlang. 

Agar siz OOPni allaqachon bilsangiz tabriklayman demak siz method va function farqiga boradigan insonsiz. Bilamizki `class`lar ichida tuziladigan har qanday function bu method deb ataladi. List methodlari ham juda ko'p ammo keling bulardan ba'zilari qanday ishlashini mana bu rasm orqali ko'rsak.

<img src="../Images/list_method.jpg" alt="List metodlari">

Tepadagi rasmda ularning qanday ishlashi tasvirlangan va yaxshilab e'tibor bersangiz farqiga borish qiyin emas menimcha
Tepadagi rasmda ularning qanday ishlashi tasvirlangan va yaxshilab e'tibor bersangiz farqiga borish qiyin emas (menimcha).

Ularni qanday ishlatamiz desangiz keling bir ikkita misol ko'rsak:

```python
ls = [1, 2, 3] # ls degan list ochib oldik ichida 1,2,3 qiymatlari bor


ls.append(5) # biz hozir listimizni oxiriga 5 ni qo'shdik
# Output: [1, 2, 3, 5]


ls.remove(2) # biz hozir 2 qiymatini listdan o'chirdik
# Output: [1, 3, 5]


ls.pop(2) # Biz hozir 2-indeksdagi elemetni o'chirdik
# Output: [1, 3]
```

<br>

## **Slicing - Kesish**

Tasavvur qiling sizda 100ta elementli list bor ammo sizga uni faqat 20-50 ideks oralig'idagi qiymatlari kerak. Bunday holatda sizga listdagi qiymatlarni o'chirish emas balkim shunchaki uni bo'lish kifoya qiladi.

<img src="../Images/list_slice.png" alt="List Slicing">

Ko'rib turibsizki biz o'zimizga kerakli qismini shunchaki kiritish orqali bu narsaga erishdik va uning formulasi quyidagicha

```python
list[start:stop]

# start - boshlang'ich nuqta
# step - tugash nuqtasi
# : - oraliq belgisi

# Yani start dan Y oraliqgacha qiymatlar deyilsa bo'ladi.

ls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

# Agar sizga 4 dan 8 gacha oraliqdagi raqamlar kerak bo'lsa:
ls[3:8]

# Agar sizga boshidan 6 chi qiymatgacha kerak bo'lsa start ni tashlab ketsangiz bo'ladi:
ls[:6]

# Agar sizga 6 indeksdan oxirigacha bo'lgan raqamlar kerak bo'lsa step ni tashlab ketsangiz bo'ladi:
ls[6:]

# Agar sizga barcha qiymatlar kerak bo'lsa start ni ham y ni ham tashlab yuborsangiz bo'ladi:
ls[:]
```

Kodlarni yozib mashq qiling shunda yana ham yaxshiroq tushunasiz...

<br>

## **Step - Qadam**

Siz ikki oraliqdagi qiymatlarni tanlab ham har nechtadir qadam tashlashingiz ham mumkin.

```python
list[start:stop:step]

# step - bu qadam

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums[1:8:2] # Bu 1-8 oraliqdagi qiymatlarni ol ammo ular orasida 2ta qadam tashla

# Jarayon: 
# 1-qadam: Listni kesib olish:
# 
# Listni o'zi:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# indekslari:    0  1  2  3  4  5  6  7  8  9
# 
# 
# Kesilgan varianti: [2, 3, 4, 5, 6, 7, 8]
# 
# 
# 2-qadam: Qadam yurish:
# 
#          [2, 3, 4, 5, 6, 7, 8]
#          ⬆     ⬆    ⬆    ⬆


# Output: [2, 4, 6, 8]

```

Pythonda Array bor va uni yaratish uchun yoki tushunish uchun siz shunchaki **[array](https://docs.python.org/3/library/array.html)** degan Python Standart Library ishlatishingiz kerak:

```python
from array import array

nums = array('l', [1, 2, 3, 4, 5]) # l - singned long ya'ni raqamlar bor list

# Qolgan amallar xuddi listdek ishlatilaveradi faqat boshqacha yaratiladi.
```

Ammo biz ushbu darsda bu kutubxonani to'liq ishlatmaymiz ammo sizga list va arrayni taqqoslab ular qanday ishlatilishini ko'rsatib o'tdik. Qolgan ma'lumotlarni link orqali o'zingiz o'rganishingiz mumkin.

> https://docs.python.org/3/library/array.html

<br>

## **Array vs List**

![List vs Array](../Images/array%20vs%20list.svg)

Python list juda moslashuvchan va ixtiyoriy ma'lumotlarni saqlashi mumkin, ammo ular Python arrayga qaraganda ko'proq joy ishlatadi. Har bir list pointer ichidagi pointer blokini o'z ichiga oladi va natijada biz birinchi doim memory pointer ga boramiz va undan keyin object pointerga boramiz.

Shunga qaramay, listning afzalligi moslashuvchanlikda. Har bir list elementi ma'lumotlar va tur ma'lumotlarini o'z ichiga ololadigan to'liq tuzilma bo'lganligi uchun, list istalgan turdagi ma'lumotlarni o'z ichiga ololadi. Massivlar bunday moslashuvchanlikka ega emas, lekin ma'lumotlarni saqlash va boshqarish uchun ancha samaraliroq.

Ikkalasi o'rtasidagi farqlar asosan yuqorida aytib o'tilgan backend ilovasi tufayli mavjud. Python-dagi massivlar xuddi C massivlari kabi amalga oshiriladi, ko'rsatgich massivning birinchi elementiga ishora qiladi, qolganlari esa xotirada yonma-yon joylashgan.

## **When to use which? - Qaysi birini qachon ishlatish kerak?**

- Agar siz o'sishda va qisqartirishda vaqtdan yutmoqchi bo'lsangiz List ishlating.

- Agar sizga istalgan turdagi ma'lumotlar saqlash kerak bo'lsa Listni ishlating.

- Agar sizga xotiradan tejash va ko'p qiymatlarni saqlash kerak bo'lsa array ishlating. Array ko'p sonli ma'lumotlar ustida ammallarni ham ancha samarali bajaradi. 

## **Challenges**

1. [Merge Two sorted list](https://leetcode.com/problems/merge-two-sorted-lists/)
2. [Find two number that sums up to K](https://www.google.com/search?q=Find+two+number+that+up+to+k&oq=Find+two+number+that+up+to+k&aqs=chrome..69i57.6405j0j9&sourceid=chrome&ie=UTF-8)


<pre align=center> <a href="./Doc.md">⬅️ Ortga qaytish</a>     <a href="./Linked%20List.md">➡️ Keyingi darsga o'tish</a></pre>

<!-- <img src="../Images/" alt="List vs Array"> -->