import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">Go back to home</Link>
    </section>
  );
}
