import { GithubIcon, LinkedInIcon, MediumIcon } from "@/assets";
import React from "react";
import { Link } from "react-router-dom";

export default function BottomContainer({ children }: React.ComponentProps<"div">) {
  return (
    <div className="w-full h-1/2 bg-brand-primary-light absolute z-[8] bottom-0 flex flex-col items-center pt-[69px] pb-[30px] justify-between">
      <p className="w-[579px] text-[16px] text-center">
        Hi, I’m Dineth Ekanayaka—a Software Engineer driven by innovation and a
        passion for creating meaningful experiences. Dive into my world of
        ideas, and let’s craft something extraordinary together!
      </p>
      {children}
      <div className="flex justify-between w-[426px] items-center">
        <Link to="https://www.linkedin.com/in/dinethpiyumantha" target='_blank'>
          <LinkedInIcon className="hover:scale-105 transition" />
        </Link>
        <Link to="https://www.github.com/dinethpiyumantha" target='_blank'>
          <GithubIcon className="hover:scale-105 transition" />
        </Link>
        <Link to="https://www.medium.com/@dinethpiyumantha" target='_blank'>
          <MediumIcon className="hover:scale-105 transition" />
        </Link>
      </div>
      <p className="text-[9px] text-center">
        © 2025 by Dineth Ekanayaka. All rights reserved.
      </p>
    </div>
  );
}
