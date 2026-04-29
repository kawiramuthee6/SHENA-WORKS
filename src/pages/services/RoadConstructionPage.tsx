import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import roadsImg from "@/assets/services/roads.jpg";
import road1 from "@/assets/services/roads/road1.jpeg";
import road2 from "@/assets/services/roads/road2.jpeg";
import road3 from "@/assets/services/roads/road3.jpeg";
import road4 from "@/assets/services/roads/road4.jpeg";
import road5 from "@/assets/services/roads/road5.jpeg";
import road6 from "@/assets/services/roads/road6.jpeg";
import road7 from "@/assets/services/roads/road7.jpeg";

const RoadConstructionPage = () => (
  <ServiceDetailLayout
    num="01"
    title="Road Construction"
    lede="Tarmac, repairs, cabro and drainage. Roads built for the climate they sit in."
    intro={[
      "Roads that last begin at the ground — earthworks, base, drainage. We build for the conditions, not around them.",
      "We deliver comprehensive road construction across Kenya — tarmac laying, road repairs and rehabilitation, cabro paving installation, drainage systems and culverts. With years of experience in the East African market, we understand the unique demands of road construction in diverse terrains.",
      "Whether it is a fresh tarmac surface, the rehabilitation of an existing road, or an intricate drainage system, we approach every project with precision and accountability.",
    ]}
    capabilities={[
      "Tarmac & Asphalt Road Construction",
      "Road Repairs & Rehabilitation",
      "Cabro & Paving Block Installation",
      "Drainage Systems & Culverts",
      "Road Marking & Signage",
      "Grading & Earthworks",
      "Highway Development",
      "Access Road Construction",
    ]}
    heroImage={roadsImg}
    gallery={[
      { src: road1, alt: "Road grading" },
      { src: road2, alt: "Earthworks" },
      { src: road3, alt: "Road development" },
      { src: road4, alt: "Grading & levelling" },
      { src: road5, alt: "Heavy equipment on site" },
      { src: road6, alt: "Material delivery" },
      { src: road7, alt: "Construction progress" },
    ]}
  />
);

export default RoadConstructionPage;
