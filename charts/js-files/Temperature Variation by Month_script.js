Highcharts.chart('010', {
    "chart": {
        "type": "columnrange",
        "inverted": true
    },
    "title": {
        "text": "Temperature Variation by Month"
    },
    "xAxis": {
        "categories": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
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
                "format": "{y}'C"
            },
            "color": "#3ABEF9"
        }
    },
    "series": [
        {
            "name": "Temperature Variation by Month",
            "data": [
                [
                    -9.7,
                    9.4
                ],
                [
                    -8.7,
                    6.5
                ],
                [
                    -3.5,
                    9.4
                ],
                [
                    -1.4,
                    19.9
                ],
                [
                    0.0,
                    22.6
                ],
                [
                    2.9,
                    29.5
                ],
                [
                    9.2,
                    30.7
                ],
                [
                    7.3,
                    26.5
                ],
                [
                    4.4,
                    18.0
                ],
                [
                    -3.1,
                    11.4
                ],
                [
                    -5.2,
                    10.4
                ],
                [
                    -13.1,
                    5.4
                ]
            ],
            "color": "#3ABEF9"
        }
    ]
});