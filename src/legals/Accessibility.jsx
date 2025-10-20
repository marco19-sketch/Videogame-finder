export default function Accessibility() {
  return (
    <main
      className="font-sans max-w-3xl mx-auto p-8"
      role="main"
      aria-labelledby="accessibility-heading"
      tabIndex="0">
      <h1 id="accessibility-heading" className="aria-">
        Accessibility Statement
      </h1>
      <p>
        GameQuest aims to make its website accessible to all users, including
        those with disabilities.
      </p>
      <section aria-labelledby="measures-heading">
        <h2 id="measures-heading">Accessibility Measures</h2>
        <ul>
          <li>Keyboard navigation support</li>
          <li>High-contrast colors</li>
          <li>ARIA roles and labels for screen readers</li>
        </ul>
      </section>
      <section aria-labelledby="feedback-heading">
        <h2 id="feedback-heading">Feedback</h2>
        <p>
          If you encounter accessibility issues, please contact us at{" "}
          <a
            href="mailto:marco.brusca1970@gmail.com"
            className="text-cyan-400 underline focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-sm">
            marco.brusca1970@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
