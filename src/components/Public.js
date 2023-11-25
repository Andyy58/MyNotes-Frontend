import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>MyNotes</h1>
      </header>
      <main className="public__main">
        <p>
          Notes notes notes notes notes notes etc. u can take and store notes
          and stuff here. awesome.
        </p>
      </main>
      <footer>
        <Link to="/login">Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
