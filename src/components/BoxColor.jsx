import React from 'react';

function BoxColor(props) {
 const {r,g,b} = props;

 const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  };

  return <div class="Box-color" style={divStyle}>rgb({r},{g},{b})</div>;
}


export default BoxColor;