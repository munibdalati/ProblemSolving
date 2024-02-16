function momentOfTimeInSpace(moment) {
    let time = 0
    let space = 3
    for (let i = 0; i < 5; i++) {
        if (moment[i] !== "0" && moment[i] !==":") {
            time += parseInt(moment[i]) 
        }
        else {
            space++
        }
    }
    console.log(time, space)
    if (time > space) {
        return[false, false, true]
    }
    else if (time < space) {
        return [true, false, false]
    }
    else {
        return [false, true, false]
    }
}

console.log(momentOfTimeInSpace("12:30 am"))
console.log(momentOfTimeInSpace("12:02 pm"))
console.log(momentOfTimeInSpace("01:00 pm"))
console.log(momentOfTimeInSpace("11:12 am"))
console.log(momentOfTimeInSpace("05:20 pm"))
console.log(momentOfTimeInSpace("04:20 am"))