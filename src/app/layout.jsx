import dynamic from "next/dynamic";
import { Be_Vietnam_Pro } from "next/font/google";
import { Toaster } from "sonner";

const AppProvidersWrapper = dynamic(
    () => import("@/components/AppProvidersWrapper"), {
    ssr: false,
}
);

const BackToTop = dynamic(() => import("@/components/layout/BackToTop"), {
    ssr: false,
});

// styles
import "../assets/css/style.css";

export const viewport = {
    minimumScale: 1,
    initialScale: 1,
    userScalable: true,
    width: "device-width",
    viewportFit: "cover",
    themeColor: "#67B137",
    colorScheme: "light dark",
    interactiveWidget: "resizes-content",
};

const beVietnamPro = Be_Vietnam_Pro({
    weight: ["200", "300", "400", "500", "600", "700"],
    display: "swap",
    subsets: ["vietnamese"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>

            <body
                className={`${beVietnamPro.className} selection:bg-primary selection:text-white`}
            >
                <AppProvidersWrapper>
                    {children}
                    <BackToTop />
                    <Toaster richColors expand={true} />
                </AppProvidersWrapper>
            </body>
        </html>
    );
}
