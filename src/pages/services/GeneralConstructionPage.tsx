import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import heroImg from "@/assets/services/general const/gc-hero.jpeg";
import gc1 from "@/assets/services/general const/gc1.jpeg";
import gc2 from "@/assets/services/general const/gc2.jpeg";
import gc3 from "@/assets/services/general const/gc3.jpeg";
import gc4 from "@/assets/services/general const/gc4.jpeg";
import gc5 from "@/assets/services/general const/gc5.jpeg";
import gc6 from "@/assets/services/general const/gc6.jpeg";
import gc7 from "@/assets/services/general const/gc7.jpeg";
import gc8 from "@/assets/services/general const/gc8.jpeg";
import gc9 from "@/assets/services/general const/gc9.jpeg";
import gc10 from "@/assets/services/general const/gc10.jpeg";
import gcVid1 from "@/assets/services/general const/gc-video1.mp4";
import gcVid2 from "@/assets/services/general const/gc-video2.mp4";
import gcVid3 from "@/assets/services/general const/gc-video3.mp4";

const GeneralConstructionPage = () => (
  <ServiceDetailLayout
    num="02"
    title="General Construction"
    lede="Residential and commercial buildings. Foundation to finish, on time, on budget."
    intro={[
      "Buildings that hold up — structurally, visually, and across decades.",
      "We deliver comprehensive building services across residential homes, commercial complexes, industrial structures and renovations. From foundation to finishing, our team handles every phase: structural steel, masonry, concrete, roofing — coordinated by one site manager, not a chain of subcontractors.",
      "Each project is run with the discipline of a public-works contract and the care of a private commission.",
    ]}
    capabilities={[
      "Residential Buildings",
      "Commercial Complexes",
      "Industrial Structures",
      "Renovations & Extensions",
      "Structural Steel Works",
      "Concrete & Masonry Works",
      "Foundation Works",
      "Roofing Solutions",
    ]}
    heroImage={heroImg}
    gallery={[
      { src: gc1 }, { src: gc2 }, { src: gc3 }, { src: gc4 }, { src: gc5 },
      { src: gcVid1, type: "video" },
      { src: gc6 }, { src: gc7 }, { src: gc8 },
      { src: gcVid2, type: "video" },
      { src: gc9 }, { src: gc10 },
      { src: gcVid3, type: "video" },
    ]}
  />
);

export default GeneralConstructionPage;
