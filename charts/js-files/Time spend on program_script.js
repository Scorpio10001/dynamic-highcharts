Highcharts.chart('011', {
    "chart": {
        "type": "boxplot"
    },
    "title": {
        "text": "Time spend on program"
    },
    "xAxis": {
        "categories": [],
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
            "name": "Time spend on program",
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