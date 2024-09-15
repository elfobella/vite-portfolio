import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

function App() {


  return (
    <div>
      <RightCards />
      <div className="flex items-center justify-center max-w-7xl min-h-screen mx-auto">
        <div className="flex gap-3">
          <AnimatedSection />
        </div>
      </div>
    </div>
  );
}

export default App
