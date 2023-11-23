import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center text-center justify-center">
      <div>
        <h1 className="text-[120px] font-black">
          4<span className="text-rose-600">0</span>4
        </h1>
        <h6 className="text-[32px] mb-4">Page not found</h6>
        <Link href="/" className="text-white bg-rose-600 rounded-sm px-6 py-1">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
