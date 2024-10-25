import React from "react";
import "../../../styles/layout/link-footer.css";

interface Link {
  text: string;
  href: string;
  comingSoon?: boolean; // Optional property for "Coming Soon" status
}

interface LinkListProps {
  title: string;
  links: Link[];
}

const linksData = [
  {
    title: "Plan Your Wedding",
    links: [
      { text: "Venues and vendors", href: "/link" },
      { text: "Guest list", href: "/link", comingSoon: true },
      { text: "Wedding websites", href: "/link", comingSoon: true },
      { text: "Registry", href: "/link", comingSoon: true },
      // { text: "Budget", href: "/link", comingSoon: true },
      { text: "Seating chart", href: "/link", comingSoon: true },
      { text: "Mobile app", href: "/link", comingSoon: true },
    ],
  },
  {
    title: "About",
    links: [
      { text: "Our Story", href: "/about-us" },
      { text: "Become a Tie The Knot Vendor", href: "/press" },
      { text: "Reviews", href: "/reviews" },
      { text: "Careers", href: "/careers" },
      // { text: "Press", href: "/press" },
    ],
  },
  {
    title: "Advice and Support",
    links: [
      { text: "FAQs", href: "/faq" },
      { text: "Contact Us", href: "/contact" },
      { text: "Support Center", href: "/support" },
      { text: "Expert Advice", href: "/support" },
    ],
  },
];

const LinkList: React.FC<LinkListProps> = ({ title, links }) => (
  <section className="footer-column">
    <div className="footer-link-button-link">
      <h5>{title}</h5>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} aria-label={link.text}>
              {link.text}
              {link.comingSoon && (
                <span className="coming-soon"> Coming Soon</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const LinkFooter: React.FC = () => {
  return (
    <div className="link-footer">
      <div className="link-footer-sec">
        {linksData.map((section, index) => (
          <LinkList key={index} title={section.title} links={section.links} />
        ))}
      </div>
    </div>
  );
};

export default LinkFooter;
