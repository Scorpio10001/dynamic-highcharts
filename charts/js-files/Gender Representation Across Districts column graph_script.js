Highcharts.chart('014', {
    "chart": {
        "type": "column"
    },
    "title": {
        "text": "Gender Representation Across Districts column graph"
    },
    "xAxis": {
        "categories": [
            "council district",
            "school district"
        ],
        "title": {
            "text": null
        }
    },
    "yAxis": {
        "min": 0,
        "title": {
            "text": "Gender count",
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
            "name": "Man",
            "data": [
                35,
                22
            ]
        },
        {
            "name": "Transgender",
            "data": [
                1,
                0
            ]
        },
        {
            "name": "Unknown",
            "data": [
                2,
                0
            ]
        },
        {
            "name": "Woman",
            "data": [
                49,
                8
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