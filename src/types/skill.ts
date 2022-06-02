export type Skill = {
  name: string;
  Icon: any; // It's a react component, comes from react-icons lib
  dabbled?: boolean;
};

export type MainSkill = {
  name: string;
  level: number;
};
