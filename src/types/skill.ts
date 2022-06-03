export interface Skill {
  name: string;
  Icon: any; // It's a react component, comes from react-icons lib
  dabbled?: boolean;
}

export interface MainSkill {
  name: string;
  level: number;
}
