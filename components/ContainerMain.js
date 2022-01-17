import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from "next/link";

import HeaderMain from "./Header/HeaderMain";

const ContainerMain = ({children}) => {
    return (
        <>
            <HeaderMain/>
            <>
                {children}
            </>
        </>
    );
};

ContainerMain.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContainerMain;