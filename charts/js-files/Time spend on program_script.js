Highcharts.chart('011', {
    "chart": {
        "type": "columnrange",
        "inverted": true,
        "events": {
            "load": "\n                        function () {\n                            var chart = this;\n                            var start = 0;\n                            var step = 5;\n                            var totalPoints = chart.series[0].data.length;\n\n                            function updateData() {\n                                var end = Math.min(start + step - 1, totalPoints - 1);\n                                chart.xAxis[0].setExtremes(start, end);\n                            }\n\n                            // Initial data update\n                            updateData();\n\n                            // Update start and end on zoom or scroll\n                            Highcharts.addEvent(chart, 'redraw', function () {\n                                var extremes = chart.xAxis[0].getExtremes();\n                                start = Math.floor(extremes.min);\n                                end = Math.floor(extremes.max);\n                            });\n                        }\n                    "
        }
    },
    "title": {
        "text": "Time spend on program"
    },
    "xAxis": {
        "categories": [
            "FLO-74764",
            "FLO-48815",
            "FLO-61050",
            "FLO-90333",
            "FLO-83768",
            "FLO-90018",
            "FLO-89506",
            "FLO-52483",
            "FLO-26279",
            "FLO-27261",
            "FLO-90325",
            "FLO-01347",
            "FLO-11910",
            "FLO-71692",
            "FLO-67284",
            "FLO-76713",
            "FLO-39869",
            "FLO-24645",
            "FLO-58930",
            "FLO-87252",
            "FLO-75262",
            "FLO-82585",
            "FLO-17417",
            "FLO-57450",
            "FLO-68894",
            "FLO-94014",
            "FLO-62566",
            "FLO-76741",
            "FLO-09650",
            "FLO-69639",
            "FLO-12621",
            "FLO-80688",
            "FLO-03131",
            "FLO-31074",
            "FLO-34837",
            "FLO-22839",
            "FLO-40088",
            "FLO-63386",
            "FLO-57652",
            "FLO-09373",
            "FLO-82864",
            "FLO-06946",
            "FLO-84664",
            "FLO-54874",
            "FLO-77170",
            "FLO-96689",
            "FLO-54754",
            "FLO-29306",
            "FLO-63357",
            "FLO-99861",
            "FLO-57169",
            "FLO-68031",
            "FLO-25249",
            "FLO-79195",
            "FLO-30974",
            "FLO-64198",
            "FLO-48092",
            "FLO-58506",
            "FLO-05840",
            "FLO-08277",
            "FLO-88694",
            "FLO-53165",
            "FLO-00795",
            "FLO-73325",
            "FLO-93208",
            "FLO-36900",
            "FLO-61076",
            "FLO-37661",
            "FLO-94603",
            "FLO-71883",
            "FLO-62786",
            "FLO-15599",
            "FLO-55500",
            "FLO-33502",
            "FLO-47735",
            "FLO-66056",
            "FLO-00772",
            "FLO-51560",
            "FLO-37812",
            "FLO-57358",
            "FLO-57115",
            "FLO-54825",
            "FLO-38533",
            "FLO-93195",
            "FLO-33674",
            "FLO-10908",
            "FLO-35948",
            "FLO-22495",
            "FLO-41667",
            "FLO-17122",
            "FLO-89142",
            "FLO-64985",
            "FLO-16837",
            "FLO-33724",
            "FLO-41262",
            "FLO-42018",
            "FLO-90488",
            "FLO-61975",
            "FLO-18333",
            "FLO-70569",
            "FLO-81260",
            "FLO-16412",
            "FLO-53375",
            "FLO-79474",
            "FLO-65197",
            "FLO-20077",
            "FLO-19684",
            "FLO-12816",
            "FLO-95666",
            "FLO-51052",
            "FLO-48029",
            "FLO-98342",
            "FLO-58831",
            "FLO-50335",
            "FLO-24134",
            "FLO-45013",
            "FLO-28932",
            "FLO-00722",
            "FLO-38046",
            "FLO-20315",
            "FLO-47858",
            "FLO-92972",
            "FLO-07909",
            "FLO-52006",
            "FLO-33030",
            "FLO-80226",
            "FLO-67229",
            "FLO-95917",
            "FLO-75139",
            "FLO-47946",
            "FLO-39791",
            "FLO-12069",
            "FLO-86614",
            "FLO-87093",
            "FLO-48283",
            "FLO-49359",
            "FLO-40203",
            "FLO-60915",
            "FLO-88268",
            "FLO-62128",
            "FLO-04721",
            "FLO-73531",
            "FLO-20642",
            "FLO-08677",
            "FLO-41156",
            "FLO-92879",
            "FLO-62935",
            "FLO-52496",
            "FLO-05361",
            "FLO-37295",
            "FLO-93295",
            "FLO-03687",
            "FLO-98652",
            "FLO-52684",
            "FLO-22453",
            "FLO-53981",
            "FLO-28149",
            "FLO-36837",
            "FLO-57155",
            "FLO-83416",
            "FLO-54319",
            "FLO-60713",
            "FLO-38096",
            "FLO-44076",
            "FLO-26954",
            "FLO-25400",
            "FLO-46144",
            "FLO-60692",
            "FLO-70810",
            "FLO-82696",
            "FLO-19477",
            "FLO-14741",
            "FLO-30079",
            "FLO-91574",
            "FLO-55066",
            "FLO-35721",
            "FLO-70599",
            "FLO-27816",
            "FLO-90765",
            "FLO-34669",
            "FLO-30752",
            "FLO-15586",
            "FLO-74626",
            "FLO-61124",
            "FLO-45317",
            "FLO-51461",
            "FLO-27105",
            "FLO-32447",
            "FLO-64494",
            "FLO-59178",
            "FLO-20153",
            "FLO-62453",
            "FLO-51607",
            "FLO-39252",
            "FLO-74391",
            "FLO-87014",
            "FLO-50370",
            "FLO-54243",
            "FLO-32709",
            "FLO-03653",
            "FLO-59696",
            "FLO-04430",
            "FLO-29194",
            "FLO-47394",
            "FLO-95114",
            "FLO-75677",
            "FLO-41344",
            "FLO-36996",
            "FLO-97021",
            "FLO-31238",
            "FLO-27982",
            "FLO-69212",
            "FLO-70407",
            "FLO-69247",
            "FLO-13436",
            "FLO-10830",
            "FLO-29877",
            "FLO-59688",
            "FLO-67001",
            "FLO-75798",
            "FLO-47324",
            "FLO-01392",
            "FLO-70880",
            "FLO-70995",
            "FLO-90458",
            "FLO-02426",
            "FLO-71138",
            "FLO-33398",
            "FLO-76527",
            "FLO-34414",
            "FLO-18174",
            "FLO-44292",
            "FLO-27913",
            "FLO-14865",
            "FLO-66845",
            "FLO-07124",
            "FLO-09295",
            "FLO-80476",
            "FLO-02132",
            "FLO-89081",
            "FLO-91783",
            "FLO-56179",
            "FLO-20516",
            "FLO-00798",
            "FLO-24294",
            "FLO-54208",
            "FLO-29212",
            "FLO-51238",
            "FLO-61416",
            "FLO-12474",
            "FLO-74556",
            "FLO-68509",
            "FLO-55622",
            "FLO-55491",
            "FLO-98709",
            "FLO-11894",
            "FLO-43440",
            "FLO-29907",
            "FLO-38862",
            "FLO-25178",
            "FLO-18010",
            "FLO-85406",
            "FLO-94865",
            "FLO-13028",
            "FLO-95880",
            "FLO-41478",
            "FLO-91197",
            "FLO-37111",
            "FLO-41223",
            "FLO-00893",
            "FLO-23554",
            "FLO-55408",
            "FLO-36278",
            "FLO-96159",
            "FLO-39257",
            "FLO-67456",
            "FLO-02690",
            "FLO-06598",
            "FLO-99537",
            "FLO-29883",
            "FLO-29712",
            "FLO-19357",
            "FLO-53949",
            "FLO-41352",
            "FLO-35669",
            "FLO-34661",
            "FLO-67133",
            "FLO-59116",
            "FLO-67064"
        ],
        "title": {
            "text": "Categories"
        },
        "min": 0,
        "max": 4
    },
    "yAxis": {
        "title": {
            "text": "Values"
        }
    },
    "plotOptions": {
        "columnrange": {
            "dataLabels": {
                "enabled": true,
                "format": "{y}"
            },
            "color": "#3ABEF9"
        }
    },
    "series": [
        {
            "name": "Time spend on program",
            "data": [
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2020,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2020,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2020,
                    2024
                ],
                [
                    2020,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2019,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2019,
                    2023
                ],
                [
                    2023,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2020,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2018,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2016,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2015,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2020,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2022,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2020,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2021,
                    2024
                ],
                [
                    2017,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2023,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ],
                [
                    2024,
                    2024
                ]
            ],
            "color": "#3ABEF9"
        }
    ],
    "scrollbar": {
        "enabled": true
    },
    "navigator": {
        "enabled": true
    }
});