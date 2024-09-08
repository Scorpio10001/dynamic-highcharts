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
                    10
                ],
                [
                    0,
                    1,
                    20
                ],
                [
                    0,
                    2,
                    30
                ],
                [
                    1,
                    0,
                    15
                ],
                [
                    1,
                    1,
                    25
                ],
                [
                    1,
                    2,
                    35
                ],
                [
                    2,
                    0,
                    20
                ],
                [
                    2,
                    1,
                    30
                ],
                [
                    2,
                    2,
                    40
                ],
                [
                    3,
                    0,
                    25
                ],
                [
                    3,
                    1,
                    35
                ],
                [
                    3,
                    2,
                    45
                ],
                [
                    4,
                    0,
                    30
                ],
                [
                    4,
                    1,
                    40
                ],
                [
                    4,
                    2,
                    50
                ]
            ],
            "type": "heatmap"
        }
    ]
});