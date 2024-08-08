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
            ['Initial Contact', 'Transactional', 15],
                
            ['Transactional', 'TA / Coaching', 10],
                
            ['TA / Coaching', 'Service Provision', 8],
                
            ['Service Provision', 'Partnership', 6],
                
            ['Partnership', 'Co-design', 4],
                
            ['Co-design', 'Strategic Alliance', 2],
                
            ['Strategic Alliance', 'Innovation Hub', 1]
        ],
        'nodes': [{
            'name': 'Initial Contact'
        }, {
            'name': 'Transactional'
        }, {
            'name': 'TA / Coaching'
        }, {
            'name': 'Service Provision'
        }, {
            'name': 'Partnership'
        }, {
            'name': 'Co-design'
        }, {
            'name': 'Strategic Alliance'
        }, {
            'name': 'Innovation Hub'
        }]
    }]
})