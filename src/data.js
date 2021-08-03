import React, { Component } from 'react';

const ingredientItem = [
    {
        id: 1, 
        name: 'milk',
        amount: '1 1/2 cups',
    },
    {
        id: 2, 
        name: 'mascarpone',
        amount: '1/2 cup',
    },
    {
        id: 3, 
        name: 'pink salt',
        amount: '1/2 tsp',
    },
    {
        id: 4, 
        name: 'Black Mission Figs',
        amount: '1 lb',
    },
    {
        id: 5, 
        name: 'brown sugar',
        amount: '1/2 cup',
    },
    {
        id: 6, 
        name: 'water',
        amount: '2-4 tbsp',
    },
    {
        id: 7, 
        name: 'heavy cream',
        amount: '1 1/2',
    },
    {
        id: 8, 
        name: 'granulated sugar',
        amount: '1/3',
    },
    {
        id: 9, 
        name: 'egg yolks',
        amount: '2',
    },
    {
        id: 10, 
        name: 'lemon,juiced',
        amount: '1',
    },
    {
        id: 11, 
        name: 'butter',
        amount: '2 tbsp',
    },
    {
        id: 12, 
        name: 'honey roasted pevans, roughly chopped',
        amount: '1 cup',
    },
]

class IngredientList extends Component {
    render() { 
        return ( 
            ingredientItem.map((item) => 
                    <IngredientItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    />
                )
        
        )
    }
}
export default IngredientList;

class IngredientItem extends Component {
    render() { 
        return ( 
            <ul>
                <li>{this.props.amount} {this.props.name}</li>
            </ul>
         );
    }
}

 