Highcharts.mapChart('chart3', {
    "chart": {
        "map": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                0,
                                0
                            ],
                
                            [
                                0,
                                10
                            ],
                
                            [
                                10,
                                10
                            ],
                
                            [
                                10,
                                0
                            ],
                
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "properties": {
                    "name": "Country A"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                20,
                                20
                            ],
                
                            [
                                20,
                                30
                            ],
                
                            [
                                30,
                                30
                            ],
                
                            [
                                30,
                                20
                            ],
                
                            [
                                20,
                                20
                            ]
                        ]
                    ]
                },
                "properties": {
                    "name": "Country B"
                }
            }]
        }
    },
    "title": {
        "text": "example"
    },
    "mapNavigation": {
        "enabled": true,
        "buttonOptions": {
            "verticalAlign": "bottom"
        }
    },
    "colorAxis": {
        "min": 0
    },
    "series": [{
        "data": [{
            "name": "Country A",
            "value": 5000000
        }, {
            "name": "Country B",
            "value": 3000000
        }],
        "mapData": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                0,
                                0
                            ],
                
                            [
                                0,
                                10
                            ],
                
                            [
                                10,
                                10
                            ],
                
                            [
                                10,
                                0
                            ],
                
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "properties": {
                    "name": "Country A"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                20,
                                20
                            ],
                
                            [
                                20,
                                30
                            ],
                
                            [
                                30,
                                30
                            ],
                
                            [
                                30,
                                20
                            ],
                
                            [
                                20,
                                20
                            ]
                        ]
                    ]
                },
                "properties": {
                    "name": "Country B"
                }
            }]
        },
        "joinBy": "name",
        "name": "Population",
        "states": {
            "hover": {
                "color": "#BADA55"
            }
        },
        "dataLabels": {
            "enabled": true,
            "format": "{point.name}"
        }
    }]
});