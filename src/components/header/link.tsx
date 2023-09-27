import { h } from "preact";

interface LinkProps {
  href: string;
  children: any;
  active?: boolean;
  type?: "dark" | "light";
}

const Link = ({ href, children, active, type = "light" }: LinkProps) => {
  const c = `btn ${type == "dark" && "btn-neutral"} rounded-none no-animation ${
    active ? "btn-active" : ""
  }`;
  return (
    <a href={href} class={c}>
      {children}
    </a>
  );
};

export default Link;
