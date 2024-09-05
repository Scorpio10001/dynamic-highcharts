Highcharts.chart('016', {
    "chart": {
        "type": "boxplot"
    },
    "title": {
        "text": "Household Income by District"
    },
    "xAxis": {
        "categories": [
            "District A",
            "District B",
            "District C"
        ],
        "title": {
            "text": "Categories"
        }
    },
    "yAxis": {
        "title": {
            "text": "Values"
        },
        "plotLines": [
            {
                "color": "#3ABEF9",
                "dashStyle": "shortdash",
                "value": 0,
                "width": 2
            }
        ]
    },
    "series": [
        {
            "name": "District A",
            "data": [
                [
                    15000,
                    20000,
                    25000,
                    30000,
                    35000
                ],
                [
                    16000,
                    21000,
                    26000,
                    31000,
                    36000
                ]
            ]
        },
        {
            "name": "District B",
            "data": [
                [
                    18000,
                    23000,
                    28000,
                    33000,
                    38000
                ],
                [
                    19000,
                    24000,
                    29000,
                    34000,
                    39000
                ]
            ]
        },
        {
            "name": "District C",
            "data": [
                [
                    20000,
                    25000,
                    30000,
                    35000,
                    40000
                ],
                [
                    21000,
                    26000,
                    31000,
                    36000,
                    41000
                ]
            ]
        }
    ]
});