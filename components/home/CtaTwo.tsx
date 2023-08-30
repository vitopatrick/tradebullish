import Link from "next/link";

export default function CtaTwo() {
  return (
    <section className="bg-main py-10">
      <div className="text-white w-2/4 mx-auto text-center space-y-6">
        <h4 className="font-header my-4 font-semibold text-2xl md:text-4xl">
          Start With Nagamarkets Today
        </h4>
        <div>
          <Link
            href="/get-started"
            className="font-body bg-white text-main rounded-lg p-4 my-4"
          >
            Create An Account
          </Link>
        </div>
      </div>
    </section>
  );
}
