import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import style from './style.module.css';
import { db } from '@/backend/firebase';
import QuillEditor from '@/components/custom/quill';
import Dropzone from '@/components/custom/dropzone';

const Ncolumn = () => {
    
    const [ titulo, setTitulo] = useState(null);
    const [ autor, setAutor] = useState(null);
    const [ desc, setDesc ] = useState(null);
    const [ img, setImg] = useState([]);

    const addBlog = async (title, author, description, image) => {
        const docRef = await addDoc(collection(db, 'blogs'), {
          title,
          author,
          description,
          image,
        });
        console.log('Blog adicionado com ID: ', docRef.id);
    };
      
    console.log(titulo);

    return (
        <>
            <form className={style['nc-container']} onSubmit={() => addBlog(titulo, autor, desc, img)}>
                <div className={style['nc-left']}>
                    <Input pl={'Titulo do artigo'} v={titulo} t={'text'} on={(e) => setTitulo(e.target.value)} />
                    <Input pl={'Autor'} />
                    <QuillEditor content={desc} setContent={setDesc} />
                </div>
                <div className={style['nc-right']}>
                    <Dropzone files={img} setFiles={setImg} />
                    <button type={'submit'}>Enviar</button>
                </div>
            </form>
        </>
    );
}

function Input ({ t, pl, on, v}) {
    return (
        <InputMask 
            type={t}
            value={v} 
            onChange={on}
            placeholder={pl}
            className={style['nc-input']}
            required 
        />
    )
}

export default Ncolumn;
