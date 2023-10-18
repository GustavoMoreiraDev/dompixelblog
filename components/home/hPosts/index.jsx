import React from 'react';
import InputMask from 'react-input-mask';
import style from './style.module.css';
import Hcards from '../hCards';

const Hposts = () => {

    return (
        <>
            <main className={style['hp-container']}>
                <div className={style['hp-top']}>
                    <h1>Blog</h1>
                    <InputMask className={style['hp-t-input']} placeholder={'Buscar por titulo'} />
                </div>
                <div className={style['hp-c-bottom']}>
                    <Hcards rota={'/'} />
                    <Hcards rota={'/'} />
                    <Hcards rota={'/'} />
                    <Hcards rota={'/'} />
                    <Hcards rota={'/'} />
                    <Hcards rota={'/'} />
                    <Hcards rota={'/'} />
                    <Hcards rota={'/'} />
                </div>
            </main>
        </>
    );
}

export default Hposts;
