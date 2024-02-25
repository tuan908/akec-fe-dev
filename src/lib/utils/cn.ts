import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Tailwindcss util
 * @param inputs Dirty tailwindcss classes
 * @returns Fresh tailwindcss classes
 * @author tuanna
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
