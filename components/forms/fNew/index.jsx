import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';
import style from './style.module.css';
import { setCookie } from 'nookies';
import axios from 'axios';

const Fnew = () => {

    const { push } = useRouter();
    // FORM INPUTS 
    const [ name, setName] = useState(null);
    const [ email, setEmail] = useState(null);
    const [ senha, setSenha] = useState(null);
    
    const [isloading, setIsloading ] = useState(false);
    const [alert, setAlert] = useState(null);

    const Sub = async (e) => {
        e.preventDefault();
        setIsloading(true);
        try {
            const response = await axios.post('/api/users', {nome: name, email: email, password: senha});
            setCookie(null, 'tk', response.data.newUser.id, { maxAge: 30 * 24 * 60 * 60, path: '/' });
            setAlert(response.data.message);
            setTimeout(() => { push('/')}, 3000);
        } catch (error) {
            setAlert(error.response.data.error);
        } finally {
            setIsloading(false);
        }
    };
    
    return (
        <>
            <main className={style['fn-container']}>
                <form onSubmit={Sub} className={style['fn-content']}>
                    <h1>Inscrever-se</h1>
                    <div className={style['fn-inputs']}>
                        {alert === 'Usuário criado com sucesso' && (<p className={style['fn-sucesso']}>{alert}</p>)}
                        {alert === 'Email já cadastrado' && (<p className={style['fn-existente']}>{alert}</p>)}
                        <Input pl={'Digite seu nome'} v={name} on={(e) => setName(e.target.value)} />
                        <Input pl={'Digite seu e-mail'} v={email} on={(e) => setEmail(e.target.value)} />
                        <Input pl={'Digite sua senha'} v={senha} on={(e) => setSenha(e.target.value)} />
                    </div>
                    <button className={style['fn-btn-sub']} type={'submit'} disabled={isloading}>
                        {isloading ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </main>
        </>
    );
}

function Input({ pl, type, v, on }) {
    return (
      <InputMask
        className={style["fn-input"]}
        type={type || "text"}
        placeholder={pl}
        onChange={on}
        value={v}
        required
      />
    );
  }

export default Fnew;
