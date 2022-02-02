function run(x, y) {
    var arr = [];
    function recur(x,y,arr){
        if(x + 1==y){
            return;
        }
        else {
            y-=1;
            arr.unshift(y);
            recur(x,y,arr);
        }
    }
    return arr
}

