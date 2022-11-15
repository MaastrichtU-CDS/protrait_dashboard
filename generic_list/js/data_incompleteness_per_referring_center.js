// Available variables are x, ys, element, and Plotly
// Type console.log(x, ys); for more info about x and ys
// To plot your graph call Plotly.plot(element, ...)
// Plotly examples and docs: https://plot.ly/javascript/
ts_hist = {};
ts_hist_1 = [];
tumour_data = ys.tumour_site.map(function(e, i) {
    return [e, ys.referred_by[i]];
});
tumour_data.map(function(a) {
    if (a[0] == '' && a[1] == "MUMC+") ts_hist_1.push(a[1])
});
ts_hist_1.map(function(a) {
    if (a in ts_hist) ts_hist[a]++;
    else ts_hist[a] = 1;
});

previous_ts_hist = {};
previous_ts_hist_1 = [];
prev_ts_data = ys.previous_tumour_site.map(function(e, i) {
    return [e, ys.referred_by[i]];
});
prev_ts_data.map(function(a) {
    if (a[0] == '' && a[1] == "MUMC+" ) previous_ts_hist_1.push(a[1])
});
previous_ts_hist_1.map(function(a) {
    if (a in previous_ts_hist) previous_ts_hist[a]++;
    else previous_ts_hist[a] = 1;
});

alc_per_day = {};
alc_per_day_1 = [];
alc_per_day_data = ys.alcohol_per_day.map(function(e, i) {
    return [e, ys.referred_by[i]];
});
alc_per_day_data.map(function(a) {
    if (a[0] == '' && a[1] == "MUMC+" ) alc_per_day_1.push(a[1])
});
alc_per_day_1.map(function(a) {
    if (a in alc_per_day) alc_per_day[a]++;
    else alc_per_day[a] = 1;
});

previous_neoplasm = {};
previous_neoplasm_1 = [];
previous_neoplasm_data = ys.previous_neoplasm.map(function(e, i) {
    return [e, ys.referred_by[i]];
});
previous_neoplasm_data.map(function(a) {
    if (a[0] == '' && a[1] == "MUMC+" ) previous_neoplasm_1.push(a[1])
});
previous_neoplasm_1.map(function(a) {
    if (a in previous_neoplasm) previous_neoplasm[a]++;
    else previous_neoplasm[a] = 1;
});

previous_radiotherapy = {};
previous_radiotherapy_1 = [];
previous_radiotherapy_data = ys.previous_radiotherapy.map(function(e, i) {
    return [e, ys.referred_by[i]];
});
previous_radiotherapy_data.map(function(a) {
    if (a[0] == '' && a[1] == "MUMC+" ) previous_radiotherapy_1.push(a[1])
});
previous_radiotherapy_1.map(function(a) {
    if (a in previous_radiotherapy) previous_radiotherapy[a]++;
    else previous_radiotherapy[a] = 1;
});

previous_date_of_diag = {};
previous_date_of_diag_1 = [];
previous_date_of_diag_data = ys.previous_date_of_diagnosis.map(function(e, i) {
    return [e, ys.referred_by[i]];
});
previous_date_of_diag_data.map(function(a) {
    if (a[0] == '' && a[1] == "MUMC+" ) previous_date_of_diag_1.push(a[1])
});
previous_date_of_diag_1.map(function(a) {
    if (a in previous_date_of_diag) previous_date_of_diag[a]++;
    else previous_date_of_diag[a] = 1;
});

var trace1 = {
    x: Object.keys(ts_hist),
    y: Object.values(ts_hist),
    name: 'Tumour Site',
    type: 'bar'
};
var trace2 = {
    x: Object.keys(previous_ts_hist),
    y: Object.values(previous_ts_hist),
    name: 'Previous tumour Site',
    type: 'bar'
};
var trace3 = {
    x: Object.keys(alc_per_day),
    y: Object.values(alc_per_day),
    name: 'Alcohol per day',
    type: 'bar'
};
var trace4 = {
    x: Object.keys(previous_neoplasm),
    y: Object.values(previous_neoplasm),
    name: 'Previous neoplasm',
    type: 'bar'
};
var trace5 = {
    x: Object.keys(previous_radiotherapy),
    y: Object.values(previous_radiotherapy),
    name: 'Previous raditherapy',
    type: 'bar'
};
var trace6 = {
    x: Object.keys(previous_date_of_diag),
    y: Object.values(previous_date_of_diag),
    name: 'Previous date of diagnosis',
    type: 'bar'
};
var data = [trace1, trace2, trace3, trace4, trace5, trace6];
var layout = {
     barmode: 'group',
     title: 'Data incompleteness per referring center',
showlegend: true,
xaxis: {
tickangle: -45
}
}
Plotly.newPlot(element, data, layout);
