"use client";
const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900 z-10">
      <div className="flex justify-between items-center p-4">
        <div className="w-1/5">
          {/* Empty div for spacing */}
        </div>
        <div className="flex w-3/5 justify-evenly">
          <button
            className="text-white hover:text-neutral-600 font-bold"
            onClick={() => scrollToSection("profile-picture")}
          >
            Home
          </button>
          <button
            className="text-white hover:text-neutral-600 font-bold"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="text-white hover:text-neutral-600 font-bold"
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>
          <button
            className="text-white hover:text-neutral-600 font-bold"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className="text-white hover:text-neutral-600 font-bold"
            onClick={() => scrollToSection("experiences")}
          >
            Experience
          </button>
          <button
            className="text-white hover:text-neutral-600 font-bold"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="text-white hover:text-neutral-600 font-bold"
            onClick={() => scrollToSection("extra")}
          >
            Extra
          </button>
          <button
            className="text-white hover:text-neutral-600 font-bold"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
        <div className="w-1/5">
          {/* Empty div for spacing */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;