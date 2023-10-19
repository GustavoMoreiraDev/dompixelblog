import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import style from './style.module.css';
import Dropzone from '@/components/custom/dropzone';
import axios from 'axios';

const Fnew = () => {

    // FORM INPUTS 
    const [img, setImg ] = useState([]);
    const [ name, setName] = useState(null);
    const [ email, setEmail] = useState(null);
    const [ senha, setSenha] = useState(null);
    
    const [isloading, setIsloading ] = useState(false);
    const [info, setInfo] = useState(null);

    const Sub = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users', {email: email, password: senha});
            setInfo(response.data.message);
        } catch (error) {
            console.log('erro', error);
        }
    };
    
    return (
        <>
            <main className={style['fn-container']}>
                <form onSubmit={Sub} className={style['fn-content']}>
                    <h1>Inscrever-se</h1>
                    <div className={style['fn-inputs']}>
                        {/* <Dropzone files={img} setFiles={setImg} /> */}
                        {/* <Input pl={'Digite seu nome'} v={name} on={(e) => setName(e.target.value)} /> */}
                        <Input pl={'Digite seu e-mail'} v={email} on={(e) => setEmail(e.target.value)} />
                        <Input pl={'Digite sua senha'} v={senha} on={(e) => setSenha(e.target.value)} />
                    </div>
                    <button className={style['fn-btn-sub']} type={'submit'}>
                        Enviar
                    </button>
                </form>
            </main>
        </>
    );
}

function Input({ pl, type, v, on }) {
    return (
        <InputMask 
            className={style['fn-input']} 
            type={type || 'text'} 
            placeholder={pl} 
            onChange={on} 
            value={v} 
            required 
        />
    )
};

export default Fnew;
