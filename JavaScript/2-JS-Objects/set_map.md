<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Sets and Maps</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [📚Sets](#sets)
  - [Creating](#creating)
  - [Adding](#adding)
  - [Deleting](#deleting)
  - [Checking](#checking)
  - [Clearing](#clearing)
  - [Application](#application)
    - [Union of Sets](#union-of-sets)
    - [Intersection of Sets](#intersection-of-sets)
    - [Difference of Sets](#difference-of-sets)
- [🗾Maps](#maps)
  - [Creating](#creating-1)
  - [Setting](#setting)
  - [Getting](#getting)
  - [Checking](#checking-1)

# [📚Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

Set là một tập hợp nhiều phần tử, set chỉ có thể chứa các phần tử khác nhau (mỗi phần tử là độc nhất).

## [Creating](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)

**Tạo set rỗng**:

```js
const companies = new Set();
console.log(companies); // => Set(0)
```

Cách khởi tạo tương tự như khởi tạo một object với default constructor.

**Tạo set từ array**:

```js
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLangauges); // => Set(4) {English, Finnish, French, Spanish}
```

Ta có thể duyệt qua từng phần tử trong set như mảng thông thường:

```js
for (const language of setOfLanguages) {
  console.log(language);
}
// => English, Finnish, French, Spanish
```

## [Adding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add)

Dùng phương thức `add`:

```js
const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
const setOfCompanies = new Set();
for (const company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);
// => Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```

## [Deleting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)

Dùng phương thức `delete`:

```js
console.log(companies.delete("Google"));
console.log(companies.size); // => 4 elements left in the set
```

## [Checking](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)

Dùng phương thức `has`:

```js
console.log(companies.has("Apple")); // => false
console.log(companies.has("Facebook")); // => true
```

## [Clearing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)

Dùng phương thức `clear`:

```js
companies.clear();
```

## Application

Ứng dụng của set là để lọc ra mảng các phần tử khác nhau từ mảng ban đầu. Do đó có thể đếm số phần tử unique trong mảng:

```js
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers);
// => Set(5) {5, 3, 2, 9, 4}
```

### Union of Sets

Để tìm hợp của hai set:

```js
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b]; // merge

let A = new Set(a);
let B = new Set(b);
let union = new Set(c); // filter unique element

console.log(union); // => [1,2,3,4,5,6]
```

### Intersection of Sets

Có thể dùng phương thức `has` để tìm giao của hai sets. Tức là lọc ra các phần tử của a có tồn tại trong b.

```js
const intersection = a.filter(function (num) {
  return b.has(num);
});
console.log(intersection); // => [3,4,5]
```

### Difference of Sets

Tìm phần bù của A và B (A / B), ta sử dụng phương thức `has` để loại bỏ những phần tử thuộc cả A và B.

```js
const complement = a.filter(function (num) {
  return !b.has(num);
}); // if exists in b => filter out
console.log(complement);
```

# [🗾Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

Map là một tập hợp của nhiều bộ phần tử. Mỗi bộ là một cặp key - value.

## [Creating](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)

**Tạo map từ array**:

```js
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

const map = new Map(countries);
console.log(map); // => Map(3) {Finland => Helsinki, Sweden => Stockholm, Norway => Oslo}
```

## [Setting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)

Dùng phương thức `set` và truyền vào cặp key - value:

```js
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(map); // => Map(3) {Finland => Helsinki, Sweden => Stockholm, Norway => Oslo}
```

## [Getting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)

Dùng phương thức `get` và truyền vào key:

```js
console.log(countriesMap.get("Finland"));
// => Helsinki
```

## [Checking](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)

Kiểm tra một key có tồn tại trong map, sử dụng phương thức `has` và truyền vào key cần kiểm tra. Phương thức sẽ trả về `true` hoặc `false`.

```js
console.log(countriesMap.has("Finland")); // => true
```
