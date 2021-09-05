import { FormEvent, useState } from 'react'
import Head from 'next/head'
import loginStyles from '../styles/Login.module.css'
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function HandleChange(event){
        const name = event.target.name;
        const value = event.target.value;
    }

    return (
        <>
            <Head>
                <title>THEPC - Admin Dashboard</title>
                <meta name="description" content="THEPC, editorial, twe, literature, journalism" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={loginStyles.card}>
                <h1>Login</h1>
                <form onSubmit={login}>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </div>
                    <button type="submit"></button>
                </form>
            </div>
        </>
    )
}

const login = async (event) => {
    event.preventDefault();
    try {
        const res = await axios.post('http://login.thepcvit.com/login', {
            email, password
        })

        console.log(res);
    } catch (error) {
        
    }
}