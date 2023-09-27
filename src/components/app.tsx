import { h } from "preact";
import { Suspense } from "preact/compat";

import Header from "./header";
import Resume from "./resume";

const App = () => (
  <div id="app" class="min-h-screen">
    <Header />
    <main class="max-w-7xl p-4 mx-auto">
      <Resume />
    </main>
  </div>
);

export default App;
