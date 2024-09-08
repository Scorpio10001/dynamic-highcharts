Highcharts.chart('012', {
    "chart": {
        "type": "boxplot"
    },
    "title": {
        "text": "Box Plot chart"
    },
    "legend": {
        "enabled": false
    },
    "xAxis": {
        "categories": [
            "Group A",
            "Group B",
            "Group C"
        ],
        "title": {
            "text": "Categories"
        }
    },
    "yAxis": {
        "title": {
            "text": "Values"
        }
    },
    "plotOptions": {
        "boxplot": {
            "fillColor": "#2D9CDB",
            "lineWidth": 2,
            "medianColor": "#FF6F61",
            "medianWidth": 3,
            "stemColor": "#A63400",
            "stemDashStyle": "dot",
            "stemWidth": 1,
            "whiskerColor": "#2C3E50",
            "whiskerLength": "80%",
            "whiskerWidth": 3
        }
    },
    "series": [
        {
            "name": "Box Plot chart",
            "data": [
                [
                    1,
                    4,
                    6,
                    8,
                    10
                ],
                [
                    2,
                    5,
                    7,
                    9,
                    11
                ],
                [
                    3,
                    6,
                    8,
                    10,
                    12
                ]
            ],
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Max: {point.high}<br/>Top 25%: {point.q3}<br/>Middle Value: {point.median}<br/>Bottom 25%: {point.q1}<br/>Min: {point.low}"
            }
        }
    ]
});