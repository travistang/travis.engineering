export type ProjectScreenshot = {
  url: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  // Indicate project is part of TOP or not
  isTop?: boolean;
  // Indicate if there's a details page for this project
  hasDetails?: boolean;
  description: string;
  startDate: number;
  endDate?: number;
  stacks: string[];
  links: {
    sourceCode?: string;
    product?: string;
  };
  imageUrl: string;
  screenshots: ProjectScreenshot[];
};
