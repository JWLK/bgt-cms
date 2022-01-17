import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from "next/link"

import HeaderMain from "./Header/HeaderMain";
import SectionMain from "./Section/SectionMain";
import FooterMain from "./Footer/FooterMain";

const ContainerMain = ({children}) => {
    return (
        <>
            <HeaderMain/>
            <SectionMain>
                {children}
            </SectionMain>
            <FooterMain/>
        </>
    );
};

ContainerMain.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContainerMain;