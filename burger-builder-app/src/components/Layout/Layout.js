import React from 'react';

import Utility from '../../hoc/Utility';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
  <Utility>
  <Toolbar />
  <main className={classes.Content}>
    {props.children}
  </main>
  </Utility>
);

//higher order component allows us to wrap the content up and return the json
//elements = we have a wrapping root element - Utility component is the hoc one.

export default layout;
