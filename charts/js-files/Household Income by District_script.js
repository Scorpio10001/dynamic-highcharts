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
            "data": "District A",
            "color": "#3ABEF9",
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Median: {point.median}<br/>Upper quartile: {point.q3}<br/>Lower quartile: {point.q1}<br/>Maximum: {point.high}<br/>Minimum: {point.low}"
            }
        },
        {
            "name": "District B",
            "data": "District B",
            "color": "#3ABEF9",
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Median: {point.median}<br/>Upper quartile: {point.q3}<br/>Lower quartile: {point.q1}<br/>Maximum: {point.high}<br/>Minimum: {point.low}"
            }
        },
        {
            "name": "District C",
            "data": "District C",
            "color": "#3ABEF9",
            "tooltip": {
                "headerFormat": "<em>Category {point.key}</em><br/>",
                "pointFormat": "Median: {point.median}<br/>Upper quartile: {point.q3}<br/>Lower quartile: {point.q1}<br/>Maximum: {point.high}<br/>Minimum: {point.low}"
            }
        }
    ]
});