document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart7", {
        chart: {
            type: 'treemap'
        },
        series: [{
            data: [{
                "type": "Healthy",
                "name": "Q1: $50,000: 20%",
                "value": 20,
                "color": "#97BE5A"
            }, {
                "type": "Reacting",
                "name": "Q1: $30,000: 12%",
                "value": 12,
                "color": "#FFDE4D"
            }, {
                "type": "Injured",
                "name": "Q1: $10,000: 4%",
                "value": 4,
                "color": "#FF7F3E"
            }, {
                "type": "Ill",
                "name": "Q1: $5000: 2%",
                "value": 2,
                "color": "#C80036"
            }, {
                "type": "Healthy",
                "name": "Q2: $60,000: 24%",
                "value": 24,
                "color": "#97BE5A"
            }, {
                "type": "Reacting",
                "name": "Q2: $25,000: 10%",
                "value": 10,
                "color": "#FFDE4D"
            }, {
                "type": "Injured",
                "name": "Q2: $15,000: 6%",
                "value": 6,
                "color": "#FF7F3E"
            }, {
                "type": "Ill",
                "name": "Q2: $8,000: 3%",
                "value": 3,
                "color": "#C80036"
            }, {
                "type": "Healthy",
                "name": "Q3: $55,000: 22%",
                "value": 22,
                "color": "#97BE5A"
            }, {
                "type": "Reacting",
                "name": "Q3: $35,000: 14%",
                "value": 14,
                "color": "#FFDE4D"
            }, {
                "type": "Injured",
                "name": "Q3: $20,000: 8%",
                "value": 8,
                "color": "#FF7F3E"
            }, {
                "type": "Ill",
                "name": "Q3: $10,000: 4%",
                "value": 4,
                "color": "#C80036"
            }, {
                "type": "Healthy",
                "name": "Q4: $65,000: 26%",
                "value": 26,
                "color": "#97BE5A"
            }, {
                "type": "Reacting",
                "name": "Q4: $40,000: 16%",
                "value": 16,
                "color": "#FFDE4D"
            }, {
                "type": "Injured",
                "name": "Q4: $25,000: 10%",
                "value": 10,
                "color": "#FF7F3E"
            }, {
                "type": "Ill",
                "name": "Q4: $12,000: 5%",
                "value": 5,
                "color": "#C80036"
            }]
        }],
        title: {
            text: 'Organizational Investment'
        },
        plotOptions: {
            treemap: {
                layoutAlgorithm: 'squarified'
            }
        },
        tooltip: {
            pointFormat: '<b>Organizational Investment</b><br/>Name: {point.type}<br/>Value: {point.value}<br/>'
        }
    });
});