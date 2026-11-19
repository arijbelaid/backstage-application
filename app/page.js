import ThemeToggle from './components/ThemeToggle';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="container">
      <ThemeToggle />
      <h1>arij belaid</h1>
      <h2>DevOps & Cloud Engineer</h2>
      <p>Contact : aarijbelaid@gmail.com</p>
      <Certifications />
      <Projects />
    </main>
  );
}