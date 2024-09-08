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
            "council district",
            "school district"
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
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Max: {point.high}<br/>Top 25%: {point.q3}<br/>Middle Value: {point.median}<br/>Bottom 25%: {point.q1}<br/>Min: {point.low}"
            }
        }
    ]
});