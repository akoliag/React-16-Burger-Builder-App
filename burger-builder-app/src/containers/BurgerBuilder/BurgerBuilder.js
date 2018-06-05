import React, {Component} from 'react';

import Utility from '../../hoc/Utility';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  //constructor(props){
  //super(props);
  //this.state = {...}
  //}

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat:0
    }
}
  render() {
    return(
      <Utility>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls />
      </Utility>
    );
  }
}

export default BurgerBuilder;
