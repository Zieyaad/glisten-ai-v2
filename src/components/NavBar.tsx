"use client";
import WordMark from "@/components/WordMark";
import { Content } from "@prismicio/client";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const NavBar = ({ settings }: NavbarProps) => {
  return (
    <div>
      <nav aria-label="Main" className="p-4 md:p-6">
        <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
          <Link href="/">
            <WordMark />
            <span className="sr-only">Glisten.ai Home Page</span>
          </Link>
          <ul className="flex gap-6">
            {settings.data.navigation.map((item) => {
              if (item.cta_button) {
                return (
                  <li key={item.label}>
                    <ButtonLink field={item.link}>{item.label}</ButtonLink>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <PrismicNextLink
                    field={item.link}
                    className="inline-flex min-h-11 items-center"
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
