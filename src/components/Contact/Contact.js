import React from 'react';
import SiteData from '../../data.json'

const Item = ({ text, key }) => (<li key={key} className={key}>{text}</li>)
const Items = ({ data }) => Object
    .keys(data)
    .filter(key => data[key])
    .map(key => ({ text: data[key], key}))
    .map(data => Item(data))

const Contact = () => (
    <div>
        <h1>Contact</h1>
        <ul>
            <Items data={SiteData.address} />
        </ul>
    </div>
);

export default Contact;
