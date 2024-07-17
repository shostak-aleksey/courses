/* eslint-disable no-unused-vars */
import { HTMLProps, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './text.module.scss';

export enum ThemeText {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  className?: string;
  theme?: ThemeText;
  children?: ReactNode;
  title?: string;
  text?: string;
}

export const Text: FC<TextProps> = (props) => {
    const {
        className, children, theme, title, text, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
            {children}
        </div>
    );
};
