import React from 'react';
import SvgViewer from 'src/components/common/SvgViewer/';
import ImageViewer from 'src/components/common/ImageViewer/';
import HelloWorld from 'src/components/HelloWorld/';

export default function App() {
  return (
    <>
      <HelloWorld firstName="John" lastName="Doe" />
      <ImageViewer />
      <SvgViewer />
    </>
  );
}
