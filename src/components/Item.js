import React from 'react';

const Item = props => (
  <div data-testid="item-text">
    {props.text}
  </div>
)
export default Item