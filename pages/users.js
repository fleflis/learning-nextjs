import React from 'react';
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import withAnalytics from '../src/hocs/withAnalytics';

const Users = ({users}) => (
    <div>
        <Head>
            <title>Users</title>
        </Head>
        <ul>
            {users.map((user,i) => (
                <li key={i}>{user.login}</li>
            ))}
        </ul>
        <Link href={"/"}>
            <a>Voltar</a>
        </Link>
    </div>
)

Users.getInitialProps = async () => {
    const response = await axios.get('https://api.github.com/orgs/rocketseat/members')

    return {users: response.data}
}

export default withAnalytics(Users);
