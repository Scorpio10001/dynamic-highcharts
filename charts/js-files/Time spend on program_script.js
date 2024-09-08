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
            "FLO-27982",
            "FLO-55491",
            "FLO-91783",
            "FLO-40203",
            "FLO-47946"
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
                "format": "{y}"
            },
            "color": "#3ABEF9"
        }
    },
    "series": [
        {
            "name": "Time spend on program",
            "data": [
                [
                    2024,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2021,
                    2024
                ]
            ],
            "color": "#3ABEF9"
        }
    ]
});