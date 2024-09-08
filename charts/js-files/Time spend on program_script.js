document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("011", {
        series: [{
            data: [
                ['FLO-64494',
                    0
                ],
                
                ['FLO-62566',
                    9
                ],
                
                ['FLO-01347',
                    1
                ],
                
                ['FLO-33030',
                    0
                ],
                
                ['FLO-61124',
                    1
                ]
            ],
            name: 'Years',
            color: '#3ABEF9',
            type: 'column'
        }],
        title: {
            text: 'Time spend on program'
        }
    }, );
});