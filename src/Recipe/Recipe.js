import React, { Component } from 'react';
import './Recipe.css';
import chocoPizza from '../assets/choco-pizza.png';
import printIcon from '../assets/print-icon.png';


class Recipe extends Component {
    render() { 
        return ( 
            <body>
                <section className='recipe-section' alt='recipe-section'>
                    <h2 className='recipe-title' alt='recipe-title'>Chocolate Pizza</h2>
                    <div className='dates'>POSTED ON 15 DEC 2013 / DESSERTS</div>

                    <div className='print'>
                        <img  src={printIcon} alt='print'/>print
                    </div>

                    <ImagineSection/>

                    <p>
                    For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and left cool completely.
                    <br/>
                    <br/>
                    Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set picture in the fridge and wait until the fix mixture is cooled. 
                    <br/>
                    <br/>
                    Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thickens for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into pyrex dish or glass Tupperware. Freeze for at least two hours before serving.
                    </p>

                    <div className='ingredients'>
                        <IngredientList/>
                    </div>
                </section>
            </body>
         );
    }
}
 
export default Recipe;

class ImagineSection extends Component {
    render() { 
        return  <img className='choco-pizza' src={chocoPizza} alt='choco-pizza'/>;
    }
}
 
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
};

class IngredientItem extends Component {
    render() { 
        return ( 
            <ul>
                <li>{this.props.amount} {this.props.name}</li>
            </ul>
         );
    }
}
 

 
