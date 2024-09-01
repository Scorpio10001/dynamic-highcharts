Highcharts.chart('chart008', {
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
            ['Project Development', 'Planning', 20],
                
            ['Project Development', 'Execution', 20],
                
            ['Project Development', 'Evaluation', 15],
                
            ['Planning', 'Research', 10],
                
            ['Planning', 'Resource Allocation', 10],
                
            ['Planning', 'Risk Assessment', 8],
                
            ['Planning', 'Timeline Management', 7],
                
            ['Execution', 'Task Management', 12],
                
            ['Execution', 'Team Coordination', 12],
                
            ['Evaluation', 'Quality Control', 10],
                
            ['Evaluation', 'Feedback Collection', 8],
                
            ['Evaluation', 'Final Reporting', 6]
        ],
        'nodes': [{
            'name': 'Project Development'
        }, {
            'name': 'Planning'
        }, {
            'name': 'Execution'
        }, {
            'name': 'Evaluation'
        }, {
            'name': 'Research'
        }, {
            'name': 'Resource Allocation'
        }, {
            'name': 'Task Management'
        }, {
            'name': 'Quality Control'
        }, {
            'name': 'Feedback Collection'
        }, {
            'name': 'Final Reporting'
        }, {
            'name': 'Team Coordination'
        }, {
            'name': 'Risk Assessment'
        }, {
            'name': 'Timeline Management'
        }]
    }]
})