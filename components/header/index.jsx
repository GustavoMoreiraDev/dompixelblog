import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.css';

import { UseUserData } from '@/context/user';
import ModalUser from '../custom/modalUser';

const Header = () => {

    const { info } = UseUserData();
    const [ open, setOpen ] = useState(false);

    return (
        <>
            <header className={style['h-container']}>
                <Link className={style['h-home-btn']} href={'/'} alt={'DomPixel'} >
                    <Image className={style['h-logo']} src={'/logo.svg'} width={250} height={150} alt={'DomPixel'} />
                </Link>
                <div className={style['h-content-right']}>
                    <Link className={style['h-btn-right']} href={'/'} alt={'DomPixel'}>Home</Link>
                    {info.length === 0 && (
                        <div className={style['h-user-wrap']}>
                            <Link className={style['h-user-btn']} href={'/login'} alt={'DomPixel'}>Entrar</Link>
                            <Link className={style['h-user-btn']} href={'/cadastro'} alt={'DomPixel'} style={{ border: '1px solid #fffff888' }}>
                                Inscreva-se
                            </Link>
                        </div>
                    )}
                    {info.length !== 0 && (
                        <>
                            <button onClick={() => setOpen(!open)} className={style['h-avatar']}>
                                <p>{info.nome ? info.nome.charAt(0).toUpperCase() : ''}</p>
                            </button>
                            {open && ( <ModalUser />)}
                        </>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;
