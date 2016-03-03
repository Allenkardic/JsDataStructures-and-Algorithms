// node class

//element stores the nodes data
//next stores a link to the next node in the linked list
function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList () {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.display = display;
}

function find(item) {
    //creates a new node and assigns it as the head node
    var currentNode = this.head;
    //if data not found, function returns null
    while  (currentNode.element != item){
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

//function to display the elements of the linked list
function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}


/*
implementation code

var cities = new LinkedList();
cities.insert('Port harcourt','head');
cities.insert('Lagos','Port harcourt');
cities.insert('Benin', 'Lagos');
cities.display()

*/

//before we remove a node from the linked list
//we need to find the previous node

//this function finds the previous node
function findPrevious(item){
	var currNode = this.head;
	while (!(currNode == null) && (currNode.next.element != item)){
		currNode = currNode.next;
	}
	return currNode;
}

function remove(item){
	var prevNode = this.findPrevious(item);
	if (!(prevNode.next == null)){
		prevNode.next = prevNode.next.next;
	}
}