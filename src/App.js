import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';


export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const profile = useSelector(state => state.user.profile);

  const hasNickName = profile !== null ? profile.nickname ? true : false : false

  const Routes = createRouter(signed, hasNickName)
  
  return <Routes />
}



  