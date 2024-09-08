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
            "FLO-38046",
            "FLO-34661",
            "FLO-52006",
            "FLO-40203",
            "FLO-95917"
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
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2023,
                    2024
                ]
            ],
            "color": "#3ABEF9"
        }
    ]
});