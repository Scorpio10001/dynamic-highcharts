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
            "FLO-27261",
            "FLO-87014",
            "FLO-02426",
            "FLO-62786",
            "FLO-00795"
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
                    2024,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2018,
                    2024
                ]
            ],
            "color": "#3ABEF9"
        }
    ]
});