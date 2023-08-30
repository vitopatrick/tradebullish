import investmentplans from "@/lib/investmentplans";
import Link from "next/link";

export default function InvestmentCards() {
  return (
    // parent div container
    <section className="md:grid grid-cols-4 gap-3 p-4">
      {investmentplans.map((plan) => (
        <div
          key={plan.id}
          className="bg-sideBar space-y-4 rounded-lg p-3 hover:shadow-main transition-all hover:shadow-sm ease-in-out hover:border hover:border-main hover:scale-105"
        >
          <h4 className="text-neutral-400 md:text-2xl text-2xl font-header font-semibold">
            {plan.name}
          </h4>
          <h4 className="text-neutral-200 text-4xl font-header font-bold">
            {plan.minAmount}
          </h4>
          <p className="font-header text-neutral-400 underline">
            With a return of:{plan.return}
          </p>
          <p className="font-header text-neutral-400 underline">
            last for only:{plan.duration}
          </p>
          <div className="py-5">
            <Link
              href="/dashboard/deposit"
              className="bg-main rounded-lg px-4 py-3 w-full font-header text-white font-bold"
            >
              Get started
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
