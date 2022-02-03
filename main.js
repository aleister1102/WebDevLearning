function run(input) {
    var type = typeof(input)
    if(type == "string" || type == "array"){
        return input.includes('F8');
    }
    return false
}
console.log(typeof ([1,2,3]))
console.log(run(['F8', 'Học lập trình']));