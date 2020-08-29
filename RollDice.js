import React, { Component } from 'react';
import Dice from './Dice';

export default class RollDice extends Component {
   state = {
      dice1: 1,
      dice2: 1,
      rolling: false,
   };
   rollDice = (event) => {
      //random 2 numbers
      let randNum1 = Math.floor(Math.random() * 6) + 1;
      let randNum2 = Math.floor(Math.random() * 6) + 1;
      //set the state for 2 dices = 2 randNum
      this.setState({
         dice1: randNum1,
         dice2: randNum2,
         rolling: true,
      });
      //set time out for rolling status to false
      setTimeout(() => {
         this.setState({ rolling: false });
      }, 1000);
   };
   render() {
      return (
         <div className='container'>
            <div className='dices-box '>
               <Dice num={this.state.dice1} rolling={this.state.rolling} />
               <Dice num={this.state.dice2} rolling={this.state.rolling} />
            </div>
            <button onClick={this.rollDice} disabled={this.state.rolling}>
               {this.state.rolling
                  ? 'Rolling in the ...'
                  : 'Roll the Death Dices !!!'}
            </button>
         </div>
      );
   }
}
