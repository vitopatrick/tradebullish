import Link from "next/link";

export default function AuthHeader() {
  return (
    <header className="mb-[8%] p-3 flex items-center justify-between">
      <Link href="/">
        <div className="font-header text-main underline font-bold p-3 text-2xl tracking-widest">
          NAGAMARKETS
        </div>
      </Link>
      <div>
        <Link href="/get-started">
          <button className="font-body bg-main text-white py-3 px-10 rounded-lg">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
