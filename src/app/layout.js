'use client';

import { LanguageProvider } from './context/LanguageContext';
import './globals.css';

export const metadata = {
 title: 'מערכת ניהול נדל"ן',
 description: 'מערכת לניהול נכסים, לקוחות והשקעות בנדל"ן',
}

export default function RootLayout({ children }) {
 return (
   <html lang="he" dir="rtl">
     <body>
       <LanguageProvider>
         {children}
       </LanguageProvider>
     </body>
   </html>
 );
}