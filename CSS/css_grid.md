<link rel='stylesheet' href='../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Grid</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Documents](#documents)
  - [Cheat Sheets](#cheat-sheets)
  - [Games](#games)
- [🎨Grid Properties](#grid-properties)
- [🚛Grid Container](#grid-container)
  - [Columns/Rows](#columnsrows)
  - [Gap](#gap)
  - [Fraction (fr) unit](#fraction-fr-unit)
- [📦Grid Items](#grid-items)
  - [Column/Row](#columnrow)
- [🗾Grid Areas/Area](#grid-areasarea)
  - [Areas](#areas)
  - [Area](#area)
- [🥿Auto Fit & Auto Fill](#auto-fit--auto-fill)

# References

## Documents

> [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

> [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-the-repeat-function-and-keywords)

## Cheat Sheets

> [grid.malven.co](https://grid.malven.co/)

## Games

> [Grid Garden](https://cssgridgarden.com/#vi)

# [🎨Grid Properties](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-properties)

<img src="./images/grid1.png">

# [🚛Grid Container](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-properties-for-the-parentgrid-container)

`display: grid` để áp dụng Grid.

<img src="https://webkit.org/wp-content/uploads/grid-concepts.svg">

## [Columns/Rows](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-columnsgrid-template-rows)

`grid-template-columns` để set số lượng cột và kích thước mỗi cột. Tương tự dùng `grid-template-rows` cho dòng.

Có thể sử dụng hàm dưới đây để lặp lại các kích thước của cột/hàng:

`repeat(number of columns/rows, the column width we want)`

Thay vì viết `200px 200px 200px 200px`, thì ta viết `repeat(4, 200px)`.

## [Gap](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-column-gaprow-gapgrid-column-gapgrid-row-gap)

`gap`: gồm `row-gap` và `column-gap` để set khoảng trống giữa các hàng và cột, kích thước của gap sẽ cộng vào kích thước của hàng/cột. Có thể dùng dạng shortform: `gap: row column`.

## [Fraction (fr) unit](https://css-tricks.com/introduction-fr-css-unit/)

Khi ta sử dụng gap, kích thước của gap sẽ cộng vào mỗi cột làm cho xuất hiện scroll ngang (nếu là column-gap).

Thay vì viết `repeat(4, 200px)` thì ta viết `repeat(4, 1fr)`, sẽ cho hiệu quả chia cột tương tự nhưng kích thước của gap sẽ được tính luôn vào mỗi cột, không làm xuất hiện scroll ngang.

```css
.layout {
  display: grid;
  /* Has horizontal scroll*/
  grid-template-columns: repeat(4, 200px);
  /* No horizontal scroll*/
  grid-template-columns: repeat(4, 1fr);
}
```

Có thể kết hợp đơn vị fr với các loại đơn vị khác. Chẳng hạn ta có hai box có width của box 1 là **200px**. Ta muốn box còn lại lấp đầy không gian còn lại, ta sử dụng **1fr**:

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
}
```

# [📦Grid Items](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-properties-for-the-childrengrid-items)

## Column/Row

Để thiết lập vị trí cho một item, bao gồm gridline bắt đầu và kết thúc, cần sử dụng `grid-column` và `grid-row`.

```css
.items {
  /* Start at column gridline 1 and end at column gridline 3 */
  grid-column: 2/4;
  /* Start at row gridline 1 and end at row gridline 3 */
  grid-row: 1/4;
}
```

<img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/675edda7-165f-417d-8ce5-259a3b29141b/grid-lines.png">

Thay vì viết cụ thể số grid-line, có thể sử dụng `span`. Một span tương ứng với một cột/hàng. Đoạn code trên tương đương:

```css
.items {
  /* Take two column from column gridline 2*/
  grid-column: 2 / span 2;
  /* Take three row from row gridline 1*/
  grid-row: 1 / span 3;
}
```

# [🗾Grid Areas/Area](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-areas)

## Areas

Để căn chỉnh layout một cách trực quan, ta có thể viết tên các items dưới dạng ma trận:

```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

<img src="https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg">

## Area

Đối với các item thì chỉ cần gán giá trị cho property `grid-area` là tên của phần tử cần đặt trong grid box:

```css
.header {
  grid-area: header;
}
```

# [🥿Auto Fit & Auto Fill](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-the-repeat-function-and-keywords)

<img src="https://ishadeed.com/assets/grid-minmax/auto-fit-fill.png">

Sử dụng từ hai từ khóa này có thể làm responsive nhanh hơn mà không cần dùng media queries.
