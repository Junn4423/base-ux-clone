// Auth pages layout - No navbar/footer
// This layout is for authentication pages (login, register, forgot-password)
// Route group (auth) allows these pages to have a different layout structure

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
