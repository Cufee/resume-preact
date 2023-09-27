import { Resume } from "./resume";

export default async () => {
  try {
    const result = await fetch("/assets/resume.json");
    const resume = await result.json() as Resume;
    return resume;
  } catch (error) {
    throw new Error("Failed to fetch resume");
  }
};
