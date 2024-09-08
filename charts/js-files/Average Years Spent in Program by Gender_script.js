document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("019", {
        series: [{
            data: [
                ['Man',
                    0.7543859649122807
                ],
                
                ['Woman',
                    0.43859649122807015
                ]
            ],
            name: 'Years',
            color: '#3ABEF9',
            type: 'column'
        }],
        title: {
            text: 'Average Years Spent in Program by Gender'
        }
    }, );
});