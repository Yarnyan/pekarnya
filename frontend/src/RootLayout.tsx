
import SideBar from "./module/sidebar/Sidebar";
import Header from "./module/header/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex relative flex-column">
      <div className="absolute">
        <SideBar />
      </div>
      <div className="w-full">
        <div className="flex-1 overflow-x-hidden min-h-screen ml-20 sm:ml-0">
          <div className="flex flex-col justify-between px-4 sm:px-2 pt-4">
            <div className="max-w-7xl self-center w-full flex flex-col">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// px-4 sm:px-8 pt-6 main