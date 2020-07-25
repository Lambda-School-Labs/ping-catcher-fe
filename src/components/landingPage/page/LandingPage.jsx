import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import SlackCard from "../infoCard/SlackCard";
import NotifyCard from "../infoCard/NotifyCard";
import OrganizeCard from "../infoCard/OrganizeCard";
import Footer from "../footer/Footer";
import "./LandingPage.css";
const LandingPage = ({ logout, login, authState }) => {
  return (
    <>
      <header>
        <Navbar login={login} logout={logout} authState={authState} />
      </header>
      <Hero login={login} logout={logout} authState={authState} />
      <section className='info'>
        <SlackCard />
        <NotifyCard />
        <OrganizeCard />
      </section>
      <Footer title='Ping Catcher' />
    </>
  );
};
export default LandingPage;
