/* eslint-disable jsx-a11y/label-has-associated-control */
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
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
                checked={theme === 'app_light_theme'}
                onChange={toggleTheme}
                className={cls.hideCheckbox}
            />
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
