//a circularly linked list has its head node property pointing back to itself
//the last node of the list is always pointing back to the head of the lisst
//created if you want the ability to go backward in the list but dont want the
//overhead of creating a doubly linked list

function CircularList(){
	this.head = new Node('head');
	this.head.next = this.head;
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null) && !(currNode.next.element == 'head')){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

//modify other functions from a standard list to make them work with a circularly list