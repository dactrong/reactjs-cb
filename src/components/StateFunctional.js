import React, { useState } from 'react';

const StateFunctional = () => {
    const [count, setCount] = useState(1)

    return (
        <div>
              <h1>functional component</h1>

            <h2>{count}</h2>
           <button onClick = {()=> setCount(count+1)}>Cộng</button>
           <button onClick = {()=> setCount(count-1)}>Trừ</button>

        </div>
    );
};

export default StateFunctional;