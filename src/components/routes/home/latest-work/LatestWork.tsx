import React from "react";

import SectionContainer from "../../../ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import LatestWorkList from "./LatestWorkList";

const LatestWork = () => {
  return (
    <SectionContainer>
      <SectionTitle sectionTitle="some of my latest work" />
      <LatestWorkList />
    </SectionContainer>
  );
};

export default LatestWork;
