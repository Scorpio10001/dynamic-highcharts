document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("014", {
        plotOptions: {
            series: {
                stacking: 'normal',
                type: 'series'
            }
        },
        series: [{
            data: [
                ['Urban',
                    120
                ],
                
                ['Urban',
                    100
                ],
                
                ['Urban',
                    30
                ],
                
                ['Urban',
                    20
                ],
                
                ['Urban',
                    10
                ],
                
                ['Rural',
                    150
                ],
                
                ['Rural',
                    90
                ],
                
                ['Rural',
                    25
                ],
                
                ['Rural',
                    15
                ],
                
                ['Rural',
                    5
                ]
            ],
            name: 'Number',
            color: '#3ABEF9',
            type: 'bar'
        }],
        title: {
            text: 'Gender Representation Across Districts'
        }
    }, );
});