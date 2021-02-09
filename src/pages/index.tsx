import * as React from "react";
import styled from "styled-components";
import avatar from "../images/avatar.png";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

type ChildrenProps = {
  children: React.ReactNode;
};

const TwitterIcon = styled(FaTwitter).attrs({})`
  font-size: 24px;
`;

const LinkedInIcon = styled(FaLinkedin).attrs({})`
  font-size: 24px;
`;

const Title = ({ children }: ChildrenProps) => (
  <h1 className="text-3xl text-gray-700 font-semibold">{children}</h1>
);

const P = ({ children }: ChildrenProps) => (
  <p className="text-lg text-gray-600 font-light">{children}</p>
);

export default () => (
  <main className="p-8 md:p-24 bg-gray-100 min-h-screen border-t-4 border-blue-700">
    <div className="flex flex-col gap-8 md:flex-row md:gap-16 md:items-start">
      <img src={avatar} alt="Avatar" height="132px" width="132px" />
      <div className="space-y-6 max-w-xl">
        <Title>Hugo Cárdenas</Title>
        <P>
          👋 Hi! <br />I am a software developer from Spain, based in Helsinki,
          Finland.
        </P>
        <P>
          Currently working as a consultant in{" "}
          <a
            className="font-medium text-gray-600 hover:text-gray-800"
            href="https://newthings.co"
          >
            newthings.co
          </a>
          , I've been lately helping clients in the health sector and food
          delivery, building some Cool Stuff™.
        </P>
        <P>
          I get excited about building beautiful products where I feel aligned
          to the end value provided to the user.
        </P>
        <P>
          I have experience working across the whole web stack, but these days I
          gravitate towards the frontend side and design.
        </P>
        <div className="flex flex-row items-center space-x-4">
          <a
            href="https://twitter.com/_hugocardenas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="text-gray-400 hover:text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/hugocardenas/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="text-gray-400 hover:text-gray-500" />
          </a>
        </div>
      </div>
    </div>
  </main>
);
