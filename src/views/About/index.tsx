import React from 'react';
import SvgViewer from 'src/components/common/SvgViewer';
import ImageViewer from 'src/components/common/ImageViewer';

export default function About() {
  return (
    <>
      <h1>About</h1>
      <ImageViewer />
      <SvgViewer />
    </>
  );
}
