import React from 'react';
import Image from 'next/image';
import { MdArrowBack } from 'react-icons/md';
import style from './style.module.css';

import { useRouter } from 'next/router';

const Pub = () => {
    
    const { back } = useRouter();

    return (
        <>
            <main className={style['p-container']}>
                <div className={style['p-top']}>
                    <Image className={style['p-top-img']} src={'/banner.jpg'} width={1920} height={1080} alt={'DomPixel'} />
                    <div className={style['p-top-info']}>
                        <button onClick={() => back()}><MdArrowBack /></button>
                        <h1>Como surfar no crescimento da tecnologia em 2023</h1>
                        <h5>Gustavo Moreira</h5>
                    </div>
                </div>
                <div className={style['p-center']}>
                    <h2>Como surfar no crescimento da tecnologia em 2023</h2>
                    <Txt /> <Txt /> <Txt /> <Txt /> <Txt /> <Txt /> 
                </div>
            </main>
        </>
    );
}

function Txt () {
    return (
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam illo debitis natus suscipit animi voluptatem quaerat 
            voluptatibus possimus alias ab modi voluptas deserunt ea
            asperiores omnis nemo maxime, repellendus harum!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam illo debitis natus suscipit animi voluptatem quaerat 
            voluptatibus possimus alias ab modi voluptas deserunt ea
            asperiores omnis nemo maxime, repellendus harum!
        </p>
    )
}
export default Pub;
