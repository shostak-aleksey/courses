import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import cls from './input.module.scss';

export enum ThemeInput {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

type omitProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' |'onChange'>

export interface InputProps extends omitProps {
    className?: string;
    theme?: ThemeInput;
    value? : string;
    onChange? : (value: string) => void;
    type? : string;
}
export const Input = memo((props: InputProps) => {
    const {
        className, value, onChange, type = 'text', theme,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div>
            <input
                className={classNames(cls.input, {}, [className, cls[theme]])}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
