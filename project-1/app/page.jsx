import Image from "next/image";
import Project from "./Components/Project"; // Correct import path and capitalization

export default function HomePage() {
  return (
    <div>
      <Project /> {/* Use the component with an uppercase name */}
    </div>
  );
}
