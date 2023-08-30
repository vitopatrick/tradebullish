import Link from "next/link";
import whyChooseUs from "./why-choose-us";

export default function WhyChooseUs() {
  return (
    <div className="my-12 w-3/4 mx-auto">
      <div className="my-10">
        <h4 className="text-xl text-neutral-500 font-bold md:text-2xl py-3 font-header">
          Why do people choose{" "}
          <span className="font-bold text-main underline">NAGAMARKET</span>
        </h4>
      </div>
      {/* why choose us Grid*/}
      <div className="grid md:grid-cols-4 gap-6 place-content-center place-items-center">
        {whyChooseUs.map((reasons) => (
          <div className="space-y-4" key={reasons.id}>
            <img src={reasons.img} alt="" />
            <div className="space-y-2">
              <h4 className="font-bold text-lg font-header">{reasons.title}</h4>
              <p className="font-body text-neutral-500">{reasons.about}</p>
            </div>
          </div>
        ))}
      </div>
      {/* end of why choose us Grid*/}
      {/* create account button */}
      <div className="my-10">
        <Link
          href="/get-started"
          className="border border-main px-6 py-4 rounded-lg font-body text-main font-bold"
        >
          Create An Account - it's free
        </Link>
      </div>
      {/* end of create account button */}
    </div>
  );
}
