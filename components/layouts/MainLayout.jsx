import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="font-serif bg-gray-100 w-full py-5 min-h-max">
      <div className="rounded-md shadow-md w-5/12 mx-auto bg-slate-50">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
