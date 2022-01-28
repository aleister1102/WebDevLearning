<link rel='stylesheet' href='../main.css'>

# Synchronous & Asynchronous

**Synchronous** (đồng bộ) là các câu lệnh viết trước thì thực thi trước, viết sau thì thực thi sau. Nói cách khác, sẽ chỉ có một luồng thực thi các đoạn code từ trên xuống dưới.

**Asynchronous** (bất đồng bộ) là các câu lệnh được thực hiện không theo thứ tự code, các câu lệnh được chia đa luồng để thực thi.

Hai phương thức `setTimeout` và `setInteval` là các phương thức bất đồng bộ. Ngoài ra còn các phương thức khác cũng là async như `fetch`, đọc file hoặc request animation.

> Vấn đề nảy sinh là chúng ta không biết khi nào các phương thức này hoàn thành.

Lấy ví dụ phương thức `fetch` dùng để gọi API lấy dữ liệu, tùy tốc độ mạng và nhiều yếu tố mà phương thức này sẽ tốn lượng thời gian khác nhau.

## Callback function

Callback chính là câu trả lời cho vấn đề trên. Chẳng hạn ta muốn viết đoạn code bên dưới sao cho số 2 in trước số 1:

```js
console.log(1);
console.log(2);
```

Điều này đối với sync là không thể. Tuy nhiên ta có thể sử dụng `setTimeout`:

```js
setTimeout(function () {
  console.log(1);
}, 1000);
console.log(2);
```

Lúc này, hàm callback trong `setTimeout` sẽ được thực thi ngay sau tác vụ delay 1000ms giây hoàn thành. Một cách kỹ thuật hơn, callback đảm bảo hàm sẽ không được thực thi trước khi tác vụ nào đó hoàn thành. Nhưng lại được thực thi ngay lập tức sau khi tác vụ đó hoàn thành.

## Callback Hell

> Đến lúc này, vấn đề tiếp theo nảy sinh là các Callback Hell, nghĩa là có quá nhiều callback lồng vào nhau.

<img src = "promise1.png">

Lý do dẫn đến Callback Hell là khi cần viết các đoạn code mà có các tác vụ phụ thuộc lẫn nhau. Tức là phải chờ đến khi tác vụ a xong thì tác vụ b mới được thực thi và thực thi ngay sau đó. Tương tự phải chờ kết quả trả về của tác vụ b thì tác vụ c mới được thực thi (phụ thuộc lẫn nhau).

# Promise

Để thoát khỏi địa ngục callback đó (về cách viết code), chúng ta sẽ sử dụng promise. Tuy nhiên, chỉ khi xảy ra Callback Hell thì mới nên dùng.

Định nghĩa một cách kỹ thuật hơn, promise sinh ra là để xử lý các thao tác bất đồng bộ. Bắt chúng phải "cam kết một lời hứa" nào đó, đảm bảo các hàm callback phải trả về giá trị hoặc ít nhất là thông báo lỗi nếu không thực thi được callback.

## Promise States

Một Promise sẽ ở một trong ba trạng thái:

- `pending`: trạng thái khởi tạo, chưa bị fulfilled hay rejected.
- `fulfilled`: thể hiện rằng operation đã được hoàn thành thành công.
- `rejected`: operation thực thi thất bại.

## Creating Promise

Các bước khởi tạo:

1. Khởi tạo đối tượng dùng Promise Constructor thuộc lớp đối tượng Promise.
2. Tạo **Executor**, executor là tham số của constructor.
3. Executor có hai tham số cũng đều là hàm callback:

- `resolve`: thực hiện khi Promise có trạng thái là fulfilled.
- `reject`: thực hiện khi Promise có trạng thái là rejected.

  Bắt buộc gọi một trong hai callback resolve và reject trong executor.

```js
const promise = new Promise(function (resolve, reject) {
  // Logic processing
  // => resolve(); // When succes
  // => reject(); // When failed
});
```

Executor sẽ được gọi trước cả khi đối tượng `promise` được tạo.

