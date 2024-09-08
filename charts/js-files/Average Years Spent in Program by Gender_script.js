document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("019", {
        series: [{
            data: [
                ['Man',
                    1.0175438596491229
                ],
                
                ['Woman',
                    0.6842105263157895
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