import React from "react";
import Social from "./Social";

const Socials = () => {
  return (
    <nav>
      <ul className="grid grid-cols-4 gap-4 items-center">
        <Social title="Website" link="https://www.louisyoung.co.uk" icon="/icons/website.svg" />
        <Social title="GitHub" link="https://github.com/louis-young" icon="/icons/github.svg" />
        <Social title="Twitter" link="https://twitter.com/louisryoungg" icon="/icons/twitter.svg" />
        <Social title="LinkedIn" link="https://www.linkedin.com/in/louis-r-young" icon="/icons/linkedin.svg" />
      </ul>
    </nav>
  );
};

export default Socials;
