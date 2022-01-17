import Image from 'next/image'

import styles from './FooterMain.module.css'

const FooterMain = () => {
    return (
        <footer className={styles.footer}>
            <a href="http://jwlks.com/" target="_blank" rel="noopener noreferrer">
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/baekgomtalk.svg" alt="Baekgomtalk Logo" width={80} height={40}/>
                </span>
            </a>
        </footer>
    )
}
export default FooterMain;