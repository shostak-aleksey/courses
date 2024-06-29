// File: src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useCollapse } from 'shared/ui/CollapseBtn/CollapseBtnContext';
import cls from './Sidebar.module.scss';

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { collapsed } = useCollapse();

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <ThemeSwitcher />
        </div>
    );
};
