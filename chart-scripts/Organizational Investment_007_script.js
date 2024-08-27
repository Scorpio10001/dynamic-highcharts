
document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart007", {
        chart: {
            type: 'treemap'
        },
        series: [{
            data: [{"type": "Healthy", "num": "50,000", "name": "Q1", "value": 20, "color": "#97BE5A"}, {"type": "Reacting", "num": "30,000", "name": "Q1", "value": 12, "color": "#FFDE4D"}, {"type": "Injured", "num": "10,000", "name": "Q1", "value": 4, "color": "#FF7F3E"}, {"type": "Ill", "num": "5000", "name": "Q1", "value": 2, "color": "#C80036"}, {"type": "Healthy", "num": "60,000", "name": "Q2", "value": 24, "color": "#97BE5A"}, {"type": "Reacting", "num": "25,000", "name": "Q2", "value": 10, "color": "#FFDE4D"}, {"type": "Injured", "num": "15,000", "name": "Q2", "value": 6, "color": "#FF7F3E"}, {"type": "Ill", "num": "8,000", "name": "Q2", "value": 3, "color": "#C80036"}, {"type": "Healthy", "num": "55,000", "name": "Q3", "value": 22, "color": "#97BE5A"}, {"type": "Reacting", "num": "35,000", "name": "Q3", "value": 14, "color": "#FFDE4D"}, {"type": "Injured", "num": "20,000", "name": "Q3", "value": 8, "color": "#FF7F3E"}, {"type": "Ill", "num": "10,000", "name": "Q3", "value": 4, "color": "#C80036"}, {"type": "Healthy", "num": "65,000", "name": "Q4", "value": 26, "color": "#97BE5A"}, {"type": "Reacting", "num": "40,000", "name": "Q4", "value": 16, "color": "#FFDE4D"}, {"type": "Injured", "num": "25,000", "name": "Q4", "value": 10, "color": "#FF7F3E"}, {"type": "Ill", "num": "12,000", "name": "Q4", "value": 5, "color": "#C80036"}]
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
            pointFormat: '<b>CONDITION: {point.type}</b><br/>INVESTED: ${point.num}<br/>% of Budget: {point.value}%<br/>'
        }
    });
});
