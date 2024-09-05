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
                "color": "red",
                "dashStyle": "shortdash",
                "value": 0,
                "width": 2
            }
        ]
    },
    "series": [
        {
            "name": "District A",
            "data": {
                "name": "District A",
                "data": [
                    [
                        20000,
                        25000,
                        30000,
                        35000,
                        40000
                    ],
                    [
                        15000,
                        25000,
                        30000,
                        37000,
                        42000
                    ],
                    [
                        18000,
                        26000,
                        31000,
                        34000,
                        38000
                    ]
                ]
            },
            "color": "#3ABEF9",
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Median: {point.median}<br/>Upper quartile: {point.q3}<br/>Lower quartile: {point.q1}<br/>Maximum: {point.high}<br/>Minimum: {point.low}"
            }
        },
        {
            "name": "District B",
            "data": {
                "name": "District B",
                "data": [
                    [
                        22000,
                        27000,
                        32000,
                        37000,
                        42000
                    ],
                    [
                        21000,
                        26000,
                        31000,
                        36000,
                        41000
                    ],
                    [
                        23000,
                        28000,
                        33000,
                        38000,
                        43000
                    ]
                ]
            },
            "color": "#3ABEF9",
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Median: {point.median}<br/>Upper quartile: {point.q3}<br/>Lower quartile: {point.q1}<br/>Maximum: {point.high}<br/>Minimum: {point.low}"
            }
        },
        {
            "name": "District C",
            "data": {
                "name": "District C",
                "data": [
                    [
                        25000,
                        30000,
                        35000,
                        40000,
                        45000
                    ],
                    [
                        24000,
                        29000,
                        34000,
                        39000,
                        44000
                    ],
                    [
                        26000,
                        31000,
                        36000,
                        41000,
                        46000
                    ]
                ]
            },
            "color": "#3ABEF9",
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Median: {point.median}<br/>Upper quartile: {point.q3}<br/>Lower quartile: {point.q1}<br/>Maximum: {point.high}<br/>Minimum: {point.low}"
            }
        }
    ]
});