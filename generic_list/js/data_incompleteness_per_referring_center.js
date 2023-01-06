// Available variables are x, ys, element, and Plotly
// Type console.log(x, ys); for more info about x and ys
// To plot your graph call Plotly.plot(element, ...)
// Plotly examples and docs: https://plot.ly/javascript/
function createTrace(data, referringCenter, columnName) {
    tempVar = {};
    tempVar1 = [];
    newData = data.map(function(e, i) {
        return [e, x[i]];
    });
    newData.map(function(a) {
        if (a[0] == '' && a[1] == referringCenter)
            tempVar1.push(a[1])
    });
    tempVar1.map(function(a) {
        if (a in tempVar) tempVar[a]++;
        else tempVar[a] = 1;
    });
    var trace = {
        x: Object.keys(tempVar),
        y: Object.values(tempVar),
        name: columnName,
        type: 'bar'
    };
    return trace;
};

function setChart(chosenReferringCenter) {
    var data = [];
    for (let i = 0; i < Object.keys(ys).length; i++) {
        var trace = {};
        columnName = Object.keys(ys)[i];
        trace = createTrace(ys[columnName], chosenReferringCenter, columnName);
        if (trace.y[0]) {
            data.push(trace);
        }
    };
    var layout = {
        barmode: 'group',
        title: 'Data incompleteness per referring center',
        showlegend: true
    };
    Plotly.newPlot(element, data, layout);
};
unique_x = x.filter((v, i, a) => a.indexOf(v) === i);
setChart("MUMC+");

function updateOption() {
    setChart(this.value);
}
const parentObj = document.getElementsByClassName("visualization-renderer");
[...parentObj].forEach((parent, i) => {
    if (!document.getElementById('bespokeSelect')) {
        const selectElement = document.createElement('select');
        selectElement.className = 'bespokeSelect';
        selectElement.id = "bespokeSelect";
        selectElement.style = "background: rgb(255 255 255); display:block; width: 500px; z-index:10; visibility: visible";
        parent.appendChild(selectElement);
        for (let j = 0; j < unique_x.length; j++) {
            const childelement = document.createElement('option');
            childelement.text = childelement.value = unique_x[j];
            if (!unique_x[j].localeCompare("MUMC+")) {
                childelement.selected = true;
            }
            selectElement.add(childelement);
        }
    }
});
var rcSelector = document.getElementById('bespokeSelect');
rcSelector.onchange = updateOption;
