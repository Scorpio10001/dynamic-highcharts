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
                "#FF5733",
                "#33FF57",
                "#3357FF",
                "#FF33A1"
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