document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart5", {
        "chart": {
            "type": "gauge"
        },
        "title": {
            "text": "Mood Chart"
        },
        "pane": {
            "startAngle": -150,
            "endAngle": 150,
            "background": [{
                "backgroundColor": {
                    "linearGradient": {
                        "x1": 0,
                        "y1": 0,
                        "x2": 0,
                        "y2": 1
                    },
                    "stops": [
                        [0, "#FFF"],
                
                        [1, "#333"]
                    ]
                },
                "borderWidth": 0,
                "outerRadius": "109%"
            }, {
                "backgroundColor": {
                    "linearGradient": {
                        "x1": 0,
                        "y1": 0,
                        "x2": 0,
                        "y2": 1
                    },
                    "stops": [
                        [0, "#333"],
                
                        [1, "#FFF"]
                    ]
                },
                "borderWidth": 1,
                "outerRadius": "107%"
            }, {}, {
                "backgroundColor": "#DDD",
                "borderWidth": 0,
                "outerRadius": "105%",
                "innerRadius": "103%"
            }]
        },
        "yAxis": {
            "min": 0,
            "max": 100,
            "minorTickInterval": "auto",
            "minorTickWidth": 1,
            "minorTickLength": 10,
            "minorTickPosition": "inside",
            "minorTickColor": "#666",
            "tickPixelInterval": 30,
            "tickWidth": 2,
            "tickPosition": "inside",
            "tickLength": 10,
            "tickColor": "#666",
            "labels": {
                "step": 2,
                "rotation": "auto"
            },
            "title": {
                "text": "Mood"
            },
            "plotBands": [{
                "from": 0,
                "to": 33.333333333333336,
                "color": "#DF5353"
            }, {
                "from": 33.333333333333336,
                "to": 66.66666666666667,
                "color": "#DDDF0D"
            }, {
                "from": 66.66666666666667,
                "to": 100,
                "color": "#55BF3B"
            }]
        },
        "series": [{
            "name": "Mood",
            "data": [75],
            "tooltip": {
                "valueSuffix": " %"
            }
        }]
    });
});