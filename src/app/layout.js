import { Inter } from "next/font/google";
import "./globals.css";

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Nav from "./com/Nav";
import Foter from "./com/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Letf from "./com/Letf";
import Right from "./com/Right";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
   <Nav/>


   {children}
 
      
        <Foter/>
        <ToastContainer
        
        
        
        />
        </body>
    </html>
  );
}




 // or `v1X-appRouter` if you are using Next.js v1X
