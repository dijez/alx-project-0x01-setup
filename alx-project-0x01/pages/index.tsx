import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home: React.FC = () => {
  return (
  <div className="flex justify-center item-center h-screen">
    <h1 className="text-7x1 font-thin">
      Welcome Page
    </h1>
  </div>
  );
}

export default Home;