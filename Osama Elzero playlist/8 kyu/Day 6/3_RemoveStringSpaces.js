function noSpace(x) {
    let str = ""
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            str += x[i]
        }
    }
    return str
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
console.log(noSpace('8aaaaa dddd r     '))