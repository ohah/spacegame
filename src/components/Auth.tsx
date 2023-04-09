/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react';
import { Outlet, redirect } from 'react-router-dom';

import useLogin from 'store/login/hooks';

const AuthRoute = () => {
  const { user } = useLogin();
  useEffect(() => {
    if (!user.id) {
      redirect('/');
    }
  }, []);
  return <>{user.id ? <Outlet /> : <div> 권한이 없는 페이지입니다</div>}</>;
};

export default AuthRoute;
