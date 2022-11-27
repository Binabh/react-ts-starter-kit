import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'slices/';
import { getUserRequest } from 'slices/users';

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <h1 className="text-red-600">Home</h1>
      <button type="button" onClick={() => dispatch(getUserRequest('octocat'))}>
        Get User
      </button>
      {user.loading ? (
        'getting data...'
      ) : (
        <>
          <p>Name</p>
          <p>{user.user.name}</p>
        </>
      )}
    </>
  );
}

export default Home;
