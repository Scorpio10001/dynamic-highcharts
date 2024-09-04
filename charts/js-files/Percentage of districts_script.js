Highcharts.chart('009', {
    "chart": {
        "type": "pie"
    },
    "title": {
        "text": "Percentage of districts"
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
            "name": "Percentage of districts",
            "colorByPoint": true,
            "data": [
                {
                    "name": "Category A",
                    "y": 30
                },
                {
                    "name": "Category B",
                    "y": 20
                },
                {
                    "name": "Category C",
                    "y": 50
                }
            ]
        }
    ]
});