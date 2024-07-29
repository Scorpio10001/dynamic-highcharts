Highcharts.chart('container', {
    title: {
        text: 'Degrees of Relationship'
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
            ['Transactional', 'TA / Coaching', 1],
            ['TA / Coaching', 'Service Provision', 1],
            ['Service Provision', 'Partnership', 1],
            ['Partnership', 'Co-design', 1]
        ],
        type: 'sankey',
        name: 'Relationship flow'
    }]
});
