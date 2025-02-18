import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const baseUrl = process.env.NODE_ENV === 'local' ? 'http://web.qa-b2b.svc.cluster.local' : '';

export const getMuid = () => {
  const hf_user = localStorage.getItem('hf_user');
  if (hf_user) {
    return JSON.parse(hf_user)?.user.muid;
  }

  return '';
}
