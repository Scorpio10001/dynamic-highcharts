document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart000", {
        "chart": {
            "type": "gauge",
            "plotBackgroundColor": null,
            "plotBackgroundImage": null,
            "plotBorderWidth": 0,
            "plotShadow": false,
            "height": "300px"
        },
        "title": {
            "text": "Mood Chart",
            "style": {
                "fontSize": "24px",
                "fontWeight": "bold",
                "color": "#333"
            }
        },
        "pane": {
            "startAngle": -90,
            "endAngle": 90,
            "background": null,
            "center": ["50%", "75%"],
            "size": "110%"
        },
        "yAxis": {
            "min": "Mood Chart",
            "max": 10,
            "lineWidth": 0,
            "minorTickInterval": 1,
            "minorTickWidth": 1,
            "minorTickLength": 5,
            "minorTickPosition": "inside",
            "minorTickColor": "#666",
            "tickPixelInterval": 30,
            "tickWidth": 2,
            "tickPosition": "inside",
            "tickLength": 10,
            "tickColor": "#666",
            "labels": {
                "step": 2,
                "distance": 20,
                "style": {
                    "fontSize": "14px",
                    "fontWeight": "bold"
                }
            },
            "title": {
                "text": "",
                "y": -40,
                "style": {
                    "fontSize": "16px",
                    "fontWeight": "bold"
                }
            },
            "plotBands": [{
                "from": 7,
                "to": 10,
                "color": "#55BF3B"
            }, {
                "from": 3,
                "to": 7,
                "color": "#DDDF0D"
            }, {
                "from": 0,
                "to": 3,
                "color": "#DF5353"
            }]
        },
        "series": [{
            "name": "Mood",
            "geocoding-data": [7],
            "tooltip": {
                "valueSuffix": " / 10"
            },
            "dataLabels": {
                "format": "{y}",
                "borderWidth": 0,
                "color": "#333",
                "style": {
                    "fontSize": "30px",
                    "fontWeight": "bold"
                },
                "y": 30
            },
            "dial": {
                "radius": "80%",
                "backgroundColor": "#333",
                "baseWidth": 12,
                "baseLength": "0%",
                "rearLength": "0%"
            },
            "pivot": {
                "backgroundColor": "#333",
                "radius": 6
            }
        }]
    });
});