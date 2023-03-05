import React from "react";

import SectionContainer from "../../../ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightsList from "./HighlightsList";

const Highlights = () => {
  return (
    <SectionContainer>
      <SectionTitle sectionTitle="my proudest achievements" />
      <HighlightsList />
    </SectionContainer>
  );
};

export default Highlights;
