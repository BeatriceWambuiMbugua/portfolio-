import Providers from "../components/Providers";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beatrice Wambui Mbugua",
  description: "A Frontend developer portfolio created using NEXT.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <main className="app relative">
            <Header />
            {children}
          </main>
        </Providers>
         <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script> 
     
      </body>
    </html>
  );
}
