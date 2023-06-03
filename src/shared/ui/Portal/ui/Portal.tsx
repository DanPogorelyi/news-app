import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    children: ReactNode;
    element?: HTMLElement
}

export const Portal = (props: Props) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
