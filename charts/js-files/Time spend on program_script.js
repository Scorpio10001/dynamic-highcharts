Highcharts.chart('011', {
    "chart": {
        "type": "columnrange",
        "inverted": true
    },
    "title": {
        "text": "Time spend on program"
    },
    "xAxis": {
        "categories": [
            "FLO-74764",
            "FLO-48815",
            "FLO-61050",
            "FLO-90333",
            "FLO-83768"
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
        "columnrange": {
            "dataLabels": {
                "enabled": true,
                "format": "{y}Y"
            },
            "color": "#3ABEF9"
        }
    },
    "series": [
        {
            "name": "Time spend on program",
            "data": [
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2015,
                    2024
                ]
            ],
            "color": "#3ABEF9"
        }
    ]
});