Highcharts.chart('016', {
    "chart": {
        "type": "boxplot"
    },
    "title": {
        "text": "Household Income by District"
    },
    "legend": {
        "enabled": false
    },
    "xAxis": {
        "categories": [
            "school district",
            "council district"
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
            "name": "Household Income by District",
            "data": [
                [
                    4999.0,
                    4999.0,
                    34999.0,
                    64999.0,
                    100000.0
                ],
                [
                    4999.0,
                    4999.0,
                    9999.0,
                    34999.0,
                    94999.0
                ]
            ],
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>"
            }
        }
    ]
});