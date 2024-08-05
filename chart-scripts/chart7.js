document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart7", {
        chart: {
            type: 'treemap'
        },
        series: [{
            data: [{
                "name": "Healthy: Q1: $50,000",
                "value": "20",
                "color": "#97BE5A"
            }, {
                "name": "Reacting: Q1: $30,000",
                "value": "12",
                "color": "#FFDE4D"
            }, {
                "name": "Injured: Q1: $10,000",
                "value": "4",
                "color": "#FF7F3E"
            }, {
                "name": "Ill: Q1: $5,000",
                "value": "2",
                "color": "#C80036"
            }, {
                "name": "Healthy: Q2: 60,000",
                "value": "24",
                "color": "#97BE5A"
            }, {
                "name": "Reacting: Q2: 25,000",
                "value": "10",
                "color": "#FFDE4D"
            }, {
                "name": "Injured: Q2: 15,000",
                "value": "6",
                "color": "#FF7F3E"
            }, {
                "name": "Ill: Q2: 8,000",
                "value": "3",
                "color": "#C80036"
            }, {
                "name": "Healthy: Q3: 55,000",
                "value": "22",
                "color": "#97BE5A"
            }, {
                "name": "Reacting: Q3: 35,000",
                "value": "14",
                "color": "#FFDE4D"
            }, {
                "name": "Injured: Q3: 20,000",
                "value": "8",
                "color": "#FF7F3E"
            }, {
                "name": "Ill: Q3: 10,000",
                "value": "4",
                "color": "#C80036"
            }, {
                "name": "Healthy: Q4: 65,000",
                "value": "26",
                "color": "#97BE5A"
            }, {
                "name": "Reacting: Q4: 40,000",
                "value": "16",
                "color": "#FFDE4D"
            }, {
                "name": "Injured: Q4: 25,000",
                "value": "10",
                "color": "#FF7F3E"
            }, {
                "name": "Ill: Q4: 12,000",
                "value": "5",
                "color": "#C80036"
            }]
        }],
        title: {
            text: 'Tree Map'
        },
        plotOptions: {
            treemap: {
                layoutAlgorithm: 'squarified'
            }
        },
        tooltip: {
            pointFormat: '<b>Tree Map</b><br/>Name: {point.name}<br/>Value: {point.value}<br/>'
        }
    });
});