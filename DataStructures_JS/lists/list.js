//list implementation
/** properties and functions in a list
listSize - number of elements in a list
position - current position in the list
length - number of elements in the list
clear() - clears all the elements from the list
toString() - returns a string representation of the list
getElement() - returns element at current position
insert() - inserts new element after existing element
append() - adds new element to the end of the list
remove() - removes element from list
front() - sets current position to first element of list
end() - sets current position to last element of list
prev() - moves current position back one element
next() - moves current position forward one element
currPos() - returns the current position in list
moveTo() - moves the current position to specified position\
contains() - checks if element is contained in list
**/
debugger;
function List(){
	this.listSize = 0;
	this.pos = 0;
	this.datastore = [];//initialize empty array to store list elements
	this.clear = clear;
	this.find = find; //helper function
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.lengths = lengths;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

//appends a new element to the list at the next available position
function append(element){
	this.datastore[this.listSize++] = element;
	//after the element is appended listSize is increased by 1
}

//helper function
function find(element){
	for (var i = 0; i < this.datastore.length; ++i){
		if(this.datastore[i] == element){
			return i;						
		}
	}
	return -1; //returns this if element not found
}

//remove function
function remove(element){
	var found = this.find(element);
	if(found > -1){
		this.datastore.splice(found,1);
		--this.listSize;
		return true;
	}
	return false;
}

//determine the length of list
function lengths (){
	return this.listSize;
}



//retrieves list elements
function toString(){
	return this.datastore.join(",");
}

//inserts element
function insert(element,after){
	var position = this.find(after); //position to insert element
	if (position > -1){
		this.datastore.splice(position+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

//clears list
function clear(){
	if (this.listSize > 0){
		for(var i = this.datastore.length - 1; i >= 0; --i){
			var popped = this.datastore.pop();
			--this.listSize;
		}
		return true;
	}
	return false;
	/*
	delete this.datastore;
	this.datastore = [];
	this.listSize = this.pos = 0;
	 */
}

//determines if a value is in the list
function contains(element){
	var isFound = this.datastore.indexOf(element);
	if(isFound != -1){
		console.log('Element found at position ' + isFound);
		return true;
	}
	return false;
	/**
	 for(var i = 0; i < this.datastore.length; ++i){
		 if(this.datastore[i] == element){
			 return true;
		 }
	 }
	 return false;
	 */
}

//the following functions allows movement allows through a list
function front(){
	this.pos = 0;
}

function end(){
	this.pos = this.listSize - 1;
}

function prev(){
	if(this.pos > 0){
		--this.pos;
	}
}

function next(){
	if(this.pos < this.listSize - 1){
		++this.pos;
	}
	//return false;
}

function currPos(){
	return this.pos;
}

function moveTo(position){
	this.pos = position;
}

function getElement(){
	return this.datastore[this.pos];
}

//iterating the list
// for (var names.front(); names.currPos() < names.length(); names.next()){
// 	console.log(names.getElement());
// }
var names = new List();
names.append('Sojie');
names.append('Tobi');
names.append('Zee');
console.log(names.listSize);
names.remove('Sojie');
console.log(names.toString(), names.lengths());
names.insert('Agnes','Tobi');
console.log(names.toString(), names.lengths());
// names.clear();
// console.log(names.lengths(), names.toString(), 'position: ' + names.position);

// console.log('after clear');
// names.append('Jack');
// names.append('Boss');
// console.log(names.toString(), 'position: ' + names.position);

// console.log(names.contains('Boss'));

names.front();
console.log(names.getElement());
// names.next();
// console.log(names.getElement());
// names.next();
// console.log(names.getElement());
// names.prev();
// console.log(names.getElement());

// for (names.front(); names.currPos() < names.lengths(); names.next()){
// 	console.log(names.getElement());
// }
