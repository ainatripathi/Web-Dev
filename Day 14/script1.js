let n=parseInt(prompt("Enter a number:"));
let sqr=n*n;
let temp=n;
let i=0;
let d;
while(temp>0){
    temp=parseInt(temp/10);
    i++;
}
let b=0;
let pro=0,r=0;
temp=sqr;
while(i>0){
    d=parseInt(temp%10);
    if(r<=1){
        r=b*10;
        if(r==0)
            pro=pro+r+d;
        else
        pro=pro+r*d;
        b++;
        if(b>1)
            b--;
    }
    else{
        b=b*10;
        r=b*10;
        pro=pro+r*d;
    }
    temp=parseInt(temp/10);
    i--;
}
if(n==pro)
    console.log(`${n} is automorphic number`);
else
console.log(`${n} is not an automorphic number`);