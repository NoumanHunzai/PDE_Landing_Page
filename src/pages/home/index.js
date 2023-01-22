import React from "react";
import About from "../../components/about";
import Bodysec from "../../components/bodySec";
import MapCard from "../../components/cards/mapCard";
import HeadSection from "../../components/headSection";

export default function Home() {
  return (
    <div>
      <HeadSection />
      <Bodysec />
      <MapCard />

      <About />
    </div>
  );
}
