// File: src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useCollapse } from 'shared/ui/CollapseBtn/CollapseBtnContext';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { collapsed } = useCollapse();

    return (

        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
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
            <ThemeSwitcher />
        </div>
    );
};
