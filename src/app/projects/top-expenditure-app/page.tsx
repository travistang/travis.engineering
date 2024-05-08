import { TopExpenditureAppProject } from "@/services/projects/project-metadata/top-expenditure-app";
import { ProjectDetailLayout } from "../_components/project-detail-layout/project-detail-layout";

export default async function TopExpenditureAppDetailPage() {
  return (
    <ProjectDetailLayout project={TopExpenditureAppProject}>
      <h4>Introduction</h4>
      <p>
        The Top Expenditure App is a personal project that I have been using to
        track my daily expenses. It is a simple app that allows me to input
        expenses and categorize them into different categories. The app also
        provides a summary of the total expenses and the expenses for each
        category.
      </p>
      <p>
        The app is built using React, Tailwind CSS. It is a single-page
        Progressive Web App (PWA) that uses Dexie.js (IndexDB) to store the
        data. The app is designed to be simple and easy to use, with a clean and
        minimalistic interface so I can quickly add expenses to the right
        category through the main page.
      </p>
      <h4>Features</h4>
      <ul>
        <li>Input expenses and categorize them into different categories</li>
        <li>Set budget limits for each category</li>
        <li>View summary of total expenses and expenses for each category</li>
        <li>View expenses over time in a chart</li>
        <li>View detailed list of expenses with date and category</li>
        <li>Keep track of regular expenditures and income</li>
      </ul>
      <h4>Outlook</h4>
      <p>
        The app has been very useful for me in tracking my expenses and I would
        like to add more features to it in the future. Such as:
      </p>
      <ul>
        <li>Export data to CSV or PDF</li>
        <li>Support multiple currencies</li>
        <li>Upload records to a remote server</li>
      </ul>
    </ProjectDetailLayout>
  );
}
