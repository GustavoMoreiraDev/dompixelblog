import React from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Image from 'next/image';
import style from './style.module.css';

const Dropzone = ({ files, setFiles }) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div className={style['d-img-preview']} key={file.name}>
            <Image className={style['d-img']} src={file.preview} width={120} height={100} alt={file.name} />
        </div>
    ));

    return (
        <div className={style['d-container']} {...getRootProps()}>
            <input {...getInputProps()} />
            {files.length > 0 ? ( <>{thumbs}</>) : ( <AiOutlineCloudUpload />)}
        </div>
    );
};

export default Dropzone;