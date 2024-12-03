let n=1;
while(n<=10){
    console.log(n);
    n++;
}
n=1;
do{
    console.log(n);
    n++;
}
while(n<=10);
for(n=1;n<=10;n++){
    console.log(n);
}
//Fibonacci Series
let number=parseInt(prompt(`Enter the number of terms`));
let n1=0, n2=1, nextTerm;
console.log(`Fibonacci seires: `);
console.log(`${n1}`);
console.log(`${n2}`);
for(let i=3; i<=number; i++){
    nextTerm=n1+n2;
    console.log(`${nextTerm}`);
    n1=n2;
    n2=nextTerm;
}
//Factorial of anumber
let num=parseInt(prompt("Enter a number"));
let f=1;
for(let i=1;i<=num;i++)
    f=f*i;
console.log(`Factorial is ${f}`);
//Table
let a=parseInt(prompt(`Enter a number`));
let t;
console.log(`Table of ${a} is:`)
for(let i=1; i<=10; i++){
    t=i*a;
    console.log(t);
}
let b=parseInt(prompt("Enter a number"));
let s=0, temp, d;
temp=b;
while(temp>0){
    d=parseInt(temp%10);
    s=s+d;
    temp=parseInt(temp/10);
}
console.log(`Sum is ${s}`);
let c=parseInt(prompt("Enter a number"));
let pro=1, temp1, d1;
temp1=c;
while(temp1>0){
    d1=parseInt(temp1%10);
    pro=pro*d1;
    temp1=parseInt(temp1/10);
}
console.log(`Product is ${pro}`);
let numb=parseInt(prompt(`Enter a number`));
let temp2,d2,cube, sum=0;
temp2=numb;
while(temp2>0){
    d2=parseInt(temp2%10);
    cube=d2*d2*d2;
    sum=sum+cube;
    temp2=parseInt(temp2/10);
}
if(sum==numb)
    console.log(`${numb} is armstrong number.`);
else
console.log(`${numb} is not armstrong number.`);
//palindrome
let newnum=parseInt(prompt(`Enter a number`));
let rev=0, temp3, d3;
temp3=newnum;
while(temp3>0){
    d3=parseInt(temp3%10);  
    rev=rev*10+d3;
    temp3=parseInt(temp3/10);
}
if(newnum==rev)
    console.log(`${newnum} is palindrome number.`);
else
console.log(`${newnum} is not palindrome number.`);
//prime
let pr=parseInt(prompt(`Enter a number`));
let c1=0;
for(let i=1; i<=pr; i++){
    if(pr%i==0)
        c1++;
}
if(c1==2)
    console.log(`Prime number`);
else
console.log(`Not a Prime number`);
