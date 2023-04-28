import React from 'react'
import './FooterStyles.css'
import LogoDark from './logo.png'
const FooterBar = () => {
  // Footer is still in standard rendered format,
  //   requires proper buttons and routing to
  //appropriate pages, also incorporate download
  //PDF features (using PartnerToDecide originial
  //MyShared Decision PDFs, however must check with client) this link to PDFs in all languages: https://www.partnertodecide.org/decisionaids
  return (
    <div style={{ marginBottom: '100%' }}>
      <div className="allFooter">
        <div id="col1F">
          <ol>
            <img src="https://se-shared-decision-making-production.up.railway.app/uploads/Linear_Mint_1097f92e2a.png" alt="Logo" className="logo" />
            <li>
              <button className="leftFooter">Website</button>
            </li>
            <li>
              <button className="leftFooter">Contact Us</button>
            </li>
            <li>
              <button id="srt">Support Us</button>
            </li>
          </ol>
        </div>

        <div id="col2F">
          <ol>
            <h1 className="allFooter">Induction Decision Aid</h1>
            <li>
              <button className="allFooter">Home</button>
            </li>
            <li>
              <button className="allFooter">My Choices</button>
            </li>
            <li>
              <button className="allFooter">My Values</button>
            </li>
            <li>
              <button className="allFooter">My Stuff</button>
            </li>
            <hr></hr>
            <li>
              <button className="allFooter">Wait for Labor</button>
            </li>
            <li>
              <button className="allFooter">41-42 Week Induction</button>
            </li>
            <li>
              <button className="allFooter">39-41 Week Induction</button>
            </li>
          </ol>
        </div>

        <div id="col3F">
          <ol>
            <h1 className="allFooter">Download a PDF</h1>
            <li>
              <button className="allFooter">English</button>
            </li>
            <li>
              <button className="allFooter">Español</button>
            </li>
            <li>
              <button className="allFooter">Kreyòl Ayisyen</button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
export default FooterBar
