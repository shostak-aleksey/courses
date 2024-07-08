import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useState, useCallback, useRef,
    useEffect,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const ANIMATION_DELAY = 150;

    const [isClosing, setIsClosing] = useState(false);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(cls.modal, mods, [className])}>
            <div onClick={closeHandler} className={cls.overlay}>
                <div className={cls.content} onClick={onContentClick}>
                    Lorem, ipsum
                    dolor sit amet
                    consectetur
                    adipisicing elit. Quis, explicabo? Laborum perspiciatis,
                    placeat magni
                    consectetur neque odit a quidem nam amet similique null
                    a fuga, eum voluptate,
                    sed ipsum unde
                    repellat.
                </div>
                {children}
            </div>
        </div>
    );
};
