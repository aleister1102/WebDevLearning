const score = [700, 8, 3, 10, 9];
console.log(
    score.sort(function compareNumbers(firstEl, secondEl) {
        return firstEl - secondEl;
    }
    )
);