import { Helmet } from "react-helmet";
import React from 'react'

export const Meta = (props) => {
    return (
        <Helmet>
            <meta charset="utf-8"/>
            <title>{props.title}</title>
        </Helmet>
    );
};
