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