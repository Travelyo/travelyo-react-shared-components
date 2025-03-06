import React from "react";
type DialogProps = {
    children: React.ReactNode;
    className?: string;
    onOpen: () => void;
};
interface DialogTriggerProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    children: React.ReactElement;
}
export declare const useDialog: () => {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    onOpen: () => void;
};
declare const Dialog: ({ children, className, onOpen, ...props }: DialogProps) => React.JSX.Element;
declare const DialogTrigger: ({ as: Component, children, ...props }: DialogTriggerProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare const DialogOverlay: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
declare const DialogContent: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => React.JSX.Element;
declare const DialogClose: () => React.JSX.Element;
export { Dialog, DialogTrigger, DialogContent, DialogOverlay, DialogClose, };
