import { FC, lazy } from 'react';
import { Props } from './LoginForm';

export const LoginFormAsync = lazy<FC<Props>>(() => import('./LoginForm'));
