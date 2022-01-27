# Destructuring

Destructuring là một cú pháp cho phép "giải nén" array hoặc object để gán cho các biến riêng biệt.

## Destructuring Arrays

Chẳng hạn ta gán bộ ba biến bằng các phần tử có trong mảng:

```js
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree, numFour] = numbers;

console.log(numOne, numTwo, numThree, numFour);
// => 1 2 3 undefined
```

Phần tử thứ tư trong mảng không có, nên `numFour = undefined`.

Có thể dùng giá trị mặc định nếu phần tử trong mảng undefined:

```js
const names = [undefined, "Brook", "David"];
let [
  firstPerson = "Asabeneh",
  secondPerson,
  thirdPerson,
  fourthPerson = "John",
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
// => Asabeneh Brook David John
```

Trích xuất từ mảng hai chiều:

```js
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
// => ['HTML', 'CSS', 'JS', 'React'],
console.log(backEnd);
// => ['Node', 'Express', 'MongoDB']
```

Bỏ qua một phần tử bất kỳ sử dụng dấu phẩy (`,`):

```js
const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, , bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, bodyTemp, boilingTemp);
// => 2.72, 3.14, 37, 100
```

**Lưu ý**: chúng ta không thể gán hết tất cả các phần tử trong mảng cho biến. Chỉ có thể gán vài phần tử đầu, các phần tử còn lại dùng toán tử lan truyền (spreading) (`...`)

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
// => 1, 2, 3
console.log(rest);
// => [4, 5, 6, 7, 8, 9, 10]
```

## Destructuring Array during iteration

Có thể sử dụng Destructuring trong vòng lặp:

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}
```

## Destructuring Objects

Khi dùng Destructuring cho đối tượng, các biến cần được gán nên có tên đúng chính xác với key hoặc thuộc tính có trong đối tượng:

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

// => 20, 10, 200, undefined
```

Nếu key không tồn tại trong đối tượng thì biến được gán sẽ có giá trị `undefined`.

Có thể đổi tên trong lúc dùng Destructuring:

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p);
```

Còn có thể gán giá trị mặc định trong lúc dùng Destructuring:

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter = 60 } = rectangle;

console.log(width, height, area, perimeter);
// => 20 10 200 60
```

Chỉ khi đối tượng không có giá trị thì giá trị mặc định mới được dùng.

## Object Parameter with Destructuring

Do tính chất có thể gán được của các value có trong object, mà ta có thể sử dụng các object như là tham số.

Giá trị của đối số truyền vào sẽ dùng Destructuring và gán cho tham số.

Không dùng Destructuring:

```js
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect)); // => 60
```

Dùng Destructuring:

```js
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rect)); // => 60
```

## Destructuring Object during iteration

Cũng có thể trích xuất trong vòng lặp:

```js
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

// => Prepare JS Test 4/1/2020 8:30 true
//    Give JS Test 4/1/2020 10:00 false
//    Assess Test Result 4/1/2020 1:00 false
```

# Spreading

## Get the rest elements of array

Như ở trên đã đề cập, ta dùng toán tử lan tràn (spreading) `...` để lấy các phần tử còn lại của mảng dưới dạng một mảng khác.

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

// => 1, 2, 3
// => 4, 5, 6, 7, 8, 9, 10
```

## Copy array

Hoặc có thể dùng để sao chép một mảng:

```js
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

// => [0, 2, 4, 6, 8, 10]
//    [1, 3, 5, 7, 9]
//    [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
```

> Đoạn code trên xuất hiện trong phần tìm union của hai set.

## Copy object

Tương tự, cũng có thể sao chép object bằng spreading operator:

```js
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = {...user, title = "Student"};
console.log(copiedUser);
// => {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}
```

Trong lúc copy, cũng có thể chỉnh sửa dữ liệu (chuyển title thành "Student").

## Spreading with arrow function

Ở bài functions đã đề cập đến việc hàm có số lượng tham số không biết trước. Ở đó ta sử dụng toán tử `...` kèm thên một mảng tham số bất kỳ:

```js
const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);
// => 1, 2, 3, 4, 5
```
