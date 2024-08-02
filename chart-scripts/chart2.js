document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart("chart2", {
        "chart": {
            "type": "line"
        },
        "title": {
            "text": "Fruit Retail price"
        },
        "xAxis": {
            "title": {
                "text": "Fruit"
            },
            "categories": ["Apples", "Apples, applesauce", "Apples, ready-to-drink", "Apples, frozen concentrate", "Apricots", "Apricots, packed in juice", "Apricots, packed in syrup or water", "Apricots", "Bananas", "Berries, mixed", "Blackberries", "Blackberries", "Blueberries", "Blueberries", "Cantaloupe", "Cherries", "Cherries, packed in syrup or water", "Clementines", "Cranberries", "Dates", "Figs", "Fruit cocktail, packed in juice", "Fruit cocktail, packed in syrup or water", "Grapefruit", "Grapefruit, ready-to-drink", "Grapes", "Grapes (raisins)", "Grapes, ready-to-drink", "Grapes, frozen concentrate", "Honeydew", "Kiwi", "Mangoes", "Mangoes", "Nectarines", "Oranges", "Oranges, ready-to-drink", "Oranges, frozen concentrate", "Papaya", "Papaya", "Peaches", "Peaches, packed in juice", "Peaches, packed in syrup or water", "Peaches", "Pears", "Pears, packed in juice", "Pears, packed in syrup or water", "Pineapple", "Pineapple, packed in juice", "Pineapple, packed in syrup or water", "Pineapple", "Pineapple, ready-to-drink", "Pineapple, frozen concentrate", "Plum", "Plum (prunes)", "Plum (prune), ready-to-drink", "Pomegranate", "Pomegranate, ready-to-drink", "Raspberries", "Raspberries", "Strawberries", "Strawberries", "Watermelon"]
        },
        "yAxis": {
            "title": {
                "text": "RetailPrice"
            }
        },
        "series": [{
            "name": "Series 1",
            "data": ["1.8541", "1.1705", "0.8699", "0.6086", "3.6162", "1.8645", "2.2362", "7.6611", "0.5971", "4.2673", "6.7483", "4.8277", "4.1575", "3.821", "0.7523", "4.6632", "5.2418", "1.5811", "5.0828", "5.7499", "7.3233", "2.394", "2.0996", "1.4444", "1.1935", "2.0363", "3.9936", "1.0509", "0.7524", "1.1589", "2.6064", "1.4698", "10.3035", "2.3721", "1.4624", "1.0572", "0.7338", "1.3375", "7.4854", "2.1785", "2.2503", "2.0102", "3.6058", "1.8472", "2.14", "2.092", "0.617", "1.6509", "1.7771", "7.0133", "1.2243", "0.7256", "2.5259", "6.3293", "1.6988", "2.4672", "3.2788", "7.7338", "6.159", "2.9682", "3.3421", "0.382"],
            "color": "#000000"
        }]
    });
});