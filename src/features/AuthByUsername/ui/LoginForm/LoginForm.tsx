import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input, ThemeInput } from 'shared/ui/input/input';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, ThemeText } from 'shared/ui/Text/text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title="Login Form" />
            {error && (
                <Text
                    title="incorrect username or password"
                    theme={ThemeText.ERROR}
                    className="custom-class"
                />
            ) }
            <Input
                onChange={onChangeUsername}
                value={username}
                theme={ThemeInput.CLEAR}
                type="text"
                placeholder="Username"
            />
            <Input
                onChange={onChangePassword}
                value={password}
                theme={ThemeInput.CLEAR}
                type="text"
                placeholder="Password"
            />
            <Button disabled={isLoading} onClick={onLoginClick} type="submit">Login</Button>
        </div>
    );
};

export default LoginForm;
