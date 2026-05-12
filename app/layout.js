import './globals.css';

export const metadata = {
  title: 'Prathyusha Gundlapally | AI Engineer',
  description:
    'AI Engineer portfolio showcasing production-grade AI chatbots, multi-agent systems, and data products.',
  metadataBase: new URL('https://example.vercel.app'),
  openGraph: {
    title: 'Prathyusha Gundlapally | AI Engineer',
    description:
      'I build production-grade AI chatbots, multi-agent systems, and data products.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prathyusha Gundlapally | AI Engineer',
    description:
      'I build production-grade AI chatbots, multi-agent systems, and data products.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
