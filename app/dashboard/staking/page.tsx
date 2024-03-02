import InvestmentCards from "@/components/investments/InvestmentCards";

export default function InvestmentPage() {
  return (
    <section>
      {/* header section */}
      <div className="flex items-center gap-2 flex-col justify-center p-3 font-body text-white my-6">
        <h4 className="text-xl md:text-3xl underline text-center">
          Select a Staking Plan
        </h4>
        <p className="text-neutral-500">
          choose a plan that matches your Staking strategies and will gain your
          beneficial interest.
        </p>
      </div>
      {/* end of header section */}
      {/* investment cards */}
      <InvestmentCards />
      {/* end of investment cards */}
    </section>
  );
}
