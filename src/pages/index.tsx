import React from "react";
import { styled } from "twin.macro";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type ChildrenProps = {
  children: React.ReactNode;
};

const TwitterIcon = styled(FaTwitter)`
  font-size: 24px;
`;

const LinkedInIcon = styled(FaLinkedin)`
  font-size: 24px;
`;

const TextBlock = ({ children }: ChildrenProps) => (
  <div tw="space-y-6">{children}</div>
);

const H1 = ({ children }: ChildrenProps) => (
  <h1 tw="text-4xl font-semibold text-gray-800">{children}</h1>
);

const H2 = ({ children }: ChildrenProps) => (
  <h2 tw="text-3xl font-medium text-gray-800">{children}</h2>
);

const H3 = ({ children }: ChildrenProps) => (
  <h3 tw="text-xl font-medium text-gray-800">{children}</h3>
);

const P = ({ children }: ChildrenProps) => (
  <p tw="text-base font-normal leading-relaxed text-gray-600">{children}</p>
);

const Li = ({ children }: ChildrenProps) => (
  <li tw="flex flex-row items-center space-x-2 text-base font-normal leading-relaxed text-gray-600">
    {children}
  </li>
);

const technologies = [
  "Typescript",
  "React",
  "Node.js",
  "CSS-in-JS",
  "AWS / CDK",
];

const IndexPage = () => (
  <main tw="box-border flex flex-col items-center min-h-screen px-6 pt-8 pb-16 bg-white border-t-8 border-b-8 border-blue-600 md:py-16 md:px-16">
    <SEO />
    <div tw="flex flex-col space-y-8 md:space-y-0 md:space-x-16 md:flex-row md:items-start">
      {/* Avatar */}
      <div tw="block w-40 h-40 bg-gray-500 border-4 border-gray-300 rounded-xl">
        <div tw="w-full h-full overflow-hidden rounded-xl">
          <StaticImage
            tw="w-full h-full overflow-hidden rounded-xl"
            src="../images/avatar.png"
            alt="Avatar"
            placeholder="blurred"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Content */}
      <div tw="flex-1 w-full max-w-xl space-y-12">
        {/* Intro */}
        <TextBlock>
          <H1>Hugo Cárdenas</H1>
          <P>
            I am a software developer from Spain, based in Helsinki, Finland. I
            work as a consultant in{" "}
            <a
              tw="font-medium text-blue-600 underline hover:text-blue-700"
              href="https://newthings.co"
            >
              newthings.co
            </a>
            , where lately I've been helping clients in the health- and food
            delivery- sectors to build some{" "}
            <span tw="italic">interesting products</span>.
          </P>
          <P>
            I get excited about building beautiful products where I feel aligned
            to the end value provided to the user.
          </P>
          <P>
            I have experience working across the whole web stack, and these days
            I gravitate most towards the frontend side and design.
          </P>
        </TextBlock>
        {/* Toolkit */}
        <TextBlock>
          <H2>My favourite toolkit</H2>
          <ul tw="space-y-4 text-xl font-light text-gray-500">
            {technologies.map((text) => (
              <Li key={text}>
                <HiArrowRight tw="text-gray-400" />
                <span tw="leading-none ">{text}</span>
              </Li>
            ))}
          </ul>
        </TextBlock>
        {/* Projects */}
        <div tw="space-y-6">
          <H2>Some side projects</H2>
          <div tw="space-y-16">
            <div tw="space-y-6">
              <H3>Historian</H3>
              <P>
                Historian is a game about placing history events in the correct
                chronological order. I started developing this for fun after
                playing games with similar mechanics and lacking an online
                version of it.
              </P>
              <StaticImage
                tw="overflow-hidden border border-gray-200 rounded-md"
                src="../images/website-historian.png"
                alt="Avatar"
                placeholder="blurred"
                objectFit="cover"
              />
            </div>
            <div tw="space-y-6">
              <H3>Ana García Lucero</H3>
              <P>
                Molestiae quae optio labore occaecati consequuntur. Ut iusto in
                dolor eligendi. Veniam ab corporis possimus tempore qui
                molestiae facere doloribus. Non libero dolorem repellat
                voluptatem expedita.
              </P>
              <StaticImage
                tw="overflow-hidden border-gray-200 rounded-md"
                src="../images/website-ana.png"
                alt="Avatar"
                placeholder="blurred"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        {/* Social */}
        <div tw="flex flex-row items-center space-x-6">
          <a
            href="https://twitter.com/_hugocardenas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon tw="text-gray-400 transition-colors duration-200 hover:text-blue-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/hugocardenas/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon tw="text-gray-400 transition-colors duration-200 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;
