import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserRequest } from 'src/slices/users';

function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Home</h1>
      <button type="button" onClick={() => dispatch(getUserRequest())}>
        click
      </button>
    </>
  );
}

export default Home;
