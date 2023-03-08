import { Outlet } from "react-router";
import Navbar from "./components/global/Navbar";
export default function Layout() {
  return (
    <div className={`relative z-0`}>
      <Navbar />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
