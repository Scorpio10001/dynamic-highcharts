document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart7", {
        chart: {
            type: 'treemap'
        },
        series: [{
            data: [{
                "name": "Healthy: Project 001",
                "value": 500000,
                "color": "#00FF00"
            }, {
                "name": "Healthy: Project 002",
                "value": 750000,
                "color": "#00FF00"
            }, {
                "name": "Healthy: Project 003",
                "value": 250000,
                "color": "#00FF00"
            }, {
                "name": "Healthy: Project 004",
                "value": 400000,
                "color": "#00FF00"
            }, {
                "name": "Healthy: Project 005",
                "value": 600000,
                "color": "#00FF00"
            }, {
                "name": "Reacting: Project 006",
                "value": 200000,
                "color": "#FFFF00"
            }, {
                "name": "Reacting: Project 007",
                "value": 300000,
                "color": "#FFFF00"
            }, {
                "name": "Reacting: Project 008",
                "value": 150000,
                "color": "#FFFF00"
            }, {
                "name": "Reacting: Project 009",
                "value": 250000,
                "color": "#FFFF00"
            }, {
                "name": "Reacting: Project 010",
                "value": 100000,
                "color": "#FFFF00"
            }, {
                "name": "Injured: Project 011",
                "value": 50000,
                "color": "#FFA500"
            }, {
                "name": "Injured: Project 012",
                "value": 75000,
                "color": "#FFA500"
            }, {
                "name": "Injured: Project 013",
                "value": 100000,
                "color": "#FFA500"
            }, {
                "name": "Injured: Project 014",
                "value": 80000,
                "color": "#FFA500"
            }, {
                "name": "Injured: Project 015",
                "value": 90000,
                "color": "#FFA500"
            }, {
                "name": "Ill: Project 016",
                "value": 30000,
                "color": "#FF0000"
            }, {
                "name": "Ill: Project 017",
                "value": 25000,
                "color": "#FF0000"
            }, {
                "name": "Ill: Project 018",
                "value": 20000,
                "color": "#FF0000"
            }, {
                "name": "Ill: Project 019",
                "value": 35000,
                "color": "#FF0000"
            }, {
                "name": "Ill: Project 020",
                "value": 40000,
                "color": "#FF0000"
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