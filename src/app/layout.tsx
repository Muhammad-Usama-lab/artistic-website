"use client";

import ReportIncidentForm from "@/components/ReportIncidentForm";
import ScrollToTop from "@/components/ScrollToTop";
import { ReportIncidentModalProvider } from "@/contexts/ReportIncidentModalContext";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <ReportIncidentModalProvider>
            {children}
            <ScrollToTop />
            <ReportIncidentForm />
          </ReportIncidentModalProvider>
        </Providers>
      </body>
    </html>
  );
}