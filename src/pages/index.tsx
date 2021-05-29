import React from "react";
import tw, { styled } from "twin.macro";
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

const Root = tw.main`
  box-border 
  flex 
  flex-col 
  items-center 
  min-h-screen 
  px-6 
  pt-8 
  pb-16 
  bg-white 
  border-t-8 
  border-b-8 
  border-blue-600 
  md:py-16 
  md:px-16
`;

const TextBlock = tw.div`space-y-6`;

const H1 = tw.h1`text-4xl font-semibold text-gray-800`;

const H2 = tw.h2`text-3xl font-medium text-gray-800`;

const H3 = tw.h3`text-xl font-medium text-gray-800`;

const P = tw.p`text-base font-normal leading-relaxed text-gray-600`;

const Li = tw.li`flex flex-row items-center space-x-2 text-base font-normal leading-relaxed text-gray-600`;

const ProjectLink = styled.a.attrs({
  className: "group",
  children: (
    <>
      Go to site{" "}
      <span tw="group-hover:translate-x-2 transform transition-transform">
        →
      </span>
    </>
  ),
  target: "_blank",
  rel: "noopener noreferrer",
})`
  ${tw`block text-blue-600 hover:text-blue-700`}
`;

const ProjectTitleBlock = tw.div`space-y-1`;

const ProjectSubtitle = tw.div`text-sm text-gray-400`;

const ProjectImageOverlay = () => (
  <div
    className="group"
    tw="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-black bg-opacity-0 hover:bg-opacity-40 transition-colors duration-200"
  >
    <div tw="text-transparent font-semibold transform translate-y-2 group-hover:(text-white translate-y-0) transition duration-200">
      Go to site →
    </div>
  </div>
);

const technologies = [
  "Typescript",
  "React",
  "Node.js",
  "CSS-in-JS",
  "AWS / CDK",
];

const IndexPage = () => (
  <Root>
    <SEO />
    <div tw="flex flex-col space-y-8 md:space-y-0 md:space-x-16 md:flex-row md:items-start">
      {/* Avatar */}
      <div tw="block w-40 h-40 bg-gray-500 border-4 border-gray-300 rounded-xl">
        <div tw="w-full h-full overflow-hidden rounded-xl">
          <StaticImage
            src="../images/avatar.png"
            alt="Avatar"
            placeholder="blurred"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Content */}
      <div tw="flex-1 w-full max-w-xl space-y-12 flex flex-col">
        {/* Intro */}
        <TextBlock>
          <H1>Hugo Cárdenas</H1>
          <P>
            I am a software developer from Spain, based in Helsinki, Finland. I
            work as a consultant in{" "}
            <a
              href="https://newthings.co"
              target="_blank"
              rel="noopener noreferrer"
              tw="font-medium text-blue-600 hover:text-blue-700"
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
                <span tw="leading-none">{text}</span>
              </Li>
            ))}
          </ul>
        </TextBlock>
        {/* Projects */}
        <div tw="space-y-6">
          <H2>Some side projects</H2>
          <div tw="space-y-16">
            <div tw="space-y-6">
              <ProjectTitleBlock>
                <H3>Historian</H3>
                <ProjectSubtitle>
                  React · GatsbyJS · Tailwind CSS
                </ProjectSubtitle>
              </ProjectTitleBlock>
              <P>
                Historian is a game about placing history events in the correct
                chronological order. I started developing this for fun after
                playing games with similar mechanics and lacking an online
                version of it.
              </P>
              <ProjectLink href="https://historianthegame.com" />
              <a
                href="https://historianthegame.com"
                target="_blank"
                rel="noopener noreferrer"
                tw="block"
              >
                <div tw="overflow-hidden border border-gray-200 rounded-md relative">
                  <StaticImage
                    src="../images/website-historian.png"
                    alt="Historian"
                    placeholder="blurred"
                    objectFit="cover"
                    style={{}}
                  />
                  <ProjectImageOverlay />
                </div>
              </a>
            </div>
            <div tw="space-y-6">
              <ProjectTitleBlock>
                <H3>Ana García Lucero</H3>
                <ProjectSubtitle>
                  React · GatsbyJS · styled components
                </ProjectSubtitle>
              </ProjectTitleBlock>
              <P>
                Molestiae quae optio labore occaecati consequuntur. Ut iusto in
                dolor eligendi. Veniam ab corporis possimus tempore qui
                molestiae facere doloribus. Non libero dolorem repellat
                voluptatem expedita.
              </P>
              <ProjectLink href="https://anagarcialucero.com" />
              <a
                href="https://anagarcialucero.com"
                target="_blank"
                rel="noopener noreferrer"
                tw="block"
              >
                <div tw="overflow-hidden rounded-md relative">
                  <StaticImage
                    src="../images/website-ana.png"
                    alt="Ana García Lucero"
                    placeholder="blurred"
                    objectFit="cover"
                  />
                  <ProjectImageOverlay />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Social */}
        <div tw="flex flex-col  border-red-500 space-y-2">
          <P>Get in touch!</P>
          <div tw="flex flex-row items-center space-x-6 ">
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
    </div>
  </Root>
);

export default IndexPage;
