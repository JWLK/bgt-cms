import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/globals.css'

import { Grommet } from 'grommet';

const theme = {
    global: {
        colors: {
            // Overriding existing grommet colors
            brand: "#005CFF",
            "brand-dark": "#1A1311",
            "accent-1": "#4CCABC",
            "accent-2": "#18A4CB",
            "accent-3": "#006FFF",
            "accent-4": "#232BF4",
            "neutral-1": "#00873D",
            "neutral-2": "#4A4FD6",
            "neutral-3": "#00739D",
            "neutral-4": "#A2423D",
            focus: "#000",
            // Setting new colors
            blue: "#005CFF",
            green: "#00C781",
            teal: "#2AE3D0",
            purple: "##3D138D",
            red: "#FC6161",
            orange: "#FFBC44",
            yellow: "#FFEB59",
            brwon: "#483737"
        }
    },
};

const BaekgomTalk = ({Component, pageProps}) => {
    return (
        <Grommet theme={theme}>
            <Head> 
                <title>백곰톡 - 심심하면 빼곰!</title>
                <meta name="description" content="백곰톡 서비스에 오신것을 환영합니다."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps}/>
        </Grommet>
    );
};

BaekgomTalk.propTypes = {
    Component: PropTypes.elementType.isRequired
};

export default BaekgomTalk
