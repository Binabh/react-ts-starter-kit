import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserRequest } from 'src/slicers/users';

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
