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