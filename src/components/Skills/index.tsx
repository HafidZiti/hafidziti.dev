import React, { useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Radar } from "react-chartjs-2";
import { Skill } from "../../types/skill";

type Props = {
  skills: Skill[];
};

const dataTemplate: ChartData<"radar"> = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [],
      backgroundColor: "rgba(34, 202, 236, .1)",
      borderColor: "rgba(34, 202, 236, 1)",
    },
  ],
};

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Skills: React.FC<Props> = ({ skills }: Props) => {
  const [data] = useState({
    ...dataTemplate,
    lables: (dataTemplate.labels = skills.map((skill: Skill) => skill.name)),
    datasets: [
      {
        ...dataTemplate.datasets[0],
        data: skills.map((skill: Skill) => skill.level),
      },
    ],
  });

  // Define the main color, it depends of selected theme(White/Dark)
  const color: string = useColorModeValue(
    `rgba(0, 0, 0,`,
    "rgba(255, 255, 255,"
  );

  const customizedOptions: ChartOptions<"radar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: `${color} .9)`,
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
          color: `${color} .2)`,
        },
        ticks: {
          showLabelBackdrop: false, // show or not the background of ticks
          color: `${color} .8)`,
          stepSize: 10, // step to increment the value of the level
          font: {
            size: 12, // size of value of the level
          },
        },
        pointLabels: {
          color: `${color} .8)`,
          font: {
            size: 12, // size of the labels
          },
        },
      },
    },
  };

  return (
    <Box
      pt={10}
      width={{ base: "350px", sm: "500px", md: "600px", lg: "700px" }}
    >
      {"i'm the section of skills "}
      {skills.map((skill: Skill) => (
        <span key={skill.name}>
          {skill.name} - {skill.level}
        </span>
      ))}
      <Radar data={data} options={customizedOptions} />
    </Box>
  );
};
