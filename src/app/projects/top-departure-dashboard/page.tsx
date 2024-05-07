import { TopDepartureDashboardProject } from "@/services/projects/project-metadata/top-departure-dashboard";
import { ProjectDetailLayout } from "../_components/project-detail-layout/project-detail-layout";

export default async function TopDepartureDashboardDetailPage() {
  return (
    <ProjectDetailLayout project={TopDepartureDashboardProject}>
      <h4>Introduction</h4>
      <p>
        The TOP Departure Dashboard is originally designed to be shown with a
        large screen hanging on the wall at my place so that I could check the
        departure time of certain buses / trains as well as the time I would
        arrive to several important locations.
      </p>
      <p>
        As the project continues to evolve it is now capable of showing a
        variable of departures and connections based on the time of day,
        location of the device accessing the dashboard, events on my own
        calendar etc.
      </p>
      <p>
        Since the app is highly customized to myself and the data it offers is
        personal, no source code / links to the project would be shared and the
        app is safe-guarded by OAuth authentication.
      </p>
      <h4>Outlook</h4>
      <p>
        I do have a plan to isolate the dashboard from the adaptive data display
        part though, with the dashboard part showing entirely static content and
        the dynamic part become a new React Native App. So stay tuned for more
        updates.
      </p>
    </ProjectDetailLayout>
  );
}
