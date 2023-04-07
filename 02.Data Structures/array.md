<h1 align=center><b>Array</b></h1>

Har qanday dasturlash tilida bu nomlar boshqacha atalsada Computer Science da ularning nomi bitta bo'ladi. JavaScript dasturlash tilida ham bu tushuncha aynan **Array**ligicha qoladi.

> Array - javascriptda maxus obyekt turi xisoblanadi.

```js
let my_list = ['o', 'apple', 17, 3.14]
```

Array o'z ichiga string, number, function va shunga o'xshagan ko'plab turdagi ma'lumotlarni, xatto array ni ham saqlay oladi. Pastda beriladigan misolga qarab buni guvohi bo'lishingiz mumkin.

```js
let nums = [1, 2, 3, 4, 5, [6, 7, 8, 9]]
console.log(nums[3]) // 4 
console.log(nums[5]) // [6, 7, 8, 9]
```

> **Eslatma**: JavaScriptda array yaratganingizda, JS engine barcha elementlarni ketma-ket saqlash orqali uni samarasini oshirishga urinadi. Qachonki siz bo'sh joylar qoldirsangiz yoki arrayga yangi element qo'shsangiz, JS engine unga boshqacha amal qilishiga to'g'ri keladi va u oldingidek samarali bo'lib ishlamaydi. Ba'zilar JavaScriptda arrayni array qilib emas baklim object qilib ishlatishadi. Bu esa kodni sekin ishlashiga olib kelishi mumkin va buni doim yodingizda tutishingiz lozim.

<br>

## **Important functions - Muhim funksiyalari**

### **push()**

Arryaga yangi qiymat qo'shish uchun ishlatiladi.

```js
let array = [1, 3, 5, 'seven']
console.log(array) // [1, 3, 5, 'seven']
array.push(9)
console.log(array) // [1, 3, 5, 'seven', 9]
```

`push()` operatsiyasining Complexitysi `O(1)` bo'ladi chunki biz shunchaki arrayni uzunligini oshiramiz va yangi element qo'shib qo'yamiz.

### **pop()**

Arrya oxiridan element o'chirish uchun ishlatiladi.

```js
let array = [1, 3, 5, 'seven']
console.log(array) // [1, 3, 5, 'seven']
array.pop()
console.log(array) // [1, 3, 5]
```

`pop()` operatsiyasining Complexitysi ham `O(1)` bo'ladi chunki biz shunchaki arrayni uzunligini kamaytiramiz va oxirgi indexdagi elementni o'chiramiz xolos.

### **shift()**

Arrya boshidagi elementni o'chiradi va sizga qaytaradi.

```js
let array = [1, 3, 5, 'seven']
console.log(array.shift()) // 1
console.log(array) // [3, 5, 'seven']
```

`shift()` operatsiyasining Complexitysi `O(n)` bo'ladi chunki biz array 0-indeksidan element o'chiramiz va barcha elementlarni surib qo'yib, uni uzunligini yangilaymiz.

### **unshift(value)**

Arrya boshiga elementni qo'shadi.

```js
let array = [1, 3, 5, 'seven']
console.log(array); // [1, 3, 5, 'seven']
array.unshift('JavaScript');
console.log(array) // ['JavaScript', 1, 3, 5, 'seven']
```

`unshift()` operatsiyasining Complexitysi `O(n)` bo'ladi va huddi `shift()` qilgan ishni teskarisini qiladi.

Qolganlarini mana bu linklar orqali ko'rib chiqishingiz mumkin:
- [w3school](https://www.w3schools.com/jsref/jsref_obj_array.asp)
- [Developer mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Info](https://javascript.info/array-methods)

<br>

## **Index - Indeks**

<img src="../Images/array_indices.webp" alt="Array with Indexes">

Ularning ichidagi elementlarni access qilish ya'ni kirish uchun biz **Index**lardan foydalanamiz. Yuqoridagi rasmda ko'rib turganingizdek sanoq 1 dan emas 0 dan boshlangan.

> **Xazil**: Agar sizga biror dasturchi sen mening birinchi muhabbatimsan desa ishonmang. Chunki dasturlashda sanoq 0dan boshlanadi. 😉

Qiymatlarni qanday olishni tushunmagan bo'lsangiz pastdagi kodga qarang:

```js
let nums = [3, 8, 1, 0, 5, -2, 32] // Rasmdagi list 

console.log(nums[3]) // 0
```

<br>

## **Challenges**

1. [Merge Two sorted list](https://leetcode.com/problems/merge-two-sorted-lists/)
2. [Find two number that sums up to K](https://www.google.com/search?q=Find+two+number+that+up+to+k&oq=Find+two+number+that+up+to+k&aqs=chrome..69i57.6405j0j9&sourceid=chrome&ie=UTF-8)


<pre align=center> <a href="./Doc.md">⬅️ Ortga qaytish</a>     <a href="./Linked%20List.md">➡️ Keyingi darsga o'tish</a></pre>

<!-- <img src="../Images/" alt="List vs Array"> -->