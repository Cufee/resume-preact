import { h } from "preact";
import { useErrorBoundary } from "preact/hooks";

const ErrorBoundary = (props) => {
  const [error, resetError] = useErrorBoundary();

  if (error) {
    return (
      <div class="flex flex-col justify-center items-center gap-2">
        <span class="text-2xl font-bold">Oh no! Something went wrong 😭</span>
        <pre class="bg-red-100 p-2 rounded-lg">{error.message}</pre>

        <button class="btn btn-primary" onClick={resetError}>
          Try again
        </button>
      </div>
    );
  }

  return props.children;
};

export default ErrorBoundary;
