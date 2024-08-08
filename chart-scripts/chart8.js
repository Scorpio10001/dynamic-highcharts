Highcharts.chart('chart8', {
    'chart': {
        'type': 'sankey',
        'marginRight': 100,
        'backgroundColor': '#FFEEAD'
    },
    'title': {
        'text': 'Degrees of relationships'
    },
    'series': [{
        'keys': ['from', 'to', 'weight'],
        'data': [
            ['Transactional', 'TA/ Coaching', 5],
                
            ['Transactional', 'Service Provision', 3],
                
            ['TA/ Coaching', 'Partnership', 2],
                
            ['Service Provision', 'Co-design', 1]
        ],
        'nodes': [{
            'name': 'Transactional'
        }, {
            'name': 'TA/ Coaching'
        }, {
            'name': 'Service Provision'
        }, {
            'name': 'Partnership'
        }, {
            'name': 'Co-design'
        }]
    }]
})