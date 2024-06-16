const json_structure = {
    "store": {
        "name": "Green Valley Market",
        "date": "2024-05-05",
        "address": {
            "street": "123 Main St",
            "city": "Springfield"
        },
        "product_types": [
            {
                "name": "Fruits",
                "description": "Fresh and organic fruits",
                "products": [
                    {
                        "id": 1,
                        "name": "Apple",
                        "price": 1.2
                    },
                    {
                        "id": 3,
                        "name": "Banana",
                        "price": 0.5
                    },
                    {
                        "id": 4,
                        "name": "Orange",
                        "price": 1.0
                    },
                    {
                        "id": 7,
                        "name": "Grapes",
                        "price": 2.5
                    }
                ]
            },
            {
                "name": "Vegetables",
                "description": "Fresh and organic vegetables",
                "products": [
                    {
                        "id": 2,
                        "name": "Carrot",
                        "price": 0.8
                    },
                    {
                        "id": 6,
                        "name": "Broccoli",
                        "price": 1.5
                    }
                ]
            },
            {
                "name": "Dairy",
                "description": "High-quality dairy products",
                "products": [
                    {
                        "id": 5,
                        "name": "Milk",
                        "price": 1.3
                    },
                    {
                        "id": 6,
                        "name": "Cheese",
                        "price": 2.0
                    }
                ]
            },
            {
                "name": "Bakery",
                "description": "Freshly baked goods",
                "products": [
                    {
                        "id": 7,
                        "name": "Bread",
                        "price": 1.0
                    }
                ]
            }
        ]
    }
}

function printJson(obj, indent = 0) {
    const indentation = '&nbsp;'.repeat(indent);

    if (Array.isArray(obj)) {
        let result = '<ul>';
        obj.forEach(item => {
            result += `<li>${printJson(item, indent + 2)}</li>`;
        });
        result += '</ul>';
        return result;
    }

    else if (typeof obj === 'object' && obj !== null) {
        let result = '<ul>';
        for (const key in obj) {
            result += `<li><strong>${key}:</strong> ${printJson(obj[key], indent + 2)}</li>`;
        }
        result += '</ul>';
        return result;
    }

    else {
        return `${indentation}${obj}`;
    }
}

const jsonOutput = document.getElementById('json-output');
jsonOutput.innerHTML = printJson(json_structure);
