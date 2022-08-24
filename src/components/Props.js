import React from 'react';


const Props = (props) => {
    return (
        <div>
            <ul>
                <li>{props.data.name}</li>
                   <p>{props.children}</p>  
            </ul>
        </div>
    );
};

export default Props;