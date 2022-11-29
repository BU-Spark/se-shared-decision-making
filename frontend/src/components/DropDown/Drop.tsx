import Dropdown from 'react-bootstrap/Dropdown';

function Drop() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Drop;

// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Form from 'react-bootstrap/Form';

// // The forwardRef is important!!
// // Dropdown needs access to the DOM node in order to position the Menu
// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     href=""
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {children}
//     &#x25bc;
//   </a>
// ));

// // forwardRef again here!
// // Dropdown needs access to the DOM of the Menu to measure it
// const CustomMenu = React.forwardRef(
//   ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
//     const [value, setValue] = useState('');

//     return (
//       <div
//         ref={ref}
//         style={style}
//         className={className}
//         aria-labelledby={labeledBy}
//       >
//         <Form.Control
//           autoFocus
//           className="mx-3 my-2 w-auto"
//           placeholder="Type to filter..."
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//         />
//         <ul className="list-unstyled">
//           {React.Children.toArray(children).filter(
//             (child) =>
//               !value || child.props.children.toLowerCase().startsWith(value),
//           )}
//         </ul>
//       </div>
//     );
//   },
// );

// render(
//   <Dropdown>
//     <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
//       Custom toggle
//     </Dropdown.Toggle>

//     <Dropdown.Menu as={CustomMenu}>
//       <Dropdown.Item eventKey="1">Red</Dropdown.Item>
//       <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
//       <Dropdown.Item eventKey="3" active>
//         Orange
//       </Dropdown.Item>
//       <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>,
// );



// import { useMemo, useState } from "react";
// import { DropDownList } from "@progress/kendo-react-dropdowns";

// // Dropdown categories
// const categories = ["all", "recipe", "video", "article"];

// // Results data filtered using categories
// const data = [
//   {
//     id: 1,
//     label: "Best Ramen ever",
//     type: "recipe",
//   },
//   {
//     id: 2,
//     label: "Top 10 Mexican dishes",
//     type: "article",
//   },
//   {
//     id: 3,
//     label: "How to prepare a whole roast chicken",
//     type: "video",
//   },
//   {
//     id: 4,
//     label: "Chilli Chicken Gnocchi",
//     type: "recipe",
//   },
//   {
//     id: 5,
//     label: "Best 5 ice desserts for hot summer",
//     type: "article",
//   },
// ];

// export const Drop = () => {
//   // Store currently selected category
//   const [category, setCategory] = useState("");

//   // Memoized results. Will re-evaluate any time selected
//   // category changes
//   const filteredData = useMemo(() => {
//     if (!category || category === "all") return data;

//     return data.filter(item => item.type === category);
//   }, [category]);

//   return (
//     <section className="k-my-8">
//       <form className="k-form k-mb-4">
//         <label className="k-label k-mb-3">Category</label>
//         <DropDownList data={categories} onChange={e => setCategory(e.value)} />
//       </form>

//       <section className="k-listgroup">
//         <ul>
//           {filteredData.map(item => {
//             return (
//               <li key={item.id} className="k-listgroup-item">
//                 {item.label}
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     </section>
//   );
// };
// export default Drop;