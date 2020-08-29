import React, { Component } from 'react';

export default class Dice extends Component {
   static defaultProps = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
   };
   render() {
      const diceName = `fas fa-dice-`;
      return (
         <div
            className={`dice animate__animated ${
               this.props.rolling && 'animate__wobble'
            }`}>
            <i className={`${diceName + this.props[this.props.num]}`}></i>
         </div>
      );
   }
}
