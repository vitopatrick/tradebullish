import DepositFaq from "@/components/deposit/DepositFaq";
import DepositHistory from "@/components/deposit/DepositHistory";
import DepositForm from "@/components/forms/DepositForm";

export default function DepositPage() {
  return (
    <section>
      <section className="flex p-4 md:flex-row flex-col">
        <DepositForm />
        <DepositFaq />
      </section>
      <DepositHistory />
    </section>
  );
}
