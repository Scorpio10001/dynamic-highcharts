document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart5", {
        "chart": {
            "type": "gauge",
            "backgroundColor": "#f4f4f4"
        },
        "title": {
            "text": "Mood Chart"
        },
        "pane": {
            "startAngle": -150,
            "endAngle": 150,
            "background": [{
                "backgroundColor": "#fff",
                "borderWidth": 0,
                "outerRadius": "100%"
            }]
        },
        "yAxis": {
            "min": 0,
            "max": 100,
            "tickPositions": [0, 50.0, 100],
            "labels": {
                "formatter": "function() { return this.value + '%'; }"
            },
            "plotBands": [{
                "from": 0,
                "to": 100,
                "color": "#FF5733"
            }]
        },
        "series": [{
            "name": "Mood",
            "data": [75],
            "dial": {
                "backgroundColor": "#333",
                "borderWidth": 0,
                "baseLength": "70%",
                "radius": "80%",
                "baseWidth": 5
            },
            "pivot": {
                "backgroundColor": "#333",
                "borderWidth": 0,
                "radius": 8
            },
            "tooltip": {
                "valueSuffix": " %"
            }
        }]
    });
});