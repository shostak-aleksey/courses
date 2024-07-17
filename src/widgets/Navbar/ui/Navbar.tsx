import { classNames } from 'shared/lib/classNames/classNames';
import { CollapseBtn } from 'shared/ui/CollapseBtn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onCloseModal = () => setIsOpen(false);
    const onOpenModal = () => setIsOpen(true);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, { [className]: className })}>
                <CollapseBtn className={cls.collapseButton} />
                <Button theme={ThemeButton.CLEAR} onClick={onLogout}>Sign out </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, { [className]: className })}>
            <CollapseBtn className={cls.collapseButton} />
            <Button theme={ThemeButton.CLEAR} onClick={onOpenModal}>Sign in </Button>
            <LoginModal onClose={onCloseModal} isOpen={isOpen} />
        </div>
    );
};
