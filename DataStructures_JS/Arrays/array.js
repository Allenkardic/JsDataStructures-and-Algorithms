//arrays are a linear collection of elements, these elements can be accessed via indices
/*
 * Javascript arrays are object and because of this fact, they can grow beyond the size specified at creation
 */


var numbers = []; //creates an array

var anotherArray = new Array();

var yetAnotherArray = new Array(4); //creates an array with 4 elements

//arrays can contain elements of different type
var objects = [2, "Joe", true, null];

//verify an object is an array
var number2 = 2;
var arr = [2, 3, 4];
print(Array.isArray(number2));
print(Array.isArray(arr));

/*
arrays can be created from strings by calling the split() function on the string
Breaking up the string at a common delimeter, such as a space for each word, creating an array consisting of indiviadual parts of the string
*/

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++) {
    print("word " + i + ": " + words[i]);
}

/*assigning one array to another array creates a reference to the assigned array, a change in the original array reflects in the other array*/
var nums = [];
for (var i = 0; i < 5; i++) {
    nums[i] = i + 1;
}
var anotherNums = nums;
nums[0] = 40;
print(anotherNums[0]);//prints 40, this is called shallow copy

//a better alternative is deep copy, created using a function
function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}
var nums = [];
for (var i = 0; i < 5; i++) {
    nums[i] = i + 1;
}
var anotherNums = [];
copy(nums, anotherNums);
nums[0] = 40;
print(anotherNums[0]);

//accessor functions can be used to access the elements of an array. Returns some representation of the target
//searching for a value - indexOf()
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
putstr("Enter a name to search for: ");
var name = readLine();
var position = names.indexOf(name);
if (position >= 0) {
    print("Found " + name + "at position " + position);
} else {
    print(name + "not found in array");
}

//these two functions return string representation of arrays
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
var nameStr = names.join();
print(namestr); //David,Cynthia,Raymond,Clayton,Jennifer

print(names.toString());

//these two accessor functions allow one to create new arrays from existing arrays
/*
 * concat() - allows one to put together two or more arrays to create a new one
 * splice() - allows one create an array from the subset of an existing array
 */
var uxTeam = ["Mike", "Clayton", "Terill", "Danny", "Jennifer"];
var uiTeam = ["Raymond", "Cynthia", "Bryan"];
var itDiv = uxTeam.concat(uiTeam);
print(itDiv);//Mike,Clayton,Terrill,Danny,Jennifer,Raymond,Cynthia,Bryan
var itDiv2 = uiTeam.concat(uxTeam);
print(itDiv2);//Raymond,Cynthia,Bryan,Mike,Clayton,Terrill,Danny,Jennifer

//the arguments for splice() are the starting position for taking the splice and the number of elements to take from the existing array
var uxTeam = ["Mike", "Clayton", "Terill", "Raymond", "Danny", "Jennifer"];
var uxInterns = uxTeam.splice(3, 3);
print(uxInterns);
