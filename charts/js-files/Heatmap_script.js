Highcharts.chart('019', {
    "chart": {
        "type": "heatmap"
    },
    "title": {
        "text": "Heatmap"
    },
    "xAxis": {
        "categories": [
            "A",
            "B",
            "C",
            "D",
            "E"
        ],
        "title": {
            "text": "Category"
        }
    },
    "yAxis": {
        "title": {
            "text": "Values"
        },
        "categories": [
            "Value1",
            "Value2",
            "Value3"
        ],
        "reversed": true
    },
    "colorAxis": {
        "minColor": "#FFFFFF",
        "maxColor": "#7cb5ec"
    },
    "series": [
        {
            "name": "Data",
            "data": [
                [
                    0,
                    0,
                    10.0
                ],
                [
                    0,
                    1,
                    20.0
                ],
                [
                    0,
                    2,
                    30.0
                ],
                [
                    1,
                    0,
                    15.0
                ],
                [
                    1,
                    1,
                    25.0
                ],
                [
                    1,
                    2,
                    35.0
                ],
                [
                    2,
                    0,
                    20.0
                ],
                [
                    2,
                    1,
                    30.0
                ],
                [
                    2,
                    2,
                    40.0
                ],
                [
                    3,
                    0,
                    25.0
                ],
                [
                    3,
                    1,
                    35.0
                ],
                [
                    3,
                    2,
                    45.0
                ],
                [
                    4,
                    0,
                    30.0
                ],
                [
                    4,
                    1,
                    40.0
                ],
                [
                    4,
                    2,
                    50.0
                ]
            ],
            "type": "heatmap"
        }
    ]
});