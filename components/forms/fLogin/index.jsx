import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';
import style from './style.module.css';
import { setCookie } from 'nookies';
import axios from 'axios';

const Flogin = () => {

    const { push } = useRouter();
    // form Inputs
    const [ email, setEmail ] = useState(null);
    const [ senha, setSenha ] = useState(null);
    
    const [ isLoading, setIsloading ] = useState(false);
    const [ alert, setAlert ] = useState(null);

    const Sub = async (e) => {
        
        e.preventDefault(); setIsloading(true);

        try {
            const resp = await axios.post('/api/login', {email: email, password: senha});
            setCookie(null, 'tk', resp.data.id, { maxAge: 30 * 24 * 60 * 60, path: '/' });
            setAlert(resp.data.message);
            setTimeout(() => { push('/')}, 3000);
        } catch (error) {
            setAlert(error.response.data.error);
        } finally {
            setIsloading(false);
        }
    };

    return (
        <>
            <main className={style['fl-container']}>
                <form onSubmit={Sub} className={style['fl-form']}>
                    <h1>Entrar</h1>
                    <div className={style['fl-inputs']}>
                        <p>{alert}</p>
                        <Input v={email} on={(e) => setEmail(e.target.value)} t={'text'} pl={'E-mail'} />
                        <Input v={senha} on={(e) => setSenha(e.target.value)} t={'password'} pl={'Senha'} />
                    </div>
                    <button className={style['fl-btn-sub']} type={'submit'} disabled={isLoading}>
                        Enviar
                    </button>
                </form>
            </main>
        </>
    );
}

function Input ({ pl, v, t, on}) {

    return (
        <InputMask 
            className={style['fl-input']} 
            placeholder={pl}
            onChange={on}
            value={v}  
            type={t} 
            required 
        />
    )
}

export default Flogin;
