import React from 'react';
import InputMask from 'react-input-mask';
import style from './style.module.css';

const Fnew = () => {
    
    return (
        <>
            <main className={style['fn-container']}>
                <form className={style['fn-content']}>
                    <h1>Inscrever-se</h1>
                    <div className={style['fn-inputs']}>
                        <InputMask className={style['fn-input']} type={'text'} placeholder={'Digite seu nome'} required />
                        <InputMask className={style['fn-input']} type={'text'} placeholder={'Digite seu e-mail'} required />
                        <InputMask className={style['fn-input']} type={'text'} placeholder={'Digite sua senha'} required />
                    </div>
                    <button className={style['fn-btn-sub']} type={'submit'}>
                        Enviar
                    </button>
                </form>
            </main>
        </>
    );
}

export default Fnew;
