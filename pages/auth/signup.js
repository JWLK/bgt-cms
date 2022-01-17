import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'

import { ResponsiveContext, Text, Box, Carousel} from 'grommet'
import { Attraction, Car, TreeOption } from 'grommet-icons'

import ContainerMain from 'components/ContainerMain';

export default() => {
    return (
        <ContainerMain>
            <Head> 
                <title>백곰톡 :: 회원가입</title>
                <meta name="description" content="백곰톡 회원가입"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Box gap="medium" align="center" pad="large">
                <Text size="small">
                    The Carousel slides will transition every 3 seconds
                </Text>
                <Carousel controls={false} play={3000}>
                    <Box pad="xlarge" background="brand">
                        <Attraction size="xlarge" />
                    </Box>
                    <Box pad="xlarge" background="accent-2">
                        <TreeOption size="xlarge" />
                    </Box>
                    <Box pad="xlarge" background="accent-3">
                        <Car size="xlarge" />
                    </Box>
                </Carousel>
            </Box>
        </ContainerMain>
    )
}
