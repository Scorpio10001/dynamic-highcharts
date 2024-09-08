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
            "fillColor": "#3ABEF9",
            "lineWidth": 2,
            "medianColor": "#0C5DA5",
            "medianWidth": 3,
            "stemColor": "#A63400",
            "stemDashStyle": "dot",
            "stemWidth": 1,
            "whiskerColor": "#3D9200",
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
                "headerFormat": "<em>Category {point.key}</em><br/>"
            }
        }
    ]
});