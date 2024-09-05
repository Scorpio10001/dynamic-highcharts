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
                    120.0
                ],
                
                ['Rural',
                    150.0
                ]
            ],
            name: 'Male',
            color: '#3ABEF9',
            type: 'bar'
        }, {
            data: [
                ['Urban',
                    100.0
                ],
                
                ['Rural',
                    90.0
                ]
            ],
            name: 'Female',
            color: '#3ABEF9',
            type: 'bar'
        }, {
            data: [
                ['Urban',
                    30.0
                ],
                
                ['Rural',
                    25.0
                ]
            ],
            name: 'Non-binary',
            color: '#3ABEF9',
            type: 'bar'
        }, {
            data: [
                ['Urban',
                    20.0
                ],
                
                ['Rural',
                    15.0
                ]
            ],
            name: 'Transgender',
            color: '#3ABEF9',
            type: 'bar'
        }, {
            data: [
                ['Urban',
                    10.0
                ],
                
                ['Rural',
                    5.0
                ]
            ],
            name: 'Other',
            color: '#3ABEF9',
            type: 'bar'
        }],
        title: {
            text: 'Gender Representation Across Districts'
        }
    }, );
});