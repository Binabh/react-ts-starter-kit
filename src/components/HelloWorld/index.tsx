import React from 'react';

export interface HelloWorldProps {
  firstName: string;
  lastName: string;
}
const HelloWorld = (props: HelloWorldProps) => (
  <h1>
    Hello {props.firstName} {props.lastName}!
  </h1>
);
export default HelloWorld;
