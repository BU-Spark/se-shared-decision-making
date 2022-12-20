import Layout from "../components/Layout";
import Quiz from "../components/Quiz";

export default function MyValues() {
  return (
    <Layout>
      <h1>Your values,</h1>
      <h1>your choices!</h1>
      <p>
        Reflect on what is most important to you. Answer six short questions and
        use the to talk to your provider.
      </p>
      <div>
        <h1>Your values,</h1>
        <h1>your choices!</h1>
        <p>
          Reflect on what is most important to you. Answer six short questions
          and use the to talk to your provider.
        </p>
        <div>
          {/* Empty button for now, requires onClick event handle to render Quiz feature (currently both rendered) */}
          <button>Begin</button>
        </div>
        <Quiz />
      </div>
    </Layout>
  );
}
