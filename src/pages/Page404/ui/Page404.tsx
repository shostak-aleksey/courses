import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page404.module.scss';

interface Page404Props {
  className?: string;
}

export const Page404 = ({ className }: Page404Props) => (
    <div className={classNames(cls.Page404, {}, [className])}>
        Page not found
    </div>
);
