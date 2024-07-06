/* eslint-disable i18next/no-literal-string */
// File: src/widgets/Navbar/ui/Navbar.tsx
import { classNames } from 'shared/lib/classNames/classNames';
import { CollapseBtn } from 'shared/ui/CollapseBtn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(cls.Navbar, { [className]: className })}>
            <CollapseBtn className={cls.collapseButton} />
            <Button theme={ThemeButton.OUTLINE} onClick={() => setIsOpen(true)}>Войти </Button>
            <Modal onClose={() => setIsOpen(false)} isOpen={isOpen} />

        </div>
    );
};
