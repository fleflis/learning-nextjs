import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import WithAnalytics from '../src/hocs/withAnalytics'

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>
        <h1>Hello world</h1>
        <Link href="/users">
            <a>Usuários</a>
        </Link>
    </div>
);

export default WithAnalytics(Home);
