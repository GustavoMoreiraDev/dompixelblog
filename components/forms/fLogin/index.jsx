import React from 'react';
import InputMask from 'react-input-mask';
import style from './style.module.css';

const Flogin = () => {

    return (
        <>
            <main className={style['fl-container']}>
                <form className={style['fl-form']}>
                    <h1>Entrar</h1>
                    <div className={style['fl-inputs']}>
                        <InputMask className={style['fl-input']} type={'email'} placeholder={'E-mail'}  required />
                        <InputMask className={style['fl-input']} type={'password'} placeholder={'Senha'}  required />
                    </div>
                    <button className={style['fl-btn-sub']} type={'submit'}>
                        Enviar
                    </button>
                </form>
            </main>
        </>
    );
}

export default Flogin;
