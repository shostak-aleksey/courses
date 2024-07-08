// File: src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx
import { classNames } from 'shared/lib/classNames/classNames';
import About from 'shared/assets/icons/about-20-20.svg';
import Main from 'shared/assets/icons/main-20-20.svg';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useCollapse } from 'shared/ui/CollapseBtn/CollapseBtnContext';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useState } from 'react';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { collapsed } = useCollapse();
    const [animationComplete, setAnimationComplete] = useState(false);

    return (

        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
            data-testId="sidebar"
        >
            <div className={cls.links}>
                <div className={cls.linksColumn}>

                    <AppLink
                        theme={AppLinkTheme.PRIMARY}
                        to="/a"
                        className={cls.link}
                    >
                        <Main className={cls.svg} />
                        {collapsed ? '' : 'MainPage'}
                    </AppLink>
                </div>
                <div className={cls.linksColumn}>
                    <AppLink
                        theme={AppLinkTheme.PRIMARY}
                        to="/AboutPage"
                        className={cls.link}
                    >
                        <About className={cls.svg} />
                        {collapsed ? '' : 'AboutPage'}
                    </AppLink>
                </div>
            </div>
            <ThemeSwitcher />
        </div>
    );
};
