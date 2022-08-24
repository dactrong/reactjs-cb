import React from 'react';


const Props = (props) => {
    return (
        <div>
            <ul>
                <li>{props.data.id}</li>
                <li>{props.data.name}</li>
            </ul>
        </div>
    );
};

export default Props;