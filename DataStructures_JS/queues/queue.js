// Queue Implementation

function Queue(){
	this.dataStore = [];
	this.front = front;
	this.back = back;
	this.dequeue = dequeue;
	this.enqueue = enqueue;
	this.empty = empty;
	this.toString = toString;
	this.length = length;
	this.peek = peek;
}

function enqueue (element) {
	this.dataStore.push(element);
}

function dequeue () {
	return this.dataStore.shift();
}

//examines the front of the queue
function front () {
	return this.dataStore[0];
}

//examines the back of the queue
function back () {
	return this.dataStore[this.dataStore.length - 1];
}

//toString function to display all the elements in a queue
function toString () {
	var returnString = "";
	for (var i = 0; i < this.dataStore.length; i++){
		returnString += this.dataStore[i] + "\n";
	}
	return returnString;
}

//helps us know if queue is empty
function empty(){
	if (this.dataStore.length == 0){
		return true;
	}
	else {
		return false;
	}
}
