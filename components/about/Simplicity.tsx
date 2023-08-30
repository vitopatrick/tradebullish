import Link from "next/link";

export default function Simplicity() {
  return (
    //  flex container
    <div className="flex flex-col items-center justify-center gap-4 my-10">
      {/* child One @return text */}
      <div className="text-center space-y-3">
        <h4 className="font-header text-2xl capitalize py-2 font-bold">
          Enjoy the simplicity of money management with NAGAMARKET
        </h4>
        <p className="font-body text-neutral-500 text-xl">
          Use your own Virtual NAGA Card, IBAN Account, send and receive money,
          and much more!
        </p>
      </div>
      {/* end of Child One */}
      {/* Child Two @return Img */}
      <div>
        <img
          src="https://naga.com/_next/image?url=%2Fimages%2Fwhy-choose-naga%2Finvest%2Fimg-5.png&w=1440&q=75"
          alt="trader image"
          className="w-2/3 mx-auto"
        />
      </div>
      {/* end of Child Two */}
      <div>
        <Link
          href="/get-started"
          className="bg-main px-6 py-4 rounded-lg font-body text-white font-bold"
        >
          Create An Account - it's free
        </Link>
      </div>
    </div>
    // end of flex container
  );
}
