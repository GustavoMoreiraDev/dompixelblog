import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.css';

const Hcards = ({ title, author, data, rota }) => {

    return (
        <>
            <div className={style['hc-container']}>
                <div className={style['hc-info']}>
                    <p>17/10/2023</p>
                    <Link className={style['hc-btn']} href={rota} alt={'DomPixel'}>
                        Como surfar no crescimento da tecnologia em 2023
                    </Link>
                    <h5>Gustavo Moreira</h5>
                </div>
                <Image className={style['hc-img']} src={'/banner.jpg'} height={1024} width={1024} alt={'Post'} />
            </div>
        </>
    );
}

export default Hcards;
