import { classNames } from 'shared/lib/classNames/classNames';
import SunIcon from 'shared/assets/icons/BurgerMenu.svg';
import cls from './CollapseBtn.module.scss';
import { useCollapse } from '../CollapseBtnContext';

interface CollapseBtnProps {
  className?: string;
}

const CollapseBtn = ({ className }: CollapseBtnProps) => {
    const { collapsed, toggleCollapse } = useCollapse();

    return (
        <button
            className={classNames(cls.collapseBtn, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            onClick={toggleCollapse}
            type="button"
            aria-label="Toggle collapse"
        >
            <SunIcon />
        </button>
    );
};

export default CollapseBtn;
