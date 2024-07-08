import { classNames } from 'shared/lib/classNames/classNames';
import { Counter } from 'entities/Counter';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => (
    <div className={classNames(cls.MainPage, {}, [className])}>

        <Counter />
    </div>
);

export default MainPage;
