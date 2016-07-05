function Vertex(label) {
	this.label = label;
}

//we store the list of vertices in an array and ref them in the
//Graph class by their position in the array

//Graph class
function Graph(v) {
	this.vertices = v;
	this.edge = 0;
	this.adj = [];

	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}//adds a subarray in each element of the array to store all the 
	//adjacent vertices, initializes each element to the empty string

	this.addEdge = addEdge;
	this.toString = toString;
}
//class keeps track of how many edges are represented in a graph, as well
//as the number of verices, by utilizing an array whose length is equal 
//to the number of vertices in the graph

//addEdge function
function addEdge(v,w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}
//when called with two vertices A and B, function finds the adjacency list
//for vertex A and adds B to the lis, finds the adjacency list for B and
//adds A to the list. Finnally increments the no of edges by 1

//function showGraph
function showGraph() {
	for (var i = 0; i < this.vertices; ++i) {
		putstr(i + " -> ");
		for (var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] != undefined)
				putstr(this.adj[i][j] + ' ');
		}
		print();
	}
}


//implementation
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();

/*
output
0 -> 1 2
1 -> 0 3
2 -> 0 4
3 -> 1
4 -? 2
*/