import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";
import Provider from "./provider";
import { Wix_Madefor_Display } from "next/font/google";

const inter3 = Wix_Madefor_Display({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "LiftCode AI - The best fullstack AI code generator",
  description: "The best fullstack AI code generator. A brinpage software product.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter3.className}>
        <ConvexClientProvider>
          <Provider>
            {children}
          </Provider>  
        </ConvexClientProvider>
      </body>
    </html>
  );
}
