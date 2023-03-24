/*
let i =10
let f =20.5
let b = true
let s ='ha noi'

document.write('i = ' + i)
document.write('<br/>')
document.write('f= ' + f)
document.write('<br>')
document.write('b='+b)
document.write('<br>')
document.write('s='+s)
*/
/*
let a =20
let b=10
let S= a * b
document.write('S=' + S )
*/
// let a = prompt()
// let b = prompt()
// let S = a * b
// alert(S)
// var x = 1;
//
// for (var i=0; i<3; i=i+2)
// {
//     x = x+1;
// }
//
// console.log(x);
// console.log(i);
// for (var i=20; i!=10; i--)
// {
//     console.log(i);
// }
// for(var i=9; i<=20; i++)
// {
//     if(i == 10)
//     {
//         break;
//     }
//     else
//     {
//         console.log('hello');
//     }
//
//     console.log(i);
// }
// var x = 'code';
// var y = 'gym';
//
// for(num1=0; num1<=x.length-1; num1++)
// {
//     for(num2=0; num2<=y.length-2; num2++)
//     {
//         console.log(x+y);
//     }
// }
// var x = [[5,10], [15,20,25,30],[45,50]];
// console.log(x[1][3] + x[2][1] + x[0][0]);
var x = [[2,4,6,8], [12], [10,32,50]];

if(x[1][0] - x[2][0] == x[0][0])
{
    console.log(x[1][0] + x[2][1] + x[0][2]);
}
else
{
    console.log(x[0][0] + x[1][0] + x[0][3]);
}
console.log(x[1][0])