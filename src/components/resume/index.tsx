import { h } from "preact";
import { useEffect, useState } from "preact/compat";
import ErrorBoundary from "../errorBoundary";
import fetchResume from "./fetchResume";
import Header from "./header";
import Section from "./section";

const Loading = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowSpinner(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!showSpinner) return <div />;
  return (
    <div class="flex flex-col justify-center items-center">
      <span class="text-gray-400 uppercase font-bold text-2xl">
        Looking for the latest resume
      </span>
      <span class="loading loading-dots loading-lg bg-gray-400"></span>
    </div>
  );
};

export default () => {
  const [loading, setLoading] = useState(true);
  const [resume, setResume] = useState(null);
  useEffect(() => {
    fetchResume().then((data) => {
      setResume(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <ErrorBoundary>
      <div
        id="resume"
        class="flex flex-col gap-8 animate-fade-down animate-once animate-ease-in-out"
      >
        <div>
          <Header info={resume} />
          <div class="flex flex-col md:flex-row gap-4">
            <div id="left" class="flex flex-col gap-4 basis-2/3">
              <Section title="Summary">Summary Content</Section>
              <Section title="Experience">Experience Content</Section>
            </div>
            <div id="right" class="flex flex-col gap-4 basis-1/3">
              <Section title="Skills">Skills Content</Section>
              <Section title="Projects">Projects Content</Section>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
