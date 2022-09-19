//Print reverse number in text

var num = prompt("enter the number");
var ret;
while (num > 0){
ret = (num % 10);
    switch (ret) {
        case 0:
    console.log("zero");
    break;
    case 1:
        console.log("one");
        break;
        case 2:
            console.log("two");
            break;
            case 3:
                console.log("three");
                break;
                case 4:
                    console.log("four");
                    break;
                    case 5:
                        console.log("five");
                        break;
                        case 6:
                            console.log("six");
                            break;
                            case 7:
                                console.log("sevan");
                                break;
                                case 8:
                                    console.log("eight");
                                    break;
                                    case 0:
                                        console.log("nine");
                                        break;

}
      num=(num-ret)/10;
}

//Print reverse number


var number = prompt("enter the number");
var remain;
while (number > 0){
remain = (number % 10);
    switch (remain) {
        case 0:
    console.log(0);
    break;
    case 1:
        console.log(1);
        break;
        case 2:
            console.log(2);
            break;
            case 3:
                console.log(3);
                break;
                case 4:
                    console.log(4);
                    break;
                    case 5:
                        console.log(5);
                        break;
                        case 6:
                            console.log(6);
                            break;
                            case 7:
                                console.log(7);
                                break;
                                case 8:
                                    console.log(8);
                                    break;
                                    case 9:
                                        console.log(9);
                                        break;

}
      number=(number-remain)/10;
}

//SUM of numbers

let b =prompt("Enter the number")
let sum=0;
let rem;
while(b>0){
    rem = b%10;
    sum=sum+rem;
     b= Math.floor(b/10);
}
console.log(sum);

//fount the lettes

// let x = [ "AZIZ"];

// for (let i = 0; i < x; i++) {
    
//     if ( x =="A" ) {
//         console.log("A")
//        }
//        else if(x =="E"){
//         console.log("E")
//     }
//     else if(x =="I"){
//         console.log("I")
//     }
//     else if(x =="O"){
//         console.log("O")
//     }
//     else if (x =="U"){
//         console.log("U")
//     }
//     else {
//         console.log("no vowel");

//     }
    
// }


var letter =prompt("Enter the text"); 

