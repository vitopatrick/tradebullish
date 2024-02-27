export default function CopyRight() {
  return (
    <div className="space-y-10 font-body">
      <p>Copyright © {new Date().getFullYear()} – All rights reserved.</p>
      <div>
        <p>
          cryptocurrency is a trademark of The cryptocurrency Group AG, a
          FinTech company publicly listed on the Frankfurt Stock Exchange | WKN:
          A161NR | ISIN: DE000A161NR7.
        </p>
      </div>
      <div className="leading-loose text-neutral-500">
        <span className="font-bold uppercase underline text-black">
          RISK WARNING:
        </span>{" "}
        Derivatives are complex instruments and come with a high risk of losing
        money rapidly due to leverage. You should consider whether you
        understand how derivatives work and whether you can afford to take the
        high risk of losing your money. This is not investment advice. Trading
        with cryptocurrency Trader by following and/or copying or replicating
        the trades of other traders involves high levels of risks, even when
        following and/or copying or replicating the Lead Traders. Such risks
        include the risk that you may be following/copying the trading decisions
        of possibly inexperienced/unprofessional traders, or traders whose
        ultimate purpose or intention, or financial status may differ from
        yours. Before making an investment decision, you should rely on your own
        assessment of the person making the trading decisions and the terms of
        all the legal documentation.
      </div>
    </div>
  );
}
