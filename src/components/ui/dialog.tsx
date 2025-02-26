import React, { useState, createContext, useContext, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import cn from "classnames"
import { CSSTransition } from "react-transition-group"
import useOnClickOutside from "@/hooks/useOnClickOutside"

type DialogProps = {
  children: React.ReactNode
  className?: string
  onOpenChange: () => void
}

interface DialogTriggerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactElement;
}

const DialogContext = createContext({
  isOpen: false,
  setIsOpen: (state: boolean) => {},
  onOpenChange: () => {},
})

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a Dialog provider");
  }
  return context;
}

const Dialog = ({ children, className, onOpenChange, ...props }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (onOpenChange) onOpenChange()
  }, [isOpen])

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen, onOpenChange }}>
      <div className={cn("voyage-dialog", className)} {...props}>
        {children}
      </div>
    </DialogContext.Provider>
  )
}

const DialogTrigger = ({ as: Component = "button", children, ...props }: DialogTriggerProps) => {
  const { isOpen, setIsOpen } = useDialog()

  return React.cloneElement(children, {
    onClick: () => setIsOpen(!isOpen),
  })
}

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  return createPortal(children, document.body);
};

const DialogOverlay = ({ children }: { children: React.ReactNode }) => {

  return (
    <div
      className="voyage-dialog__overlay animate-fade-in"
    >
      {children}
    </div>
  );
};

const DialogContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { isOpen, setIsOpen, onOpenChange } = useDialog();
  const dialogRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dialogRef, () => setIsOpen(false));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  return (
    <DialogPortal>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="hf-modal-animate"
        onExited={onOpenChange}
        unmountOnExit
        mountOnEnter
      >
        <div>
          <DialogOverlay>
            <div
              ref={dialogRef}
              className={cn('voyage-dialog__content modal-body', className)}
            >
              {children}
            </div>
          </DialogOverlay>
        </div>
      </CSSTransition>
    </DialogPortal>
  );
};

const DialogClose = () => {
  const { setIsOpen } = useDialog();
  return (
    <button onClick={() => setIsOpen(false)} className="voyage-dialog__close">
      <i className="ri-close-line text-xl text-shark-400" />
    </button>
  );
};

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogClose,
}
