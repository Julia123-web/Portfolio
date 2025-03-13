import { Inter } from 'next/font/google';
import './globals.css';
import { MenuProvider } from './context/MenuContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Julia Silva',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuProvider>
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
