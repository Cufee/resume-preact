import { h } from "preact";

interface SectionProps {
  title: string;
  children: any;
  id?: string;
}

const Section = ({ title, children, id }: SectionProps) => {
  return (
    <div class="flex flex-col gap-1" id={id || title.toLowerCase()}>
      <span class="text-3xl uppercase font-bold text-gray-400">{title}</span>
      <div class="h-0.5 rounded-full bg-gray-300" />
      <div>{children}</div>
    </div>
  );
};

export default Section;
