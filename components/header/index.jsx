import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.css';

const Header = () => {
    
    return (
        <>
            <header className={style['h-container']}>
                <Link className={style['h-home-btn']} href={'/'} alt={'DomPixel'} >
                    <Image className={style['h-logo']} src={'/logo.svg'} width={250} height={150} alt={'DomPixel'} />
                </Link>
                <div className={style['h-content-right']}>
                    <Link className={style['h-btn-right']} href ={'/'} alt={'DomPixel'}>Home</Link>
                    <div className={style['h-user-wrap']}>
                        <Link className={style['h-user-btn']} href={'/login'} alt={'DomPixel'}>Entrar</Link>
                        <Link className={style['h-user-btn']} href={'/cadastro'} alt={'DomPixel'} style={{border: '1px solid #fffff888'}}>
                            Inscreva-se
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
