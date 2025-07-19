import Navbar2 from "@/components/Navbar2";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col min-h-screen">
        <Navbar2 />
        
        <main className="flex-1 overflow-y-auto pb-8">
          <div className="h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}