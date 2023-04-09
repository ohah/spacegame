import { useRecoilState } from 'recoil';

import { LoginRequest } from 'mocks/data/user';
import { userState } from 'store/login/atom';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const useLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const Login = useMutation({
    mutationFn: (newUser: LoginRequest) => {
      return axios.post<LoginRequest>('/api/login', newUser).then(({ data }) => data);
    },
    onSuccess: data => {
      setUser(data);
    },
  });
  const Logout = useMutation({
    mutationFn: (outUser: Pick<LoginRequest, 'id'>) => {
      return axios.post<Pick<LoginRequest, 'id'>>('/api/logout', outUser).then(({ data }) => data);
    },
    onSuccess: data => {
      setUser(data);
    },
  });
  return {
    user,
    setUser,
    Login: Login.mutate,
    Logout: Logout.mutate,
  };
};

export default useLogin;
