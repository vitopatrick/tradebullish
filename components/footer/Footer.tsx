import CopyRight from "./CopyRight";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-50">
      {/* container for footer */}
      <section className="w-4/5 mx-auto">
        {/* Copyright and term and condition */}
        <CopyRight />
        {/* end of copyright and terms and condition */}
      </section>
      {/* end of container for footer */}
    </footer>
  );
}
