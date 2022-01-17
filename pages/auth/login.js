import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'

import { ResponsiveContext, Grid, Text, Box, Carousel} from 'grommet'
import { Attraction, Car, TreeOption } from 'grommet-icons'

import ContainerMain from 'components/ContainerMain';

export default() => {
    return (
        <ContainerMain>
            <Head> 
                <title>백곰톡 :: 로그인</title>
                <meta name="description" content="백곰톡 로그인"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Grid columns="small" gap="medium">
                {[
                    'fadeIn',
                    'fadeOut',
                    'jiggle',
                    'pulse',
                    'rotateRight',
                    'rotateLeft',
                    'slideUp',
                    'slideDown',
                    'slideLeft',
                    'slideRight',
                    'zoomIn',
                    'zoomOut',
                ].map(animation => (
                    <Box
                    key={animation}
                    pad="large"
                    background="brand"
                    animation={{ type: animation, duration: 4000 }}
                    align="center"
                    >
                    {animation}
                    </Box>
                ))}
            </Grid>
        </ContainerMain>
    )
}
