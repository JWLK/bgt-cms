import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from "next/link";

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Icon} from 'react-icons-kit'
import {ic_grade_outline} from 'react-icons-kit/md/ic_grade_outline'

import ContainerMain from '../components/ContainerMain';

export default() => {
    return (
        <ContainerMain>
            <div className={styles.container}>
                <Head>
                    <title>백곰톡 - 심심하면 빼곰!</title>
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to
                        <a href="https://nextjs.org">Next.js!</a>
                    </h1>

                    <p className={styles.description}>
                        Get started by editing{' '}
                        <code className={styles.code}>pages/index.js</code>
                    </p>

                    <div className={styles.grid}>
                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation &rarr;</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/learn" className={styles.card}>
                            <h2>Learn &rarr;</h2>
                            <p>Learn about Next.js in an interactive course with quizzes!</p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/canary/examples"
                            className={styles.card}>
                            <h2>Examples &rarr;</h2>
                            <p>Discover and deploy boilerplate example Next.js projects.</p>
                        </a>

                        <Link href="/_blank">
                            <a className={styles.card}>
                                <h2><Icon icon={ic_grade_outline} size={54}/>
                                    즐겨찾기
                                </h2>
                                <p>즐겨찾기 등록하고 손쉽게 사용해보세요!</p>
                            </a>
                        </Link>

                    </div>
                </main>

                <footer className={styles.footer}>
                    <a href="jwlks.com" target="_blank" rel="noopener noreferrer">
                        Powered by{' '}
                        <span className={styles.logo}>
                            <Image src="/baekgomtalk.svg" alt="Baekgomtalk Logo" width={80} height={40}/>
                        </span>
                    </a>
                </footer>
            </div>
        </ContainerMain>

    )
}
