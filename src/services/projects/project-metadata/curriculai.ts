import { Project } from "../types";

export const CurriculaiProject: Project = {
    id: "curriculai",
    name: "Curriculai",
    description: "Curriculai is a platform for creating and managing your resume and job applications.",
    startDate: new Date("2024-05-01").getTime(),
    hasDetails: true,
    imageUrl: "/projects/curriculai/cover.png",
    stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
        "Supabase",
        "AWS Cognito",
        "AWS SNS",
        "AWS SES",
        "AWS SQS",
        "AWS Lambda",
        "AWS CDK",
        "Mailgun"
    ],
    links: {
        product: "https://curriculai.app",
    },
    screenshots: []
}