Đoạn code trên sẽ làm promise có trạng thái pending, trạng thái này nếu không chuyển sang hai trạng thái còn lại thì có thể gây ra rò rỉ bộ nhớ.

## Promise Object Methods

Sau khi khởi tạo thành công, chúng ta sẽ nhận được đối tượng có tên `promise`. Đối tượng này sẽ gọi thực hiện các phương thức thông dụng sau:

```js
promise
  .then(function () {}) // when resolve
  .catch(function () {}) // when reject
  .finally(function () {}); // either resolve or reject
```

Cả ba phương thức đều nhận các hàm callback làm đối số.

Nếu như `resolve` được thực thi, tức là operation đã được thực hiện thành công. Thì "lời hứa" `promise` sẽ gọi phương thức `then()` và thực thi.

Nếu như `reject` được thực thi thì `promise` sẽ gọi phương thức `catch`. Nếu không gọi phương thức này sẽ xảy ra lỗi `Uncaught (in promise)`

Và nếu một trong hai `resolve` hoặc `reject` được thực thi thì phương thức `finally` sẽ được gọi.

## Returning Values

Các giá trị của executor có thể trả ra cho hai phương thức các phương thức của đối tượng Promise. Giá trị trả về sẽ truyền vào làm tham số của resolve hoặc reject.

```js
const promise = new Promise(function (resolve, reject) {
  if (true) resolve("Success");
  else reject("Error");
});

promise
  .then(function (success) {
    console.log(success);
    // => "Success"
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
  });
```

Và giá trị đó cũng truyền vào làm tham số của hàm callback bên trong phương thức `then`, `catch` hoặc `finally`.

# Promise Chain

Ở ba phương thức mà đối tượng promise trên gọi, chúng được thực hiện tuần tự và liền nhau. Vì vậy ta gọi chúng là **chain**. Tức là sau khi thực hiện `then` hoặc `catch` thì mới đến `finally`.

Vận dụng điều này, ta có thể gọi tiếp phương thức `then` sử dụng một hàm callback khác để giải quyết bài toán Callback Hell. Tức là bài toán viết code để thực thi các tác vụ liền nhau và phụ thuộc lẫn nhau.

```js
const promise = new Promise(function (resolve, reject) {
  if (true) resolve();
  else reject("Error");
});

promise
  .then(function () {
    return 1;
  })
  .then(function (data) {
    console.log(data);
    return data + 1;
  })
  .then(function (data) {
    console.log(data);
    return data + 1;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
  });

// => 1
//    2
//    3
```

Dữ liệu trả về của callback trong phương thức `then` đầu tiên sẽ là đối số cho tham số `data` của hàm callback có trong phương thức `then` thứ hai. Cứ như vậy các hàm callback được nối liền nhau hình thành nên **Promise Chain**.

Nếu như giá trị trả về là một promise, thì lời gọi phương thức `then` thứ hai phải chờ cho promise đó thực thì rồi mới tới lượt mình:

```js
const promise = new Promise(function (resolve) {
  resolve();
});

promise
  .then(function () {
    return new Promise(function (resolve) {
      setTimeout(resolve, 1000);
    });
  })
  .then(function (data) {
    console.log(data);
    // => undefined, because resolve does not return anything.
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("Done");
  });
```

Lý do thì đã nói ở trên, executor được thực hiện **trước khi object promise** được tạo. Do đó phải chờ timeout 1s, rồi resolve được gọi, đến lúc này promise mới được tạo ra.

Sau đó mới trả về được đối tượng promise. Và lời gọi phương thức `then` thứ hai này chính là gọi cho đối tượng promise mới được tạo ra.

```js
promise
  .then(function () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve("Hello");
      }, 1000);
    });
  })
  .then(function (data) {
    console.log(data);
    // => "Hello"
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("Done");
  });
```

Xét trường hợp khác, giả sử trong các lời gọi phương thức `then`, promise bị rơi vào trạng thái rejected. Lúc này thì nó sẽ nhảy thẳng xuống `catch` và bỏ qua các lời gọi `then` liền kề.
