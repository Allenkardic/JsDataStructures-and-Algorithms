function Dictionary(){
	this.dataStore = [];
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key, value){
	this.dataStore[key] = value;
}

function find(key){
	return this.dataStore[key];
}

function remove(key){
	delete this.dataStore[key];
}

function showAll(){
	for (var key in Object.keys(this.dataStore).sort()){
		console.log(key + " -> " + this.dataStore[key]);
	}
}

//auxiliary functions for the dictionary class
//function to know how many entries are in the dictionary

function count(){
	//length not use because it doesn't work with string keys
	var n = 0;
	for (var key in Object.keys(this.dataStore)){
		++n;
	}
	return n;
}

function clear(){
	for (var key in Object.keys(this.dataStore)){
		delete this.dataStore[key];
	}
}