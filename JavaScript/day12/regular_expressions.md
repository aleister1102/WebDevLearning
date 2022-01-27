# Regular Expressions

**Regular Expressions** (biểu thức chính quy) là một ngôn ngữ lập trình nhỏ để tìm các khuôn mẫu (pattern) bên trong dữ liệu.

Regex thường được dùng trong JS bằng Regular Expressions Constructor hoặc thông qua khai báo Regex pattern sử dụng hai dấu `/` kèm một cái cờ (flag) nào đó. Các flag có thể là `g, i, m, s, u, y`.

## Regex parameters

Một biểu thức thức chính quy nhận vào hai tham số. Hai tham số đó là pattern cần tìm kiếm và optional flag.

### Pattern

Một pattern có thể là ký tự hay bất kỳ dạng pattern nào có một vài sự tương đồng mà ta cần tìm kiếm.

### Flag

Flag là một tham số optional để quy định cách tìm kiếm dữ liệu, có một vài flag thông dụng:

- g: là một global flag, quy định việc tìm kiếm cho cả đoạn ký tự.
- i: case sensitive flag, nó tìm kiếm cho cả in hoa và in thường.
- m: multiline.

## Creating Regex using Constructor

Có thể tạo ra các biểu thức chính quy bằng contructor `RegExp`:

```js
let pattern = "love";
let flag = "gi";
let regEx = new RegExp(pattern, flag);
```

Hoặc ngắn gọn hơn:

```js
let regEx = new RegExp("love", "gi");
```
