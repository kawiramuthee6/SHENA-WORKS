import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import projectMgmtImg from "@/assets/services/project-management.jpg";

const ProjectManagementPage = () => (
  <ServiceDetailLayout
    num="06"
    title="Project Management"
    lede="End-to-end delivery. One team holding the schedule, the budget, and the brief."
    intro={[
      "Most projects fail at the seams between trades. We remove the seams.",
      "Our project management covers planning and scheduling, resource management, quality assurance, risk management, stakeholder coordination, progress reporting, budget monitoring, and the close-out paperwork most teams skip. From initiation to handover, one project manager owns the timeline and answers the phone.",
      "Whether we are running our own build or supervising another contractor on your behalf, the standard is the same: on time, on budget, on brief.",
    ]}
    capabilities={[
      "Project Planning & Scheduling",
      "Resource Management",
      "Quality Assurance",
      "Risk Management",
      "Stakeholder Coordination",
      "Progress Reporting",
      "Budget Monitoring",
      "Handover & Close-out",
    ]}
    heroImage={projectMgmtImg}
    gallery={[]}
  />
);

export default ProjectManagementPage;
