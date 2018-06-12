import React from 'react';

import classes from './Modal.css';
import Utility from '../../../hoc/Utility';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Utility>
    <Backdrop show={props.show} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Utility>
);



export default modal;