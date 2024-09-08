Highcharts.chart('007', {
    "chart": {
        "type": "gauge"
    },
    "pane": {
        "startAngle": -90,
        "endAngle": 90
    },
    "yAxis": {
        "min": 0,
        "max": 10,
        "title": {
            "text": "Mood Chart"
        }
    },
    "series": [
        {
            "name": "Mood Chart",
            "data": [
                7
            ],
            "tooltip": {
                "valueSuffix": " %"
            }
        }
    ]
});