//sets the number of rows and columns and sets each value to the initial parameter
Array.matrix = function(rows,cols,initial){
	var arr = [];
	for (var i = 0; i < rows; i++){
		columns = [];
		for (var j = 0; j < cols; j++){
			columns[j] = initial;
		}

		arr[i] = columns;
	}
	return arr;
}

var nums = Array.matrix(4,4,"Good!");
nums[0][0] = "Jeezman";
console.log(nums);