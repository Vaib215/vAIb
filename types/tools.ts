import { icons } from "lucide-react";

export type Tool = {
  name: string;
  path: string;
  description: string;
  image: string;
  iconName: keyof typeof icons;
};
