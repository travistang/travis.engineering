import { TopNutritionAppProject } from "@/services/projects/project-metadata/top-nutrition-app";
import { ProjectDetailLayout } from "../_components/project-detail-layout/project-detail-layout";

export default async function TopNutritionAppDetailPage() {
  return (
    <ProjectDetailLayout project={TopNutritionAppProject}>
      <h4>Introduction</h4>
      <p>
        The TOP Nutrition App is a Progressive Web app (PWA) written in React
        (TypeScript), with all of its data stored locally using Dexie.js
        (IndexDB). The idea first arise in 2022 when I was looking for a
        solution to track macro-nutrients intake to help losing weight. Instead
        of using the existing apps I found on app store, I would like to have
        the data in my full control and be kept entirely locally. Additionally I
        would like to implement features based on my own need, therefore I
        decided to roll out my own solution, and the result is this app.
      </p>
      <p>
        Despite being a &quot;nutrition app&quot;, it is also capable of
        tracking your workout sets (which revolves around weight-lifting
        workouts), food containers (which is a feature I added to help me track
        my meal prep), and even an achievement system added in to motivate
        myself to achieve various goals.
      </p>
      <h4>Features</h4>
      <p>Here is an non-exhaustive list of what this app can do:</p>
      <ul>
        <li>Daily food intake logging</li>
        <li>Workout sets logging</li>
        <li>
          Visualize weights used / volumes trend for strength training exercises
        </li>
        <li>Track food containers</li>
        <li>Measurement logging</li>
        <li>Meal prep functionality</li>
        <li>Track food stock (incomplete)</li>
        <li>Achievement system (incomplete)</li>
      </ul>
      <h4>Design decisions</h4>
      <p>
        I was eager to start dieting in Summer 2022 and I strive to prevent
        myself from actually starting to diet by waiting to finish an app that
        takes forever to start functioning. Therefore, the initial goal is to
        build an app that can log the food intake and be available on my phone
        as soon as possible. Since I am already familiar with React and I know I
        can host an app on GitHub Page, I decided it to be a PWA written in
        React. To reduce extra setup of servers / databases and keep the data
        within the device, I decided to use IndexDB to store the data locally.
      </p>
      <h4>Significance</h4>
      <p>
        Although there are some features that are still in progress and there
        are a few minor bugs that I hardly find time to fix (since they
        don&apos;t really affect usability),{" "}
        <b>it actually helped me shredding 12kg</b> (76kg to 64kg) and I have
        been using it daily since 2022 to track my workouts and food
        consumption. Of course, your own determination and discipline are still
        the key of success in losing weight and no apps or tools could help you
        if you have neither of those. But as a developer, building my own
        nutrition app that could help myself out with noticeable results is
        still one of the things I am proud of.
      </p>
      <h4>Outlook</h4>
      <p>
        Since the app has fulfilled its purpose and I already have built a habit
        of logging my food consumptions and workouts. I decided it would be a
        good time to take this idea one step further: I would rebuild the most
        frequently used features with React Native and distribute it on App
        Store. This does not mean I will stop maintaining the PWA version nor
        does it imply I find it difficult to maintain the existing code base.
        But rather:
      </p>
      <ul>
        <li>
          Based on the experience I acquired from developing this app, I am
          confident in fine-tuning the data structure to make it more
          extensible.
        </li>
        <li>
          There are features that I would like to implement that is impossible
          to achieve in a PWA. For example a lock screen widget that shows the
          timer and home screen widget that shows the current calories
          consumption.
        </li>
        <li>
          It would be a good chance to pick up React Native again and test my
          adaptability of using new frameworks / environments.
        </li>
        <li>I could distribute and potentially monetize it.</li>
      </ul>
      <p>
        After all this would not disrupt my diet effort since I already have
        this working PWA and I will continue to maintain it until the native
        version is complete and stable enough to replace the PWA.
      </p>
    </ProjectDetailLayout>
  );
}
