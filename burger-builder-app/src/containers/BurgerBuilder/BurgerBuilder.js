import React, {Component} from 'react';

import Utility from '../../hoc/Utility';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return(
      <Utility>
        <Burger />
        <div>Build Controls</div>
      </Utility>
    );
  }
}

export default BurgerBuilder;
