import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { PersonalProject } from "../../../data/personalProjects";
import { Card } from "../Card";

type PersonalProjectsProps = {
  projects: PersonalProject[];
};

export const PersonalProjects: React.FC<PersonalProjectsProps> = ({
  projects,
}: PersonalProjectsProps) => {
  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        Personal Projects
      </Heading>
      <Text mt={5}>
        Mobile applications I&apos;ve designed, developed, and published on the
        App Store and Google Play.
      </Text>

      <SimpleGrid
        columns={[1, 2, 3]}
        spacingX={12}
        mt={8}
        gridAutoRows="minmax(500px, 1fr)"
      >
        {projects.map((project: PersonalProject, index: number) => (
          <GridItem key={index} h="100%">
            <Card
              experience={{
                title: project.name,
                customer: project.name,
                description: project.description,
                image: project.image || "",
                period: "",
                colors: ["blue", "black"],
                technologies: project.technologies,
              }}
              minHeight={500}
              appStoreLink={project.appStoreLink}
              playStoreLink={project.playStoreLink}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
