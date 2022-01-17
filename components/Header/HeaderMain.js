import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from "next/link";

import {HeaderSection, HeaderWrapper, TopMenu, MainMenu} from './HeaderMainCss';

const HeaderMain = () => {
    return (
        <HeaderSection>
            <HeaderWrapper>
                HEADER
            </HeaderWrapper>
        </HeaderSection>
    )
}
export default HeaderMain;