Highcharts.chart('014', {
    "chart": {
        "type": "column"
    },
    "title": {
        "text": "Gender Representation Across Districts column graph"
    },
    "xAxis": {
        "categories": [
            "Urban",
            "Rural"
        ],
        "title": {
            "text": null
        }
    },
    "yAxis": {
        "min": 0,
        "title": {
            "text": "Gender",
            "align": "high"
        },
        "labels": {
            "overflow": "justify"
        }
    },
    "plotOptions": {
        "bar": {
            "stacking": "normal",
            "dataLabels": {
                "enabled": false
            }
        }
    },
    "legend": {
        "reversed": true
    },
    "series": [
        {
            "name": "Male",
            "data": [
                120,
                150
            ]
        },
        {
            "name": "Female",
            "data": [
                100,
                90
            ]
        },
        {
            "name": "Non-binary",
            "data": [
                30,
                25
            ]
        },
        {
            "name": "Transgender",
            "data": [
                20,
                15
            ]
        },
        {
            "name": "Other",
            "data": [
                10,
                5
            ]
        }
    ],
    "colors": [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
        "#e377c2",
        "#7f7f7f",
        "#bcbd22",
        "#17becf"
    ]
});