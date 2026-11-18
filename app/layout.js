import './globals.css';

export const metadata = {
  title: 'Portfolio de arij belaid',
  description: 'DevOps Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}