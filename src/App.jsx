import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Myself from "./assets/myself.jpeg"
import LeftCards from "./LeftCards";
import RightCards from "./RightCards";
import Socials from "./Socials";

function App() {

  const [logoText,setLogoText] = useState("")

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
