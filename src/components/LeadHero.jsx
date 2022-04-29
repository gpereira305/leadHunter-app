import React from "react";
import meetingRoom from "../assets/meeting.jpg";

const LeadHero = () => {
  return (
    <section className="leads-hero">
      <div className="leads-hero__wrapper">
        <img src={meetingRoom} alt="hero banner" title="hero" />
      </div>
    </section>
  );
};

export default LeadHero;
