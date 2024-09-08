Highcharts.chart('011', {
    "chart": {
        "type": "area"
    },
    "title": {
        "text": "Time spend on program"
    },
    "xAxis": {
        "categories": [
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
            2022,
            2023,
            2024
        ]
    },
    "yAxis": {
        "title": {
            "text": "Values"
        }
    },
    "tooltip": {
        "shared": true
    },
    "plotOptions": {
        "area": {
            "stacking": "normal",
            "lineColor": "#666666",
            "lineWidth": 1,
            "marker": {
                "lineWidth": 1,
                "lineColor": "#666666"
            }
        }
    },
    "series": [
        {
            "name": "entry_count",
            "data": [
                60,
                13,
                14,
                10,
                12,
                7,
                14,
                15,
                32,
                112
            ],
            "color": "#3ABEF9",
            "type": "area",
            "fillOpacity": 0.6
        },
        {
            "name": "exit_count",
            "data": [
                NaN,
                NaN,
                NaN,
                NaN,
                NaN,
                NaN,
                NaN,
                NaN,
                1.0,
                288.0
            ],
            "color": "#F39C12",
            "type": "area",
            "fillOpacity": 0.6
        }
    ]
});