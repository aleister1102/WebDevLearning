# Set

Set là một tập hợp nhiều phần tử, set chỉ có thể chứa các phần tử khác nhau (mỗi phần tử là độc nhất).

## Creating a Set

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

## Adding Element to Set

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

## Deleting Element from Set

Dùng phương thức `delete`:

```js
console.log(companies.delete("Google"));
console.log(companies.size); // => 4 elements left in the set
```

## Checking Element in Set

Dùng phương thức `has`:

```js
console.log(companies.has("Apple")); // => false
console.log(companies.has("Facebook")); // => true
```

## Clearing the Set

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

## Union of Sets

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

## Intersection of Sets

Có thể dùng phương thức `has` để tìm giao của hai sets. Tức là lọc ra các phần tử của a có tồn tại trong b.

```js
const intersection = a.filter((num) => b.has(num));
console.log(intersection); // => [3,4,5]
```

## Difference of Sets

Tìm phần bù của A và B (A / B), ta sử dụng phương thức `has` để loại bỏ những phần tử thuộc cả A và B.

```js
const complement = a.filter((num) => !b.has(num)); // if exists in b => filter out
console.log(complement);
```

# Map

Map là một tập hợp của nhiều bộ phần tử. Mỗi bộ là một cặp key - value.

## Creating a Map

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

## Adding Element to Map

Dùng phương thức `set` và truyền vào cặp key - value:

```js
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(map); // => Map(3) {Finland => Helsinki, Sweden => Stockholm, Norway => Oslo}
```

## Getting Value from Map

Dùng phương thức `get` và truyền vào key:

```js
console.log(countriesMap.get("Finland"));
// => Helsinki
```

## Checking Key in Map

Kiểm tra một key có tồn tại trong map, sử dụng phương thức `has` và truyền vào key cần kiểm tra. Phương thức sẽ trả về `true` hoặc `false`.

```js
console.log(countriesMap.has("Finland")); // => true
```
