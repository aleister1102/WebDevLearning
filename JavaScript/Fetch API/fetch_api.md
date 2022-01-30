<link rel='stylesheet' href='../main.css'>

# Fetch API

Phương thức `fetch` có đối số là một URL của API. Phương thức này trả về một đối tượng thuộc class `Response` giống `Promise`.

```js
fetch(
  "https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
```

Sau khi có đối tượng trả về thì dùng phương thức `then` để trích xuất ra dữ liệu JSON thông qua phương thức `json()` gọi từ đối tượng `response`.

Phương thức `json()` cũng trả về một promise, và vì thế ta gọi phương thức `then` thứ hai để lấy giá trị trả về của promise này.
