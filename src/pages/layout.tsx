import * as React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

const navLinks = css`
display: flex;
list-style: none;
padding-left: 0;
`
const navLinkItem = css`
padding-right: 2rem;
`
const navLinkText = css`
color: black;
`
const Layout = ({ pageTitle, children }: { pageTitle: string, children: any }) => {
    return (
        <div>
            <nav>
                <ul css={navLinks}>
                    <li css={navLinkItem}><Link to="/" css={navLinkText}>Home</Link></li>
                    <li css={navLinkItem}><Link to="/about" css={navLinkText}>About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout