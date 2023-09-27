export interface Resume {
  header: Header;
  summary: string;
  experience: Position[];
  skills: SkillGroup[];
  projects: Project[];
}

export interface SkillGroup {
  header?: string;
  items: string[];
}

export interface Header {
  name: string;
  email: string;
  slogan?: string;
  links?: Required<Label>[];
}

export interface Position {
  title: string;
  tags?: string[]; // added as badges next to the title
  location: string;
  startDate: string;

  company: Label;
  description?: string;
  achievements: string[];
}

export interface Project {
  name: string;
  repo: Label;
  tags?: string[];
  description: string;
}

export interface Label {
  text: string;
  href?: string;
}
