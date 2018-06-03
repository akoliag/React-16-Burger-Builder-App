import React from 'react';

import Utility from '../../hoc/Utility';
const layout = (props) => (
  <Utility>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main>
    {props.children}
  </main>
  </Utility>
);

//higher order component allows us to wrap the content up and return the json
//elements = we have a wrapping root element - Utility component is the hoc one.

export default layout;
