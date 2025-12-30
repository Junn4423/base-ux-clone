"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/NavbarNextjs";
import { Footer } from "@/components/FooterNextjs";
import { ProductNav } from "@/components/product-page";

// Auth routes that should not show navbar/footer
const authRoutes = ["/login", "/register", "/forgot-password"];

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Check if current route is an auth route
    const isAuthRoute = authRoutes.some(route => pathname?.startsWith(route));

    if (isAuthRoute) {
        // Auth pages - no navbar/footer
        return <main>{children}</main>;
    }

    // Normal pages - with navbar/footer
    return (
        <>
            <Navbar />
            <ProductNav />
            <main>{children}</main>
            <Footer />
        </>
    );
}
