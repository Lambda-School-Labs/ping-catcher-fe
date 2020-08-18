import React from "react";
import Hero from "../hero/Hero";
import SlackCard from "../infoCard/SlackCard";
import NotifyCard from "../infoCard/NotifyCard";
import OrganizeCard from "../infoCard/OrganizeCard";
import Footer from "../footer/Footer";
import "./LandingPage.css";
const LandingPage = ({ logout, login, authState }) => {
  return (
    <>
      <Hero login={login} logout={logout} authState={authState} />
      <section className="info">
        <SlackCard />
        <NotifyCard />
        <OrganizeCard />
      </section>
      <Footer title="Ping Catcher" />
    </>
  );
};
export default LandingPage;
