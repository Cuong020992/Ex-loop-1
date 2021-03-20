/*//bài 1

for(let i=1;i<100;i++){
    document.write('Đếm '+i+ "<br>");
}
*/


/* // bài 6
let total = 0;
for(let i=1;i<31;i++){
    let number = +prompt('nhập số')
    if(number % 7 ==0){
        total += number;
    }
}
document.write(total);
*/

/* //bài 7
for (i=1;i<101;i++){

    if (i%3==0 && i%5==0){
        document.write('fizzbuzz '+i+ '<br>');
    }
    else if (i % 5 == 0){
        document.write('buzz '+i+ '<br>');
    }
    else if(i % 3 == 0){
        document.write('fizz '+i+ '<br>');
    }
}
*/

/*//bài 8

for (let i=0;i<3;i++){
    let input = +prompt('nhập dự đoán của bạn tại đây')
    let random = Math.floor(Math.random()*10)+1;
    alert(random);
        if(input == random){
            alert('Chúc mừng bạn đã đoán trúng ');
        }
        else {
            alert('bạn đã đoán sai ');
        }
}
*/