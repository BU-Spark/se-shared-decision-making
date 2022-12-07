import "./pageStyle/Home.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div style={{ margin: "25%" }}>
        <h1>When is labor induction recommended in healthy pregnancies?</h1>
        <p>
          The American College of Obstetricans and Gynecologists recommends
          offering labor induction between 41 and 42 weeks and recommends labor
          induction at 42 weeks.
        </p>
      </div>
      <div style={{ margin: "25% 0 25%  0" }}>
        <h1>What are my choices?</h1>
        <div className="home-col" style={{ float: "left", width: "33%" }}>
          <h2 className="homeH1">Wait for Labor</h2>
          <h3>37 - 42+ WEEKS</h3>
          <p>
            Spontaneous labor starts on its own and is powered by your body and
            your baby.
          </p>
          <h3>Quick Facts</h3>
          <ul>
            <li>Possibly lower chance of using pain medication in labor</li>
            <li>
              Possibly more satisfied with your care (less waiting, fewer
              interventions)
            </li>
            <li>It can take 8-24 hours for your baby to be born </li>
            <li>
              Your care provider will offer you extra check-ups after 41 weeks
            </li>
          </ul>
          <button style={{ alignContent: "left" }}>Learn More</button>
        </div>
        <div className="home-col" style={{ float: "right", width: "33%" }}>
          <h2 className="homeH1">41-42 week induction</h2>
          <p>
            Labor induction is when a care provider tries to start your labor
            with a cervical balloon or medicines instead of waiting for labor to
            start on its own. In the US this is the recommended timing when
            there is no medical reason for induction.
          </p>
          <h3>Quick Facts</h3>
          <ul>
            <li>Lower chance of Cesarean birth</li>
            <li>Lower chance of baby admitted to NICU</li>
            <li>Lower chance of infant death </li>
            <li>
              It can take 1-3 days in the hospital until your baby is born
            </li>
          </ul>
          <button style={{ alignContent: "left" }}>Learn More</button>
        </div>
        <div className="home-col" style={{ float: "right", width: "33%" }}>
          <h2 className="homeH1">39-41 week induction</h2>
          <p>
            Labor induction is when a care provider tries to start your labor
            with a cervical balloon or medicines instead of waiting for labor to
            start on its own. A few recent studies suggest there might be
            advantages to early induction with no additional disadvantages
            compared with later induction.
          </p>
          <h3>Quick Facts</h3>
          <ul>
            <li>Possibly lower chance of Cesarean birth</li>
            <li>
              Probably lower chance of maternal hypertension (high blood
              pressure)
            </li>
            <li>Otherwise very similar to 41-42 week induction</li>
          </ul>
          <button style={{ alignContent: "left" }}>Learn More</button>
        </div>
        <button style={{ alignContent: "center", marginLeft: "49.5%" }}>
          Compare All
        </button>
      </div>
      <div>
        <h1>Is it normal to go past my due date?</h1>
        <p>* without intervention</p>
        <h1>Yes!</h1>
        <p>
          A longer pregnancy is more likely if this your first birth, you are
          older, or you have had other longer pregnancies.
        </p>
      </div>
      <div>
        <h1>What can help me choose?</h1>
        <p>Think about what is important to you by using our decision aid.</p>
        <button>Find Out</button>
      </div>
      <div>Image</div>
      <div>
        <div>
          Image
          <p>Ann Peralta, MPH, DrPH</p>
          <p>Founder of Partner to Decide</p>
        </div>
        <div>
          <div>
            <h1>Who made this tool?</h1>
            <p>
              This decision aid was made by a group of public health and medical
              experts, led by Dr. Ann Peralta. It was tested and updated based
              on feedback from pregnant people that used the decision aid.
            </p>
            <p>See a full summary here.</p>
          </div>
          <div>
            <h1>About us</h1>
            <p>
              Partner to Decide is a US-based 501(c)(3) non-profit organization
              that strives to improve decision-making quality in maternity care.
            </p>
            <p> Learn more about us</p>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function MyChoices() {
//   return <h2>Contacts</h2>;
// }

// function MyValues() {
//   return <h2>Contacts</h2>;
// }

// function MyStuff() {
//   return <h2>Contacts</h2>;
// }
