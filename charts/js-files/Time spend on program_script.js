Highcharts.chart('011', {
    "chart": {
        "type": "columnrange",
        "inverted": true,
        "events": {
            "load": "\n                        function () {\n                            var chart = this;\n                            var start = 0;\n                            var step = 5;\n                            var totalPoints = chart.series[0].data.length;\n\n                            function updateData() {\n                                var end = Math.min(start + step - 1, totalPoints - 1);\n                                chart.xAxis[0].setExtremes(start, end);\n                                start += step;\n                                if (start >= totalPoints) {\n                                    start = 0; // Restart or handle end of data\n                                }\n                            }\n\n                            // Add a button to control data update\n                            Highcharts.addEvent(Highcharts.DOMElement.create('button', {id: 'updateButton', innerHTML: 'Next'}), 'click', updateData);\n                        }\n                    "
        }
    },
    "title": {
        "text": "Time spend on program"
    },
    "xAxis": {
        "categories": [
            "FLO-70995",
            "FLO-62453",
            "FLO-08277",
            "FLO-54243",
            "FLO-80226"
        ],
        "title": {
            "text": "Categories"
        },
        "min": 0,
        "max": 4
    },
    "yAxis": {
        "title": {
            "text": "Values"
        }
    },
    "plotOptions": {
        "columnrange": {
            "dataLabels": {
                "enabled": true,
                "format": "{y}"
            },
            "color": "#3ABEF9"
        }
    },
    "series": [
        {
            "name": "Time spend on program",
            "data": [
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2019,
                    2024
                ]
            ],
            "color": "#3ABEF9"
        }
    ]
});