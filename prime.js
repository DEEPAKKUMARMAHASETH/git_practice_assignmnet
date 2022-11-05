let num = 13;

for(let i = 1; i<num; i++){
	if(num%i==0){
	count++;
}
}
if(count==0){
console.log("Prime");
}else{
console.log("not a prime");
}