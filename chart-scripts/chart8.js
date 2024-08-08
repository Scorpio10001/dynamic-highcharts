Highcharts.chart('chart8', {
    'chart': {
        'type': 'sankey',
        'marginRight': 100,
        'backgroundColor': '#FFFFFF'
    },
    'title': {
        'text': 'Degrees of relationships'
    },
    'series': [{
        'keys': ['from', 'to', 'weight'],
        'data': [
            ['Transactional', 'TA / Coaching', 5],
                
            ['TA / Coaching', 'Service Provision', 10],
                
            ['Service Provision', 'Partnership', 15],
                
            ['Partnership', 'Co-design', 25]
        ],
        'nodes': [{
            'name': 'Transactional'
        }, {
            'name': 'TA / Coaching'
        }, {
            'name': 'Service Provision'
        }, {
            'name': 'Partnership'
        }, {
            'name': 'Co-design'
        }]
    }]
})