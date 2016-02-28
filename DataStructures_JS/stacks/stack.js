//stack constructor

function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}

function push(element){
	this.dataStore[this.top++] = element;
}

function pop(element){
	//returns the element in the top position and the dec the top variable
	return this.dataStore[--this.top];
}

//returns the top element of the stack by accessing
//the top-1 element of the array
function peek(element){
	return this.dataStore[this.top - 1];
}

function clear(){
	this.top = 0;
}

function length(){
	return this.top;
}

//implement a base converter with a stack
function mulBase(num, base){
	var s = new Stack();

	do {
		s.push(num % base);
		num = Math.floor(num /= base);
	} while (num > 0);
	var converted = "";
	while (s.length() > 0){
		converted += s.pop();
	}
	return converted;
}

//implement a palindrome with a stack
function isPalindrome(word){
    var s = new Stack();
    
    for (var i = 0; i < word.length; i++){
        s.push(word[i]);
    }
    
    var rword = "";
    while(s.length() > 0){
        rword += s.pop();
    }
    
    if (word == rword){
        return true + "! Word is a palindrome";
    } else{
        return false + "! Word is  not a palindrome";
    }
}


