import { h } from "preact";
import { Header as Info } from "./resume";

interface HeaderProps {
  info: Info;
}

const Header = ({ info }: HeaderProps) => {
  return (
    <div class="flex flex-col gap-1">
      <span class="text-3xl uppercase font-bold text-gray-400">
        {info.name}
      </span>
      <div class="h-0.5 rounded-full bg-gray-300" />
    </div>
  );
};

export default Header;
