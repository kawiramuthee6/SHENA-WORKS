import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import boqImg from "@/assets/services/boq.jpg";

const BillsOfQuantitiesPage = () => (
  <ServiceDetailLayout
    num="05"
    title="Bills of Quantities"
    lede="Cost estimation and quantity surveying that hold up against the actual build."
    intro={[
      "A good BoQ is the contract before the contract — every quantity, every rate, accounted for.",
      "Our quantity surveying covers takeoffs, cost estimation, tender documentation, contract administration, valuations and final account settlement. Because our team also builds, our estimates are grounded in real labour, real material costs and the conditions of the Kenyan market.",
      "We deliver detailed bills that prevent overruns and clarify scope from day one — for clients, for contractors, and for the lenders behind them.",
    ]}
    capabilities={[
      "Quantity Takeoffs",
      "Cost Estimation",
      "Tender Documentation",
      "Contract Administration",
      "Valuations & Payments",
      "Final Account Settlement",
      "Variation Assessments",
      "Life Cycle Costing",
    ]}
    heroImage={boqImg}
    gallery={[]}
  />
);

export default BillsOfQuantitiesPage;
