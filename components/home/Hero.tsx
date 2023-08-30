import Link from "next/link";

export default function Hero() {
  return (
    //  flex container
    <section className="p-5">
      <div className="flex flex-col items-center justify-center gap-4 my-10">
        {/* child One @return text */}
        <div className="text-center space-y-6">
          <h4 className="font-header text-4xl capitalize py-2 font-bold">
            Everything a trader needs in one platform
          </h4>
          <p className="font-body text-neutral-500 text-xl">
            At NAGAMARKET, we believe that everyone should have{" "}
            <span className="font-bold text-black underline capitalize">
              {" "}
              easy, fast and free access
            </span>{" "}
            to the global financial markets.
          </p>
          <p className="font-body text-neutral-500 text-xl">
            That’s why we’ve built{" "}
            <span className="font-bold underline capitalize text-black">
              {" "}
              the most powerful app for finance.
            </span>
          </p>
          <div>
            <Link
              href="/get-started"
              className="bg-main px-6 py-4 rounded-lg font-body text-white font-bold"
            >
              Create An Account - it's free
            </Link>
          </div>
        </div>
        {/* end of Child One */}
        {/* Child Two @return Img */}
        <div className="my-8">
          <img
            src="https://naga.com/_next/image?url=%2Fimages%2Fwhy-choose-naga%2Finvest%2Fimg-3.png&w=1440&q=75"
            alt="trader image"
            className="w-2/4 mx-auto"
          />
        </div>
        {/* end of Child Two */}
      </div>
    </section>

    // end of flex container
  );
}
