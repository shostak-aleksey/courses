import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                theme={ThemeButton.CLEAR}
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
// import { screen } from '@testing-library/react';
// import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// import { userEvent } from '@storybook/testing-library';
// import { Counter } from './Counter';

// describe('Counter', () => {
//     test('test render', () => {
//         componentRender(<Counter />, {
//             initialState: { counter: { value: 10 } },
//         });
//         expect(screen.getByTestId('value-title')).toHaveTextContent('10');
//     });

//     test('increment', () => {
//         componentRender(<Counter />, {
//             initialState: { counter: { value: 10 } },
//         });
//         userEvent.click(screen.getByTestId('increment-btn'));
//         expect(screen.getByTestId('value-title')).toHaveTextContent('11');
//     });

//     test('decrement', () => {
//         componentRender(<Counter />, {
//             initialState: { counter: { value: 10 } },
//         });
//         userEvent.click(screen.getByTestId('decrement-btn'));
//         expect(screen.getByTestId('value-title')).toHaveTextContent('9');
//     });
// });
