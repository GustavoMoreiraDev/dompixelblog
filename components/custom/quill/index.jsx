import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const QuillEditor = ({ setContent, content }) => {

  useEffect(() => {
    import('react-quill/dist/quill.snow.css');
  }, []);
  
  const handleChange = (value) => {
    setContent(value);
  };

  const editorStyle = {
    height: '180px',
    backgroundColor: '#ffffff',
  };


  return (
    <ReactQuill value={content} onChange={handleChange} style={editorStyle} />
  );
};

export default QuillEditor;