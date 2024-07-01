import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <input
                type="checkbox"
                id="hide-checkbox"
                checked={theme === 'light'}
                onChange={toggleTheme}
                className={cls.hideCheckbox}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="hide-checkbox" className={cls.toggle}>
                <span className={cls.toggleButton}>
                    <i
                        className={classNames('', { }, [
                            cls.icon,
                        ])}
                    />
                </span>
            </label>
        </div>
    );
};
