document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart5", {
        "chart": {
            "type": "gauge",
            "plotBackgroundColor": null,
            "plotBackgroundImage": null,
            "plotBorderWidth": 0,
            "plotShadow": false,
            "height": "100%"
        },
        "title": {
            "text": "Mood Chart",
            "style": {
                "fontSize": "24px"
            }
        },
        "pane": {
            "startAngle": -150,
            "endAngle": 150,
            "background": [{
                "backgroundColor": "#DDD",
                "borderWidth": 0,
                "outerRadius": "109%",
                "innerRadius": "107%"
            }]
        },
        "yAxis": {
            "min": 0,
            "max": 10,
            "lineWidth": 0,
            "tickPositions": [0, 25, 50, 75, 100, 125, 150, 175, 200],
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
                "step": 1,
                "rotation": "auto",
                "style": {
                    "fontSize": "14px"
                }
            },
            "title": {
                "text": "Mood",
                "y": 25,
                "style": {
                    "fontSize": "16px"
                }
            },
            "plotBands": [{
                "from": 7,
                "to": 10,
                "color": "#55BF3B"
            }, {
                "from": 4,
                "to": 6,
                "color": "#DDDF0D"
            }, {
                "from": 0,
                "to": 3,
                "color": "#DF5353"
            }]
        },
        "series": [{
            "name": "Mood",
            "data": [99],
            "tooltip": {
                "valueSuffix": ""
            },
            "dataLabels": {
                "format": "{y}",
                "borderWidth": 0,
                "style": {
                    "fontSize": "30px"
                }
            },
            "dial": {
                "radius": "80%",
                "backgroundColor": "gray",
                "baseWidth": 12,
                "baseLength": "0%",
                "rearLength": "0%"
            },
            "pivot": {
                "backgroundColor": "gray",
                "radius": 6
            }
        }]
    });
});