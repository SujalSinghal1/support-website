import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "24X7 | Support Page",
  description: "Providing home appliance services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <div className="my-10">{children}</div>
        <Toaster position="top-right" richColors />
      </section>
    </>
  );
}
