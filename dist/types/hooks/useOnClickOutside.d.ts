import { RefObject } from 'react';
interface OnClickOutsideHandler {
    (event: MouseEvent | TouchEvent): void;
}
export default function useOnClickOutside(ref: RefObject<HTMLElement>, handler: OnClickOutsideHandler): void;
export {};
