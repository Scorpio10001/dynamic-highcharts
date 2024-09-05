Highcharts.chart('015', {
    "chart": {
        "type": "bar"
    },
    "title": {
        "text": "Gender Representation Across Districts bar graph"
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
                58,
                15
            ]
        },
        {
            "name": "Woman",
            "data": [
                43,
                10
            ]
        },
        {
            "name": "Unknown",
            "data": [
                36,
                22
            ]
        },
        {
            "name": "Cisgender Man/Male",
            "data": [
                1,
                0
            ]
        },
        {
            "name": "Cisgender Woman/Female",
            "data": [
                13,
                2
            ]
        },
        {
            "name": "'Other'",
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