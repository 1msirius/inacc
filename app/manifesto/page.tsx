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
        <p>
          The in/acc Manifesto outlines our vision, principles, and strategy to
          accelerate India. Continually crowdsourced by thousands of
          contributors like you.
        </p>
        <p>
          Join the{" "}
          <a target="_blank" href="#">
            in/acc community
          </a>{" "}
          and share your ideas.
        </p>
        <h3>📑 1. Reduce regulatory burdens for startups</h3>
        <p>
          India’s startup ecosystem is held back by bureaucratic red tape,
          complex tax compliance, and excessive licensing requirements. By
          simplifying regulations and exempting startups from restrictive
          policies like angel tax and compliance-heavy norms, India can unlock
          its entrepreneurial potential.
        </p>
        <h3>💵 2. Tax discounts during the startup phase</h3>
        <p>
          The initial years of a startup are the hardest. India should introduce
          a 0% corporate tax for the first three years of a startup’s life,
          allowing entrepreneurs to focus on building great companies instead of
          struggling with financial burdens.
        </p>
        <h3>📣 3. Champion free speech, no censorship</h3>
        <p>
          A thriving democracy relies on free speech. Censorship laws and
          internet shutdowns limit innovation, restrict discourse, and harm
          India’s global reputation. Protecting freedom of expression ensures
          that new ideas, criticism, and innovation can flourish.
        </p>
        <h3>🗣️ 4. Make English the link language</h3>
        <p>
          India is linguistically diverse, but a common language is necessary
          for economic growth and global competitiveness. English, already
          widely spoken, should be promoted as the official link language,
          ensuring uniformity in business, governance, and higher education.
        </p>
        <h3>🚀 5. Increase ISRO & DRDO budgets</h3>
        <p>
          India’s space and defense sectors have immense potential, but limited
          budgets slow down research and innovation. Investing in ISRO and DRDO
          can drive technological advancements, create high-paying jobs, and
          establish India as a global leader in aerospace and defense.
        </p>
        <h3>⚖️ 6. Reduce corruption, improve transparency</h3>
        <p>
          Corruption hinders economic growth and discourages foreign investment.
          India must strengthen anti-corruption measures by digitizing
          governance, increasing accountability, and using blockchain for public
          contracts to ensure transparency.
        </p>
        <h3>☢️ 7. Expand renewable & nuclear energy</h3>
        <p>
          India’s energy demand is rising, yet coal dominates. By expanding
          investments in nuclear power, solar, and wind energy, India can
          achieve long-term energy security, reduce pollution, and lower costs.
        </p>
        <h3>🛂 8. Ease skilled immigration, tighten unskilled</h3>
        <p>
          India should attract top global talent while managing unregulated
          migration. Fast-tracking visas for skilled professionals in AI,
          biotech, and deep tech will bring expertise, while stricter policies
          on unskilled immigration will ensure economic balance.
        </p>
        <h3>🏛 9. Increase ASI budget to protect heritage</h3>
        <p>
          India’s historical sites are underfunded and deteriorating. Increasing
          the Archaeological Survey of India’s budget can help restore,
          preserve, and promote tourism, boosting the economy and national
          pride.
        </p>
        <h3>⚖️ 10. Use AI in the judiciary</h3>
        <p>
          India’s court system has a backlog of 50 million cases. AI can help
          automate case processing, assist judges with legal research, and
          reduce delays, ensuring faster justice for citizens.
        </p>
        <h3>🏗 11. Develop smart infrastructure</h3>
        <p>
          India’s cities struggle with traffic congestion, pollution, and poor
          planning. By investing in smart infrastructure, including automated
          traffic systems, efficient waste management, and digital governance,
          India can modernize its urban landscape.
        </p>
        <h3>🎓 12. Establish top colleges in every state</h3>
        <p>
          Most premier institutes like IITs and IIMs are concentrated in a few
          states, leaving many regions underserved. Every Indian state should
          have world-class universities and research institutes to ensure equal
          access to high-quality education.
        </p>
        <h3>🧪 13. Increase R&D investment</h3>
        <p>
          India spends less than 1% of GDP on R&D, far behind global leaders.
          Raising this to 3-5% can drive scientific breakthroughs, innovation,
          and technological self-reliance.
        </p>
        <h3>🏭 14. Boost manufacturing for self-reliance</h3>
        <p>
          Overreliance on imports makes India vulnerable to global supply chain
          disruptions. Strengthening domestic manufacturing, particularly in
          semiconductors, defense, and electronics, will create jobs and enhance
          economic security.
        </p>
        <h3>🚄 17. Increase public transportation</h3>
        <p>
          Urban congestion and pollution are major issues. Expanding metros,
          high-speed rail, and electric buses can reduce traffic, cut emissions,
          and make cities more livable.
        </p>
        <h3>🛡 18. Increase cybersecurity</h3>
        <p>
          Cyber threats are rising, yet India lacks robust cybersecurity
          policies. Strengthening digital security, investing in cybersecurity
          startups, and training skilled professionals are critical to
          protecting national and personal data.
        </p>
        <h3>🏫 17. Improve government schools</h3>
        <p>
          Most Indian students attend government schools, yet poor
          infrastructure, untrained teachers, and outdated curriculums hold them
          back. Investing in teacher training, modern classrooms, and digital
          learning can uplift education quality nationwide.
        </p>
        <h3>🥚 18. Introduce eggs in mid-day meals</h3>
        <p>
          Malnutrition is a silent crisis affecting millions of children. Adding
          eggs to mid-day meal programs ensures students receive vital
          nutrition, improving their health and learning outcomes.
        </p>
      </div>
    </section>
  );
}
