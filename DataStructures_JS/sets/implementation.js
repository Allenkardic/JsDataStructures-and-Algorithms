var Set = require('./set');


var names = new Set();
names.add('David');
names.add('Jennifer');
names.add('Cynthia');
names.add('Mike');
names.add('Raymond');
if (names.add('Mike')){
	console.log('Mike added');
}
else{
	console.log("Can\'t add mike, must already be in set");
}
console.log(names.show());
var removed = 'Mike';
if (names.remove(removed)){
	console.log(removed + ' removed.');
}
else {
	console.log(removed + 'not removed');
}
names.add('Clayton');
console.log(names.show());
removed = 'Alisa';
if (names.remove('Mike')){
	console.log(removed + ' removed.');
}
else {
	console.log(removed + ' not removed.');
}


console.log('*****************************************************');
console.log('computing the union of two sets');
var cis = new Set();
cis.add('Mike');
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Raymond');
var dmp = new Set();
dmp.add('Raymond');
dmp.add('Cynthia');
dmp.add('Jonathan');
var it = new Set();
it = cis.union(dmp);
console.log(it.show());

console.log('********************intersection*************************');
var newSet = new Set();
newSet.add('Mike');
newSet.add('Clayton');
newSet.add('Jennifer');
newSet.add('Raymond');
var temp = new Set();
temp.add('Raymond');
temp.add('Cynthia');
temp.add('Bryan');
var intersect = newSet.intersect(temp);
console.log('intersection of ' + newSet.dataStore + ' and ' + temp.dataStore);
console.log(intersect.show());

console.log('*****************************subset*************************');
var bro = new Set();
bro.add('Cynthia');
bro.add('Clayton');
bro.add('Jennifer');
bro.add('Danny');
bro.add('Jonathan');
bro.add('Terrill');
bro.add('Raymond');
bro.add('Mike');
var sis = new Set();
sis.add('Cynthia');
sis.add('Raymond');
sis.add('Jonathan');
sis.add('Baggins');
if (sis.subset(bro)){
	console.log('SIS is a subset of BRO');
}
else {
	console.log('SIS is not a subset of BRO');
}

console.log('**************DIFFERENCE**************************************');
var bis = new Set();
var bbc = new Set();

bis.add('Clayton');
bis.add('Jennifer');
bis.add('Dannny');
bbc.add('Bryan');
bbc.add('Clayton');
bbc.add('Jennifer');
var diff = new Set();
diff = bis.difference(bbc);
console.log('[' + bis.show() + '] difference [' + bbc.show() + '] -> [' + diff.show() + ']');
