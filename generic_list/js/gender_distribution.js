// Available variables are x, ys, element, and Plotly
// Type console.log(x, ys); for more info about x and ys
// To plot your graph call Plotly.plot(element, ...)
// Plotly examples and docs: https://plot.ly/javascript/
console.log(x, ys);
result = ys['biological_sex'].reduce((a, c) => (a[c] = (a[c] || 0) +1, a), Object.create(null));
console.log(result);
var data = [
  {
    values: Object.values(result),
    labels: ['Male', 'Female'],
    type: 'pie'
  }
];

Plotly.newPlot(element, data);


