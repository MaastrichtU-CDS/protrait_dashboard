// Available variables are x, ys, element, and Plotly
// Type console.log(x, ys); for more info about x and ys
// To plot your graph call Plotly.plot(element, ...)
// Plotly examples and docs: https://plot.ly/javascript/
function emptyValues(obj) {
    count = 0;
    hist = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = obj[key];
            count = value.length - value.filter(String).length;
            hist[key] = count;
        }
    }
    return hist;
}
values = emptyValues(ys);
new_values = Object.fromEntries(Object.entries(values).filter(([key, value]) => value > 0));
var data = [{
    x: Object.keys(new_values),
    y: Object.values(new_values),
    type: 'bar'
}];
Plotly.newPlot(element, data);
