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


**Computer Science**da biz ko'pincha algoritmlarning ishlashini tahlil qilishga qiziqamiz. Algoritm ishlash tezligini aniqlash uchun turli xil **input**lar uchun algoritmimiz qancha vaqt sarflayotganini bilishimiz kerak. Misol uchun ro'yxatni tartiblaydigan algoritm yaratsak, u 10 ta raqam uchun qancha vaqt, 100 ta raqam uchun qancha vaqt, 1000 ta raqam  uchun qancha vaqt ketishini o'lchashimiz mumkin.

Qachonki gap Algoritm **tahlil**i haqida ketganda, bizga quyidagi ikki narsa doim qiziq bo'lishi lozim:

1. **Time** - Qancha vaqt ketkazayabdi? (Nechta operatsiya bajaradi)
2. **Memory** - Qancha xotira ketkazayabdi? (Qancha joy oladi)

Bilamizki hayotda o'lchovchi asboblar mavjud, masalan suvni o'lchash uchun **litr** yozilgan maxsus konteynerlardan foydalanamiz, uzunlikni o'lchash uchun **sm** yoki **m** o'lchamlari bor lineyka va ruletkalardan foydalanamiz. Ammo Algoritmlar uchun nimadan foydalanamiz?

### **Big O notation - Katta O belgisi**

Big O notation Algoritmlarni tezligini o'lchash uchun ishlatiladigan asbob deb olsak bo'ladi. Algoritmga qanchalik katta hajmdagi ma'lumot kiritilsa u o'sha ma'lumot ustida bajaradigan operatsiyalar soni ham oshib boradi. Aynan shu orqali biz bilishimiz mumkinki, qancha xajmdagi ma'lumot uchun bizning algoritmimiz qancha vaqt va xotira talab qilishini.

> **Big O notation**ni tushunish uchun Matematikaga biroz murojaat qilamiz. Chunki Dasturlashda Matematikani o'rni juda muhim!

Matematikada funkisya degan tushuncha mavjud. Biz uni mana bu ko'rinishda ifodalashimiz mumkin.

`
f(x) = x + 2
`

Bu yerda biz `f(x)` dagi `x`ga necha qiymatni bersak u o'sha qiymatni qavsdan keyingi ifodaga ham beradi degani misol uchun mana bunday:

`
f(10) = 10 + 2
`

Dasturlashga buni qanday dahli bor deyishingiz mumkin ammo shoshilmang endi yetib kelayabmiz. `x`ga qancha katta qiymat bersak shuncha katta qiymat olayabmiz. Endi tasavvur qiling qiyinroq funksiyalarda bu ko'rsatgichlar qanchalik kattarishini. Endi algoritmlarni qanday o'lchashlikga o'tsak bo'ladi.

Qachonki biz algoritmlarni tahlil qilganimizda, qancha kattalikdagi qiymatga <i>nechta operatsiya bajarayabdi</i> va <i>qancha xotira talab qilayabdi</i> degan savolni ilg'or suramiz.

Tasavvur qiling, bizni algoritm berilgan **array**dagi qiymatlardan faqat juft sonlarni yangi arrayga qo'shib, oxirida o'sha **array**ni qaytarishi kerak.

**Python**
```python
def juftlar(arry : list[int]) -> list:
    result = []
    for num in arry:
        if num % 2 == 0:
            result.append(num)
    return result
```

**JavaScript**
```javascript
function juftlar(arry) {
    let result = []
    for (let num of arry) {
        if (num % 2 == 0) {
            result.push(num);
        }
    }
    return result;
}
```

**Java**
```java
import java.util.ArrayList;
import java.util.List;

public class Juftlar {
    public static List<Integer> juftlar(List<Integer> arry) {
        List<Integer> result = new ArrayList<>();
        for (int num : arry) {
            if (num % 2 == 0) {
                result.add(num);
            }
        }
        return result;
    }
}
```

**C**
```c
#include <stdio.h>

int* juftlar(int arry[], int n, int* result_size) {
    int* result = malloc(n * sizeof(int));
    *result_size = 0;
    for (int i = 0; i < n; i++) {
        if (arry[i] % 2 == 0) {
            result[*result_size] = arry[i];
            (*result_size)++;
        }
    }
    return result;
}
```

**C++**
```cpp
#include <iostream>
#include <vector>

std::vector<int> juftlar(std::vector<int> arry) {
    std::vector<int> result;
    for (int num : arry) {
        if (num % 2 == 0) {
            result.push_back(num);
        }
    }
    return result;
}
```

**Rust**
```rust
fn juftlar(arry: &[i32]) -> Vec<i32> {
    let mut result = Vec::new();
    for &num in arry {
        if num % 2 == 0 {
            result.push(num);
        }
    }
    result
}
```

**Swift**
```swift
func juftlar(_ arry: [Int]) -> [Int] {
    var result = [Int]()
    for num in arry {
        if num % 2 == 0 {
            result.append(num)
        }
    }
    return result
}
```

**Go**
```go
func juftlar(arry []int) []int {
    var result []int
    for _, num := range arry {
        if num % 2 == 0 {
            result = append(result, num)
        }
    }
    return result
}
```

Yuqorida keltirilgan funksiyani oladigan bo'lsak biz qanchalik kattalikda array bersak u shunchalik ko'p operatsiya bajaradi. Misol uchun `[1, 2, 3, 4, 5]` ni bersak u 5ta sonni ham tekshiadi va ularni ichidan nechtasi juft bo'lsa uni yangi arrayga o'tkazadi. Agar array ichidagi elementlar soni 100ta bo'lsa 100ta operatsiya, `n` ta bo'lsa `n` ta operatsiya sodir qiladi. 

Biz buni `O(n)` ko'rinishda o'lchasak bo'ladi. Chunki qanchalik elementlar ko'p bo'lsa algoritm shunchalik ko'p operatsiya sodir qiladi.

> Big O notation - algoritmni **worst case** xolati uchun ishlatiladi. Ya'ni worst case - eng yomon xolati deb tarjima qilsak bo'ladi.

Algoritmimiz eng yomon ko'rsatkichda ishlaganda `n` marta ishlaydi deb olsak bo'ladi.

