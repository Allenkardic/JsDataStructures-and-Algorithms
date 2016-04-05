function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.contains = contains;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
}

function add(data) {
	var position = this.dataStore.indexOf(data);
	//if data is not found in the array
	if (position < 0) {
		this.dataStore.push(data);
		return true;
	}
	else {
		return false;
	}
}
//we write the above function as a boolean function so we know whether...
//or not the data was added to the set


function remove(data){
	var position = this.dataStore.indexOf(data);
	//check if requested data is in array
	if (position > -1){
		this.dataStore.splice(position, 1); //remove the data
		return true;
	}
	else{
		return false;
	}
}

function show() {
	return this.dataStore.join(', ');
}


//helper function looks to see if a specified member is part of a set
function contains(data){
	if (this.dataStore.indexOf(data) > -1){
		return true;
	}
	else {
		return false;
	}
}


//combines two sets to form a new set
function union(set) {
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i){
		tempSet.add(this.dataStore[i]);
	}//builds a new set by adding all the members of the first set

	for(var j = 0; j < set.dataStore.length; ++j){
		//checks if member of the second set to see whether it's already
		//a member of the first set
		if (!tempSet.contains(set.dataStore[j])){
			//if its not a member it is added to the new set
			tempSet.dataStore.push(set.dataStore[j]);
		}
	}

	return tempSet;
}

//intersection
function intersect(set){
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i){
		if (set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

function size(){
	return this.dataStore.length;
}

function subset(set){
	//checks that the proposed subset length is less than the compared set
	var member = this.dataStore;
	if(this.size() > set.size()){
		return false;
	}
	else {
		for (var i = 0; i < member.length; ++i){
			if(!set.contains(member[i])){
				return false;
			}
		}
	}
	return true;
}

function difference(set){
	var tempSet = new Set();
	for (var i = 0; i < this.dataStore.length; ++i){
		if(!set.contains(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}
module.exports = Set;