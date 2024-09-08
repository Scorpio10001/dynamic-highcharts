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
            "name": "Percentage of districts",
            "colorByPoint": true,
            "data": [
                {
                    "name": "school_district",
                    "y": 63
                },
                {
                    "name": "council_district",
                    "y": 226
                }
            ]
        }
    ]
});