import React from 'react';
import SiteData from '../../data.json'

let i = 0;
const Item = ({ text, key }) => (
    <li key={i++} className={key}>
        <span>{text}</span>
    </li>
)
const Items = ({ data }) => Object
    .keys(data)
    .filter(key => data[key])
    .map(key => Item({ text: data[key], key}))

const Contact = () => (
    <div>
        <h1>Contact</h1>
        <ul>
            <Items data={SiteData.address} />
        </ul>
    </div>
);

export default Contact;
