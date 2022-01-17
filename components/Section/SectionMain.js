import React, {useContext} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from "next/link"

import { ResponsiveContext, Header, Box, Menu} from 'grommet';

import { Section, MainWrapper } from './SectionMainCss'

const SectionMain = ({children}) => {
    const size = useContext(ResponsiveContext);
    return (
        <Section>
            <MainWrapper pad="medium">
                {children}
            </MainWrapper>
        </Section>
    )
}
export default SectionMain;