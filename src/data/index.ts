
export type TResource = {
  id: number;
  title: string;
  description: string;
  type: "link" | "video" | "pdf";
  tags: string[];
};

export const RESOURCES: TResource[] = [
  {
    id: 1,
    title: "The ultimate guide to Workplace Chat",
    description: "Sample Topic",
    type: "link",
    tags: ["Secure Base"],
  },
  {
    id: 2,
    title: "The ultimate guide to Workplace Chat",
    description: "Sample Topic",
    type: "video",
    tags: ["Secure Base"],
  },
  {
    id: 3,
    title: "The ultimate guide to Workplace Chat",
    description: "Sample Topic",
    type: "link",
    tags: ["Secure Base"],
  },
  {
    id: 4,
    title: "The ultimate guide to Workplace Chat",
    description: "Sample Topic",
    type: "video",
    tags: ["Wellbeing"],
  },
  {
    id: 5,
    title: "The ultimate guide to Workplace Chat",
    description: "Sample Topic",
    type: "pdf",
    tags: ["Secure Base"],
  },
  {
    id: 6,
    title: "Taking stock of mental health in your workplace",
    description: "Sample Topic",
    type: "pdf",
    tags: ["Secure Base"],
  },
];
