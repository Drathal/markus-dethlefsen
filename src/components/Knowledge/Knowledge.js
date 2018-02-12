import React from 'react';
import SiteData from '../../data.json'

const Item = (text) => (<li key={text}><span>{text}</span></li>)
const Items = ({ data }) => data.map(entry => Item(entry))

const Knowledge = () => (
    <div>
        <h1>Knowledge</h1>
        <ul>
            <Items data={SiteData.knowlege} />
        </ul>
    </div>
);

export default Knowledge;
