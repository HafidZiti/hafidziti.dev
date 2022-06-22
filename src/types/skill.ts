import { FC } from "react";

export interface Skill {
  name: string;
  Icon: FC;
  dabbled?: boolean;
}

export interface MainSkill {
  name: string;
  level: number;
}
