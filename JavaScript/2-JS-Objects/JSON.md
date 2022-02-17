<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">JSON</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Cheat Sheets](#cheat-sheets)
- [😺JSON](#json)
- [😸JSON to JS Objects](#json-to-js-objects)
- [😹Reviver Function with JSON.parse()](#reviver-function-with-jsonparse)
- [😻Object to JSON](#object-to-json)
- [😼Filter Array with JSON.stringify](#filter-array-with-jsonstringify)

# References

## Cheat Sheets

> [Realpython](https://www.realpythonproject.com/a-cheat-sheet-for-working-with-json-data-in-javascript/)

# [😺JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

JSON viết tắt cho **JavaScript Object Notation**.

- Cú pháp của JSON được lấy từ cú pháp của đối tượng trong JS. Tuy nhiên định dạng của JSON chỉ gồm chữ hoặc chuỗi.
- JSON là một định dạng dữ liệu nhẹ dùng để lưu giữ và chuyển đổi thông tin.
- JSON được dùng nhiều nhất khi server gửi thông tin cho client.
- JSON là dạng dễ dùng hơn của XML.

**Ví dụ**:

```json
{
  "users": [
    {
      "firstName": "Asabeneh",
      "lastName": "Yetayeh",
      "age": 250,
      "email": "asab@asb.com"
    },
    {
      "firstName": "Alex",
      "lastName": "James",
      "age": 25,
      "email": "alex@alex.com"
    },
    {
      "firstName": "Lidiya",
      "lastName": "Tekle",
      "age": 28,
      "email": "lidiya@lidiya.com"
    }
  ]
}
```

> Điểm khác biệt duy nhất của JSON và object trong JS là các key của JSON phải nằm trong dấu ngoặc kép hoặc có dạng chuỗi.

Do tính chất tương đồng mà một JSON có thể chuyển đổi thành JS object và ngược lại một cách dễ dàng.

Trong ví dụ trên, JSON có dữ liệu nằm trong một cặp dấu ngoặc nhọn, ta có thể xem nó như là một object.

Trong object này có một thuộc tính là `"user"`. Chú ý rằng key của thuộc tính trong JSON phải nằm trong dấu ngoặc kép.

Thuộc tính này có giá trị là một mảng các object. Các object con này cũng bắt buộc có key nằm trong dấu ngoặc nhọn.

# [😸JSON to JS Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Dữ liệu JSON thông thường được fetch về thông qua HTTP và lưu dưới dạng chuỗi (ngoại trừ file JSON).

Để có thể chuyển chuỗi này sang object, ta sử dụng phương thức `parse()` của lớp đối tượng `JSON`. Cú pháp như sau:

```js
JSON.parse(json, reviver);
// json is mandatory
// reviver is an optional callback function
```

**Ví dụ**:

```js
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

const usersObj = JSON.parse(usersText);
console.log(usersObj);
// => {users: Array(3)}
```

# [😹Reviver Function with JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)

Trong số các tham số của `parse` có một tham số gọi là `reviver`. Tham số này là một hàm callback, thường dùng để format dữ liệu.

Tham số của `reviver` là:

- `key`: thuộc tính muốn format.
- `value`: giá trị của thuộc tính đó.

Chẳng hạn ta muốn viết hoa `firstName` và `lastName`:

```js
const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;

const usersObj = JSON.parse(usersText, function (key, value) {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj.users[0]);
// => {firstName: 'ASABENEH', lastName: 'YETAYEH', age: 250, email: 'asab@asb.com'}
```

# [😻Object to JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

Để chuyển ngược lại từ một object thành chuỗi JSON, ta sử dụng phương thức `stringify`. Cú pháp như sau:

```js
JSON.stringify(obj, replacer, space);
// obj is mandatory
// replacer and space are optional
```

Giải thích tham số:

- `obj`: là đối tượng cần convert.
- `replacer`: là hàm callback dùng để format dữ liệu. Hoặc có thể là mảng các chuỗi hay số để selecting/filtering dữ liệu trong quá trình chuyển đổi thành chuỗi. Nếu để `null` hoặc `undefined` thì mọi thuộc tính đều cho vào chuỗi JSON.
- `space`: là đối tượng chuỗi hoặc số để thể hiện khoảng trắng thụt đầu dòng của chuỗi sau khi chuyển đổi. Nếu là chuỗi thì chuỗi đó được sử dụng như khoảng trắng.

# [😼Filter Array with JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter)

Thử sử dụng một mảng để lọc dữ liệu và truyền vào phương thức `stringify`:

```js
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Pyhton"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const txt = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(txt);
```

Ở đoạn code trên, chúng ta đặt các key dữ liệu mà chúng ta muốn giữ vào trong một mảng và truyền vào tham số replacer.
