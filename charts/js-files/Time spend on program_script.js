document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("011", {
        series: [{
            data: [
                [2015.0,
                    9.0
                ],
                
                [2016.0,
                    8.0
                ],
                
                [2017.0,
                    7.0
                ],
                
                [2018.0,
                    6.0
                ],
                
                [2019.0,
                    4.916666666666667
                ],
                
                [2020.0,
                    4.0
                ],
                
                [2021.0,
                    3.0
                ],
                
                [2022.0,
                    2.0
                ],
                
                [2023.0,
                    1.0
                ],
                
                [2024.0,
                    0.0
                ]
            ],
            name: 'year_difference',
            color: '#3ABEF9',
            type: 'bar'
        }],
        title: {
            text: 'Time spend on program'
        }
    }, );
});