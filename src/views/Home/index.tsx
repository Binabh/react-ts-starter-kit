import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/slices/';
import { getUserRequest } from 'src/slices/users';

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <h1>Home</h1>
      <button type="button" onClick={() => dispatch(getUserRequest('ce5f60e2'))}>
        click to get data from api
      </button>
      {user.loading ? (
        'getting data...'
      ) : (
        <>
          <p>Name</p>
          <p>{user.user.name}</p>
          <p>City</p>
          <p>{user.user.city}</p>
        </>
      )}
    </>
  );
}

export default Home;
