Highcharts.chart('020', {
    "chart": {
        "type": "heatmap"
    },
    "title": {
        "text": "Correlation Heatmap"
    },
    "xAxis": {
        "categories": [
            "0",
            "1",
            "2",
            "3"
        ],
        "title": {
            "text": "x"
        }
    },
    "yAxis": {
        "title": {
            "text": "y"
        },
        "categories": [
            "y",
            "value"
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
                    0.0
                ],
                [
                    0,
                    1,
                    1.0
                ],
                [
                    1,
                    0,
                    0.0
                ],
                [
                    1,
                    1,
                    0.1659640914222402
                ],
                [
                    2,
                    0,
                    0.0
                ],
                [
                    2,
                    1,
                    -0.1518293874054343
                ],
                [
                    3,
                    0,
                    0.0
                ],
                [
                    3,
                    1,
                    -0.16319997167724876
                ]
            ],
            "type": "heatmap"
        }
    ]
});