import Link from "next/link";

export default function HeroThree() {
  return (
    //  flex container
    <section className="py-8">
      <div className="w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-4 my-10">
        {/* child One @return text */}
        <div className="md:order-2 flex md:items-start text-center md:text-left items-center  flex-col gap-6">
          <h4 className="font-header text-2xl capitalize py-2 font-bold">
            Dive into trading with low fees and completely free account
          </h4>
          <p className="font-body text-neutral-500 text-xl">
            Use your own IBAN Account, send and receive money, and much more!
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
        <div>
          <img
            src="https://naga.com/_next/image?url=%2Fimages%2Fwhy-choose-naga%2Finvest%2Fimg-1.png&w=1440&q=75"
            alt="trader image"
          />
        </div>
        {/* end of Child Two */}
      </div>
    </section>

    // end of flex container
  );
}
