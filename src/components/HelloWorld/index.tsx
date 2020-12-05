import React from 'react';

export interface HelloWorldProps {
  firstName: string;
  lastName: string;
}
const HelloWorld = ({ firstName, lastName }: HelloWorldProps) => (
  <h1>
    Hello {firstName} {lastName}!
  </h1>
);
export default HelloWorld;
