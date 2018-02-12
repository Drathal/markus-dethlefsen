import React from 'react';
import SiteData from '../../data.json'

let i = 0;
const Item = ({ to, title, company }) => (
    <li key={i++}>
        <span>{to}</span>
        <span>{title}</span>
        <span>{company}</span>
    </li>
)
const Items = ({ data }) => data.map(entry => Item(entry))

const Vita = () => (
    <div>
        <h1>Vita</h1>
        <ul>
            <Items data={SiteData.vita} />
        </ul>
    </div>
);

export default Vita;
