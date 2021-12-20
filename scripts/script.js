//Задача №1..............OK
/*
let arr = [1,2,3,4,5];
for(let i=1;i<=5;i++){
    document.write(i);
}
*/




//Задача №2..............OK
/*
let arr1 = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];
arr1.sort(function(a,b){
    return a-b;
});
let result = arr1.filter(function(elem) {
	if (elem >-10 && elem<-3) {
		return true;
	} else {
		return false;
	}
});
document.write(result);
*/





//Задача №3..............OK
/*
let arr2 = [];
let sum = 0;
for (let i = 23; i <= 57; i++) {
   arr2.push(i);
}
document.write('\n'+arr2);

let arr3 = [];
let x = 22;
while ( x <= 56) {
    x++;
    arr3.push(x)
}
document.write('</p><p>'+arr3);

function arraySum(arr2){
let sum = 0;
for(let i = 0; i < arr2.length; i++){
    sum += arr2[i];
    }
document.write('<p></p>'+'сумма элементов массива: ',sum);
}
arraySum(arr2);
*/





//Задача №5..............OK
/*
let arr6 =['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ','ВС'];
for(let i = 0; i<arr6.length; i++){
    if( i == 5 || i == 6){
        document.write(arr6[i].bold()+'<p/>');
    }else
    document.write(arr6[i]+'<p/>');
}
*/




//Задача №6..............OK
/*
let arr8 =['JS', 'В1', '1', 'string'];
arr8.push(7);
console.log(arr8[arr8.length-1]);
*/






//Задача №8..............OK
/*
let arr9 = [12, false,'Текст', 4, 2, -5, 0];
let arrtemp;
let arr10 = []

let i = 0;
while(i < arr9.length) {
    arrtemp = arr9[i];
    arr10.unshift(arrtemp);
    i++;
}
document.write(arr9+"<br/>")
document.write (arr9.reverse());
*/




//Задача №4..............NO_OK
/* 
let arr4 =['10', '20', '30', '50', '235', '3000'];
let arr5 = arr4.map(Number);
*/


