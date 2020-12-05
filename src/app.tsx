import React from 'react';
import ImageViewer from 'src/components/common/ImageViewer/';
import 'src/assets/css/main.css';
import HelloWorld from 'src/components/HelloWorld/';

export default function App() {
  return (
    <>
      <HelloWorld firstName={'John'} lastName={'Doe'} />
    </>
  );
}
