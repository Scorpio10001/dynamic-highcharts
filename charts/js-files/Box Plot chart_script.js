Highcharts.chart('012', {
    "chart": {
        "type": "boxplot"
    },
    "title": {
        "text": "Box Plot chart"
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
        },
        "plotLines": [
            {
                "color": "red",
                "dashStyle": "shortdash",
                "value": 0,
                "width": 2
            }
        ]
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
            "color": "#3ABEF9",
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Median: {point.median}<br/>Upper quartile: {point.q3}<br/>Lower quartile: {point.q1}<br/>Maximum: {point.high}<br/>Minimum: {point.low}"
            }
        }
    ]
});