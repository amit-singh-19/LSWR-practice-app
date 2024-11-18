import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <main
      className="flex flex-col min-h-screen bg-[#FAFDFF]"
    >
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}