import { h } from "preact";
import Link from "./link";

const Header = () => (
  <nav class="flex flex-row justify-between bg-gray-50">
    <Link href="https://github.com/cufee" type="dark">
      This app on GitHub
    </Link>
    <Link href="/download">Download as PDF</Link>
  </nav>
);

export default Header;
