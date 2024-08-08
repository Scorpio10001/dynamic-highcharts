Highcharts.chart('chart8', {
    'chart': {
        'type': 'sankey',
        'marginRight': 100,
        'backgroundColor': '#3ABEF9'
    },
    'title': {
        'text': 'Sankey Chart'
    },
    'series': [{
        'keys': ['from', 'to', 'weight'],
        'data': [
            ['A', 'B', 5],
                
            ['A', 'C', 3],
                
            ['B', 'D', 2],
                
            ['B', 'E', 1],
                
            ['C', 'D', 1],
                
            ['C', 'E', 1]
        ],
        'nodes': [{
            'name': 'A'
        }, {
            'name': 'B'
        }, {
            'name': 'C'
        }, {
            'name': 'D'
        }, {
            'name': 'E'
        }]
    }]
})