import "./globals.css";
import { Playwrite_AU_SA_Guides,Poppins  } from "next/font/google";

const playwriteAUSA = Playwrite_AU_SA_Guides({
  weight: "400",
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({ children,teams }) {
  return (
    <html lang="en">
      <body className={playwriteAUSA.className} >
        {children}
        {teams}
        </body>
    </html>
  );
}
