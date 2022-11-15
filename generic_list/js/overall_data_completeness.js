// Available variables are x, ys, element, and Plotly
// Type console.log(x, ys); for more info about x and ys
// To plot your graph call Plotly.plot(element, ...)
// Plotly examples and docs: https://plot.ly/javascript/
//Function to count length of objects.
function countProperties(obj){
return Object.keys(obj).length;
}
//Function to calculate empty values in an object
function emptyValues(obj){
count = 0;
for (let key in obj){
if (obj.hasOwnProperty(key)){
value = obj[key];
count += value.length - value.filter(String).length;
}
}
return count;
}
input_data = ys;
totalCount = countProperties(input_data) * countProperties(input_data.age_at_diagnosis); 
empties = emptyValues(input_data);
var data = [{
values: [totalCount - empties, empties],
labels: ['Filled cell values', 'Empty cell values'],
type: 'pie'
}];
Plotly.newPlot(element, data);
