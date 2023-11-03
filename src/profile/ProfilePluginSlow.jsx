/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Button } from '@edx/paragon';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingProfileSelector } from './data/selectors';
import { fetchProfile } from './data/actions';
import { Plugin } from '../../plugins';

const PluginExamplePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingProfileSelector);
  const { username } = useParams();
  // useEffect(() => {
  //   try {
  //     fetch('http://localhost:4500/info').then(({ body }) => console.log(body));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);
  return (
    <Plugin>
      <Button onClick={() => dispatch(fetchProfile(username))}>Load profile</Button>
      {!isLoading && (<p>Hello, {username} </p>)}
    </Plugin>
  );
};

export default PluginExamplePage;
