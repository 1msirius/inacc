import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto",
  description: "🇮🇳/acc Manifesto",
};

export default function Manifesto() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <h2>🇮🇳/acc Manifesto</h2>

        <h3>📑 1. Reduce regulatory burdens for startups</h3>
        <h3>💵 2. Tax discounts during the startup phase</h3>
        <h3>📣 3. Champion free speech, no censorship</h3>
        <h3>🗣️ 4. Make English the link language</h3>
        <h3>🚀 5. Increase ISRO & DRDO budgets</h3>
        <h3>⚖️ 6. Reduce corruption, improve transparency</h3>
        <h3>☢️ 7. Expand renewable & nuclear energy</h3>
        <h3>🛂 8. Ease skilled immigration, tighten unskilled</h3>
        <h3>🏛 9. Increase ASI budget to protect heritage</h3>
        <h3>⚖️ 10. Use AI in the judiciary</h3>
        <h3>🏗 11. Develop smart infrastructure</h3>
        <h3>🎓 12. Establish top colleges in every state</h3>
        <h3>🧪 13. Increase R&D investment</h3>
        <h3>🏭 14. Boost manufacturing for self-reliance</h3>
        <h3>🚄 17. Increase public transportation</h3>
        <h3>🛡 18. Increase cybersecurity</h3>
      </div>
    </section>
  );
}
