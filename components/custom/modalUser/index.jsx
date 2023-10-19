import React from 'react';
import Link from 'next/link';
import { destroyCookie } from 'nookies';
import { BiBookAdd, BiLogOut } from 'react-icons/bi';
import style from './style.module.css';
import { useRouter } from 'next/router';

const ModalUser = () => {

    const { push } = useRouter();

    const destroy = () => {
        destroyCookie(null, 'tk');
        push('/');
    };

    return (
        <>
            <div className={style['mu-container']}>
                <BtnWrap icon={BiBookAdd}>
                    <Link className={style['mu-link']} href={'/novo-artigo'} alt={'DomPixel'}>
                        Publicar Novo
                    </Link>
                </BtnWrap>
                <BtnWrap icon={BiLogOut}>
                    <button onClick={destroy}>
                        Sair
                    </button>
                </BtnWrap>
            </div>
        </>
    );
}
function BtnWrap({ icon, children }) {
    
    const Icone = icon;
    
    return (
        <div className={style['mu-btn-wrap']}>
            <Icone className={style['mu-icon']} />
            {children}
        </div>
    )
}
export default ModalUser;
