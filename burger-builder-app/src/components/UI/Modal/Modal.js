import React, {Component} from 'react';

import classes from './Modal.css';
import Utility from '../../../hoc/Utility';
import Backdrop from '../Backdrop/Backdrop';

class Modal  extends Component {

  shouldComponentUpdate(nextProps, nestState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate () {
    console.log('[Modal] WillUpdate')
  }

  render () {
    return (
      <Utility>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Utility>
    )
  }
}


export default Modal;
