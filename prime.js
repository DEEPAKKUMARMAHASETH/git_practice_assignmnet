let num = 13;
let sum = 0;
for(let i = 2; i<num; i++){
	if(num%i==0){
	count++;
}
}
if(sum==0){
console.log("Prime");
}else{
console.log("not a prime");
}