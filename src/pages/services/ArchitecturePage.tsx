import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import architectureImg from "@/assets/services/architecture.jpg";
import a1 from "@/assets/services/arch/arch1.jpeg";
import a2 from "@/assets/services/arch/arch2.jpeg";
import a3 from "@/assets/services/arch/arch3.jpeg";
import a4 from "@/assets/services/general const/gc2.jpeg";
import a5 from "@/assets/services/general const/gc1.jpeg";
import a6 from "@/assets/projects/dukes-cottages-9.jpg";

const ArchitecturePage = () => (
  <ServiceDetailLayout
    num="03"
    title="Architecture & Consultancy"
    lede="Design that builds. Drawings that translate cleanly to the site."
    intro={[
      "Architecture is a brief, a budget and a piece of land — solved at the same time.",
      "We provide architectural design and professional consultancy: feasibility studies, planning approvals, structural engineering, landscape design and construction supervision. Because we also build, our drawings are made to be built — sized for materials, methods and the realities of the site.",
      "From a single residence to a multi-phase commercial complex, we hold the brief steady through every phase.",
    ]}
    capabilities={[
      "Architectural Design",
      "Feasibility Studies",
      "Building Permits & Approvals",
      "Structural Engineering",
      "Landscape Design",
      "Construction Supervision",
      "3D Visualisation & Modelling",
      "Sustainable Design Solutions",
    ]}
    heroImage={architectureImg}
    gallery={[{ src: a1 }, { src: a2 }, { src: a3 }, { src: a4 }, { src: a5 }, { src: a6 }]}
  />
);

export default ArchitecturePage;
