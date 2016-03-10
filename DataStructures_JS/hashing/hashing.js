//constructor for the hash table class

function HashTable(){
   this.table = new Array(137);
   this.simpeHash = simpleHash;
   this.showDistro = show;
   this.put = put;
   //this.get = get;
}

//places the data in the hash table
function put(data){
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

//computes a hash function by summing the ASCII value of 
//each name
function simpleHash(){
	var total = 0;
	for (var i = 0; i < data.length; ++i){
		total += data.charCodeAt(i);
	}

	return total % this.table.length;
}

//displays data from the hash table
function showDistro(){
	var n = 0;
	for (var i = 0; i < this.table.length; ++i){
		if(this.table[i] != undefined){
			console.log(i + ": " + this.table[i]);
		}
	}
}

/*
var someNames = ['David', 'Uchechukwu', 'Precious', 'Onose', 'Oluwatobi', 'Becky'];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i){
	hTable.put(someNames[i]);
}
hTable.showDistro();
*/