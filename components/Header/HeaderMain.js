import React, {useContext} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from "next/link"

import { ResponsiveContext, Header, Box, Menu} from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import BSymbol from 'public/symbol.svg';

import { HeaderSection, HeaderWrapper, SymbolLogo, LoginAnchor, SignupAnchor } from './HeaderMainCss'
import styles from './HeaderMain.module.css'

const HeaderMain = () => {
    const size = useContext(ResponsiveContext);
    return (
        <HeaderSection>
            <HeaderWrapper pad="medium" height="xsmall">
                <Link href="/"><a>
                    <SymbolLogo
                        icon={<BSymbol width="50" height="50" fill="#005CFF"/>}
                        label="백곰톡"
                        color="brand-dark"
                        size="xxlarge"
                        weight={800} 
                    />
                </a></Link>
                <ResponsiveContext.Consumer>
                    {(size) =>
                        size === 'small' ? (
                            <Box justify="end">
                                <Menu
                                    a11yTitle="Navigation Menu"
                                    dropProps={{ align: { top: 'bottom', right: 'right' } }}
                                    icon={<MenuIcon color="brand"/>}
                                    items={[
                                        {
                                            label: <Box pad="small">Grommet.io</Box>,
                                            href: 'https://v2.grommet.io/',
                                        },
                                        {
                                            label: <Box pad="small">Feedback</Box>,
                                            href: 'https://github.com/grommet/grommet/issues',
                                        },
                                    ]}
                                />
                            </Box>
                        ) : (
                            <Box justify="end" direction="row" gap="small">
                                <Link href="/auth/login"><a>
                                    <LoginAnchor
                                        label="로그인"
                                        size="regular"
                                        weight={800}
                                    />
                                </a></Link>
                                <Link href="/auth/signup"><a>
                                    <SignupAnchor
                                        label="회원가입"
                                        size="regular"
                                        weight={800}
                                    />
                                </a></Link>
                            </Box>
                        )
                    }
                </ResponsiveContext.Consumer>
            </HeaderWrapper>
        </HeaderSection>
    )
}
export default HeaderMain;