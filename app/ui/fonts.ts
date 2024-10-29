import {Inter} from 'next/font/google';
import { Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin']});
export const lusitana = Lusitana({ 
    weight: ['400'],
    style: ['normal'], 
    display: 'swap', 
    preload: true, 
    fallback: ['serif'],  
    adjustFontFallback: true,
    subsets: ['latin']
});
