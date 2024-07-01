/* eslint-disable i18next/no-literal-string */
// File: src/widgets/Navbar/ui/Navbar.tsx
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { CollapseBtn } from 'shared/ui/CollapseBtn';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, { [className]: className })}>
        <CollapseBtn className={cls.collapseButton} />
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/a"
                className={cls.link}
            >
                MainPage
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/AboutPage"
                className={cls.link}
            >
                AboutPage
            </AppLink>
        </div>
    </div>
);
