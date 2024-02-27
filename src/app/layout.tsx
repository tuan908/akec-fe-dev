import {Footer, Navbar} from "@/components/shared";
import {type Metadata} from "next";
import ReduxProvider from "./ReduxProvider";
import "./main.css";

export const metadata: Metadata = {
  title: {
    default: "AKEC",
    template: "%s | AKEC"
  },
  description: "AKEC, Thương hiệu chuyên về yến sào và các sản phẩm từ yến sào"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <main className="w-full max-w-screen h-full min-h-screen bg-[#F8F0EC] grid layout">
            <Navbar />
            <div
              className="w-full h-full max-w-screen"
              style={{gridArea: "main"}}
            >
              {children}
            </div>
            <Footer />
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
