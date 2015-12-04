//sort function sorts strings very well but not numbers
//we pass in an ordering function to sort
/**it subtracts two numbers, 
if value = negative left operand is smaller etc
**/
function compare(val1,val2){
	return val1 - val2;
}
var num = [3,1,2,100,4,200,3]
num.sort(compare);
console.log(num);