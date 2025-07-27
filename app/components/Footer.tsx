interface FooterProps {
  copyright: string;
  links: Array<{
    text: string;
    href: string;
  }>;
  credits: {
    text: string;
    link: string;
    linkText: string;
  };
}

export default function Footer({ copyright, links, credits }: FooterProps) {
  return (
    <footer className="py-8 bg-pistachio-dark text-white text-sm">
      <div className="text-center mb-4">{copyright}</div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-6">
        {links.map((link, index) => (
          <div key={index} className="flex items-center">
            <a href={link.href} className="hover:underline transition-colors duration-200">
              {link.text}
            </a>
            {index < links.length - 1 && <span className="hidden md:inline mx-3">|</span>}
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-300 text-center opacity-80">
        {credits.text} <a href={credits.link} className="hover:underline transition-colors duration-200">{credits.linkText}</a>
      </div>
    </footer>
  );
} 