Highcharts.chart('013', {
    "chart": {
        "type": "pie"
    },
    "title": {
        "text": "Gender Diversity Overview"
    },
    "plotOptions": {
        "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
                "enabled": true,
                "format": "<b>{point.name}</b>: {point.percentage:.1f} %"
            },
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
        }
    },
    "series": [
        {
            "name": "Gender Diversity Overview",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Cisgender Woman/Female",
                    "y": 53
                },
                {
                    "name": "Cisgender Man/Male",
                    "y": 73
                },
                {
                    "name": "Unknown",
                    "y": 15
                },
                {
                    "name": "Man",
                    "y": 58
                },
                {
                    "name": "Woman",
                    "y": 57
                }
            ]
        }
    ]
});