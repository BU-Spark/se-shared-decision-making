import Header from "../components/Navbar/Header";
import React from "react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { integerPropType } from "@mui/utils";

export default function Home() {
  
  const data = useFetch<ResponseData[]>('http://localhost:1337/api/home-pagees',[]);

  return (
    <div className="App">
      <ul>
        {data.map(({ id, attributes }) => <li key={id}><h1>{attributes.Bad}</h1><p>{attributes.Answer}</p></li>)} 
      </ul>
    </div>
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
