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
	this.showGraph = showGraph;
	this.dfs = dfs;
	//store visited vertices and initialize it to all false values
	this.marked = [];
	for (var j = 0; j < this.vertices; ++j) {
		this.marked[j] = false;
	}

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
		console.log(i + " -> ");
		for (var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] !== undefined)
				console.log(this.adj[i][j] + ' ');
		}
		console.log();
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

//depth-first function
function dfs(v) {
	this.marked[v] = true;
	//if statement for print is not required
	//this helps us see the vertices as they are being visited
	if (this.adj[v] !== undefined)
		console.log('Visited vertex: ' + v);
	for (var w in this.adj[v]) {
		if(!this.marked[w]) {
			this.dfs(w);
		}
	}
}