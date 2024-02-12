var countSheep = function (num){
    let str = '';
    for (let i = 0; i < num;i++) {
        str += `${i+1} sheep...`
    }
    return str;
  }
  console.log(countSheep(0));
  console.log(countSheep(1));
  console.log(countSheep(2));
  console.log(countSheep(3));
