function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LinkedList () {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.displayReverse = displayReverse;
}

function insert(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}


function remove(item){
	var currNode = this.find(item);
	if (!(currNode.next == null)){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

//function moves to the last of the list without going past the end of the list
function findLast(){
	var currNode = this.head;
	while (!(currNode.next == null)){
		currNode = currNode.next;
	}
	return currNode;
}

//function to display elements of the doubly linked list in reverse order
function displayReverse(){
	var currNode = this.head;
	currNode = this.findLast();
	while(!(currNode.previous == null)){
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}