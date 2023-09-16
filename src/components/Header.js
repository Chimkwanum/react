import React from 'react';
import { ReactDOM } from 'react';
import Snowfall from 'react-snowfall'

export default function Header(){

return(

<div className='header'>
Welcome

<Snowfall 


// Changes the snowflake color
color="red"
// Applied to the canvas element

// Controls the number of snowflakes that are created (default 150)
snowflakeCount={200}
/> 
</div>


);
}
