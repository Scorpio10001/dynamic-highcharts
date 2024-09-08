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
        "labels": {
            "format": "{value}"
        }
    },
    "colorAxis": {
        "minColor": "#FFFFFF",
        "maxColor": "#7cb5ec"
    },
    "tooltip": {
        "formatter": "function() { return '<b>' + this.series.name + '</b><br/>' + this.point.x + ', ' + this.point.y + ': ' + this.point.value; }"
    },
    "series": [
        {
            "name": "Value1",
            "data": [
                [
                    "A",
                    10
                ],
                [
                    "B",
                    15
                ],
                [
                    "C",
                    20
                ],
                [
                    "D",
                    25
                ],
                [
                    "E",
                    30
                ]
            ],
            "type": "heatmap",
            "color": "#7cb5ec"
        },
        {
            "name": "Value2",
            "data": [
                [
                    "A",
                    20
                ],
                [
                    "B",
                    25
                ],
                [
                    "C",
                    30
                ],
                [
                    "D",
                    35
                ],
                [
                    "E",
                    40
                ]
            ],
            "type": "heatmap",
            "color": "#7cb5ec"
        },
        {
            "name": "Value3",
            "data": [
                [
                    "A",
                    30
                ],
                [
                    "B",
                    35
                ],
                [
                    "C",
                    40
                ],
                [
                    "D",
                    45
                ],
                [
                    "E",
                    50
                ]
            ],
            "type": "heatmap",
            "color": "#7cb5ec"
        }
    ]
});