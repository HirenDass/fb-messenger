import React from 'react';

const Link = props => (
    <a target="_blank" href={props.to}>{props.title}</a>
)

export default Link;