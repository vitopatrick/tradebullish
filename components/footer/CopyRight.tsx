export default function CopyRight() {
  return (
    <div className="space-y-10 font-body">
      <p>Copyright © {new Date().getFullYear()} – All rights reserved.</p>
      <div>
        <p>
          NAGAMARKET is a trademark of The NAGAMARKET Group AG, a FinTech
          company publicly listed on the Frankfurt Stock Exchange | WKN: A161NR
          | ISIN: DE000A161NR7.
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
        with NAGAMARKET Trader by following and/or copying or replicating the
        trades of other traders involves high levels of risks, even when
        following and/or copying or replicating the Lead Traders. Such risks
        include the risk that you may be following/copying the trading decisions
        of possibly inexperienced/unprofessional traders, or traders whose
        ultimate purpose or intention, or financial status may differ from
        yours. Before making an investment decision, you should rely on your own
        assessment of the person making the trading decisions and the terms of
        all the legal documentation.
      </div>
      <div className="leading-loose text-neutral-500">
        <span className="font-bold uppercase underline text-black">
          Restricted countries:{" "}
        </span>{" "}
        NAGAMARKET Capital Ltd does not provide services for the residents of
        certain countries, such as Afghanistan, Albania, American Samoa,
        Anguilla, Australia, Austria, Barbados, Belarus, Belgium, Benin,
        Bermuda, British Indian Ocean Territory, Bulgaria, Burkina Faso, Canada,
        Cayman Islands, Central African Republic, China, Christmas Island, Cocos
        (Keeling) Islands, Congo, Congo, The Democratic Republic of the,
        Croatia, Cyprus, Czech Republic, Denmark, Estonia, Falkland Islands
        (Malvinas), Finland, France, Germany, Gibraltar, Greece, Guam, Haiti,
        Heard Island and McDonald Islands, Hungary, Iceland, Iran, Islamic
        Republic of, Ireland, Isle of Man, Israel, Italy, Jamaica, Japan,
        Jersey, Korea, Democratic People's Republic of, Latvia, Libyan Arab
        Jamahiriya, Liechtenstein, Lithuania, Luxembourg, Mali, Malta,
        Montserrat, Mozambique, Myanmar, Netherlands, New Zealand, Norfolk
        Island, Norway, Palestinian Territory, Occupied, Pitcairn, Poland,
        Portugal, Romania, Russian Federation, Saint Helena, Ascension and
        Tristan Da Cunha, San Marino, Senegal, Serbia, Slovakia, Slovenia,
        Somalia, South Georgia and the South Sandwich Islands, South Sudan,
        Spain, Sri Lanka, Sweden, Switzerland, Syrian Arab Republic, Trinidad
        and Tobago, Tunisia, Turks and Caicos Islands, Uganda, Ukraine, United
        Kingdom and any other countries where the citizens have British proof of
        identity (i.e. British Virgin Island, Gibraltar, Isle of Man etc.),
        United States, U.S. Minor Islands, Vanuatu, Virgin Islands, British,
        Virgin Islands, U.S., Yemen, and Zimbabwe.
      </div>
    </div>
  );
}
