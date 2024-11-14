import { LanguageProvider } from './context/LanguageContext';
import './globals.css';

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