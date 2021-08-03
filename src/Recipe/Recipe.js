import React, { Component } from 'react';
import './Recipe.css';
import chocoPizza from '../assets/choco-pizza.png';
import printIcon from '../assets/print-icon.png';
import listBg from '../assets/list-bg.png';


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

                    <div className='choco-pizza'>
                        <img src={chocoPizza} alt='choco-pizza'/>
                    </div>

                    <p>
                    For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and left cool completely.
                    <br/>
                    <br/>
                    Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set picture in the fridge and wait until the fix mixture is cooled. 
                    <br/>
                    <br/>
                    Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thickens for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into pyrex dish or glass Tupperware. Freeze for at least two hours before serving.
                    </p>

                    <div className='list-img'>
                        <img src={listBg} alt='list'/>
                    </div>
                </section>
            </body>
         );
    }
}
 
export default Recipe;