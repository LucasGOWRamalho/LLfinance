
import { Geist, Geist_Mono } from "next/font/google";
import { MdHome } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoMdContact } from "react-icons/io";
import { MdOutlineTrendingUp } from "react-icons/md";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
export function Navbar(){
  return (
<nav className="menu-lateral">
    <div className="btn-expandir">         
          <ul>
          <li className="item-menu">
              <a href="/DashBord">
                <RxDashboard />           
                <span>DashBord</span>
              </a>
            </li>
            <li className="item-menu">
              <a href="/Contas">
                <IoMdContact />
                <span>Contas</span>
              </a>
            </li>
            <li className="item-menu">
              <a href="/Planos">
                <MdOutlineTrendingUp />
                <span>Planos</span>
              </a>
            </li>
            <li className="item-menu">
              <a href="/">
                <MdHome />     
                <span>Home</span>
              </a>
            </li>
          </ul>
    </div>
  </nav>
);
}