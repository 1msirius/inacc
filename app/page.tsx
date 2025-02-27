import Buttons from "./components/button";

export default function Home() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <h2>Indic Accelerationism</h2>
        <p>
          Indic Accelerationism is a movement inspired by{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Effective_accelerationism"
          >
            e/acc
          </a>{" "}
          to fast-track India’s rise as a technological, manufacturing, and
          economic powerhouse.
        </p>
        <p>
          It emphasizes innovation, deep tech, and sovereignty to restore
          India’s historic status as the &ldquo;
          <a target="_blank" href="#">
            Golden Bird
          </a>
          &rdquo; (Sone Kī Chiḍiyā), symbolizing prosperity, economic strength,
          and global leadership.
        </p>
        <p>
          By accelerating science, AI, tech, space, manufacturing, nuclear, and
          defence, in/acc envisions India leading humanity’s next era.
        </p>
        <Buttons />
        <p>
          Join the in/acc community on{" "}
          <a target="_blank" href="#">
            Discord
          </a>{" "}
          and{" "}
          <a target="_blank" href="#">
            Reddit
          </a>
          , share your ideas and shape India&apos;s accelerated future!
        </p>
      </div>
    </section>
  );
}
