import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import interiorImg from "@/assets/services/interior.jpg";
import int1 from "@/assets/services/interior/int1.jpeg";
import int2 from "@/assets/services/interior/int2.jpeg";
import int3 from "@/assets/services/interior/int3.jpeg";
import int4 from "@/assets/services/interior/int4.jpeg";
import int5 from "@/assets/services/interior/int5.jpeg";
import int6 from "@/assets/services/interior/int6.jpeg";

const InteriorDesignPage = () => (
  <ServiceDetailLayout
    num="04"
    title="Interior Design"
    lede="Functional, considered interiors. Spatial planning to the final fitting."
    intro={[
      "Interiors are how a building is actually used. We design for daily life, not for the photograph.",
      "Our approach is holistic — every element from spatial planning and lighting to the final finish. We work across residential and commercial: hospitality interiors, family homes, offices, lounges. The brief comes first, the trends do not.",
      "Where the interior is part of a larger build, our design and construction teams sit in the same office, so handover between the two is invisible.",
    ]}
    capabilities={[
      "Space Planning",
      "Furniture Selection & Custom Design",
      "Lighting Design",
      "Colour Consultation",
      "Material & Finish Selection",
      "Project Coordination",
      "Home Staging",
      "Commercial Interiors",
    ]}
    heroImage={interiorImg}
    gallery={[{ src: int1 }, { src: int2 }, { src: int3 }, { src: int4 }, { src: int5 }, { src: int6 }]}
  />
);

export default InteriorDesignPage;
