Highcharts.chart('019', {
    "chart": {
        "type": "column"
    },
    "title": {
        "text": "Average Years Spent in Program by Gender"
    },
    "xAxis": {
        "categories": [
            "Man",
            "Woman"
        ],
        "title": {
            "text": null
        }
    },
    "yAxis": {
        "min": 0,
        "title": {
            "text": "Years",
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
            "name": "Years",
            "data": [
                1.0175438596491229,
                0.6842105263157895
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