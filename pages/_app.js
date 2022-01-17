import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/globals.css'

const BaekgomTalk = ({Component, pageProps}) => {
    return (
        <> < Head > <title>백곰톡 - 심심하면 빼곰!</title>
        <meta name="description" content="백곰톡 서비스에 오신것을 환영합니다."/>
        <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Component {...pageProps}/>
</>
    );
};

BaekgomTalk.propTypes = {
    Component: PropTypes.elementType.isRequired
};

export default BaekgomTalk
