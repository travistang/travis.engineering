import { CurriculaiProject } from "@/services/projects/project-metadata/curriculai";
import classNames from "classnames";
import { ProjectDetailLayout } from "../_components/project-detail-layout/project-detail-layout";

enum CheckboxState {
    Ongoing,
    InProgress,
    Completed
}
const checkboxStateClassName: Record<CheckboxState, string> = {
    [CheckboxState.Ongoing]: "border-white-dark bg:border-white",
    [CheckboxState.InProgress]: "border-yellow-500 bg-yellow-500",
    [CheckboxState.Completed]: "border-green-500 bg-green-500",
}
const Checkbox = ({ state }: { state: CheckboxState }) => {
    return (
        <div className={classNames(
            "rounded-full aspect-square h-4 w-4 border-2",
            checkboxStateClassName[state],
        )} />
    )
}
export default function CurriculaiPage() {
    return (
        <ProjectDetailLayout project={CurriculaiProject}>
            <h4>Introduction</h4>
            <p>
                Curriculai is AI-powered resume creaton and versioning assistant as well as a job application tracking system and job posting analysis tool.
                It aims to assist software engineers on their job search by leveraging the recent advancement of recent advancement of Large Language Models (LLMs).
            </p>

            <h4>Features and roadmaps</h4>
            <p>The following describes</p>
            <ul>
                <li></li>
            </ul>
        </ProjectDetailLayout>
    );
}