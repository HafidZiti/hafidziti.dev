import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Experience } from "../../types/experience";
import { Card } from "../Card";

type ProjectsProps = {
  experiences: Experience[];
};

export const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {
  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        Projects
      </Heading>
      {/* Fixme */}
      <Text>
        The most relevant projects I&apos;ve worked on, my daily tasks was:
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacingX={12}>
        {props.experiences.map((exp: Experience, index: number) => {
          const minHeight = index > 2 ? 537 : 614;
          return (
            <GridItem key={index}>
              <Card experience={exp} minHeight={minHeight} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  );
};
