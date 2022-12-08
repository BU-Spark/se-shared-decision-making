import React from "react";
import FooterBar from "../components/Footer/FooterBar";
import Layout from "../components/Layout";

const MyValues = () => {
  return (
    <Layout>
      <h1>Your values,</h1>
      <h1>your choices!</h1>
      <p>
        Reflect on what is most important to you. Answer six short questions
        and use the to talk to your provider.
      </p>
      <div>
        <button>Begin</button>
      </div>
    </Layout>
  );
};

export default MyValues;
