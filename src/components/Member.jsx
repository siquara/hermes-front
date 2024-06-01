import React from 'react';
import PropTypes from 'prop-types';
import { Circle, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Member({ name, githubLink, linkedinLink }) {
  return (
    <div className="flex items-center w-full max-w-[256px] justify-between">
      <p>{name}</p>
      <Circle size={5} className="bg-white rounded-full" />
      <a
        href={githubLink}
        className="border-b-[2px] border-solid border-transparent hover:border-white"
        target="_blank"
      >
        <GithubLogo size={30} />
      </a>
      <a
        href={linkedinLink}
        className="border-b-[2px] border-solid border-transparent hover:border-white"
        target="_blank"
      >
        <LinkedinLogo size={30} />
      </a>
    </div>
  )
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
};