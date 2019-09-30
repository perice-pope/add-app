import React from 'react'; 

const Buttons = (props) => 
<div>
<button onClick={() => props.add(props.number)}>PLUS</button>
<button >MINUS</button>
</div>


export default Buttons; 