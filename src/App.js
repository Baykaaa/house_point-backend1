// import React from "react";
// import { useTable, useSortBy, useResizeColumns } from "react-table";
// import "./App.css";

// // const tableCardsItems = [
// //   {
// //     id: 1,
// //     name: "Irve ",
// //     imageUrl: "https://example.com/item1.jpg",
// //     description: "1t oroh house.",
// //     color: "#31bec7",
// //   },
// //   {
// //     id: 2,
// //     name: "buhu ",
// //     imageUrl: "https://example.com/item1.jpg",
// //     description: "buhu2.",
// //     color: "#6b994e",
// //   },
// //   {
// //     id: 3,
// //     name: "tsa ",
// //     imageUrl: "https://example.com/item1.jpg",
// //     description: "tsa.",
// //     color: "#898e84",
// //   },
// //   {
// //     id: 4,
// //     name: "tsen ",
// //     imageUrl: "https://example.com/item1.jpg",
// //     description: "tsentserentsen.",
// //     color: "#b86aac",
// //   },
// //   {
// //     id: 5,
// //     name: "maza ",
// //     imageUrl: "https://example.com/item1.jpg",
// //     description: "maza mazalai.",
// //     color: "#9f374c",
// //   },
// //   {
// //     id: 6,
// //     name: "yang",
// //     imageUrl: "https://example.com/item1.jpg",
// //     description: "ma yang.",
// //     color: "#db4118",
// //   },
// //   {
// //     id: 7,
// //     name: "khant ",
// //     imageUrl: "https://example.com/item1.jpg",
// //     description: "this year gg",
// //     color: "#3874a2",
// //   },
// //   {
// //     id: 8,
// //     name: "hawt ",
// //     imageUrl: "https://example.com/item1.jpg",
// //     description: " house.",
// //     color: "#bb875d",
// //   },
// // ];

// const App = () => {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Placement",
//         accessor: "id",
//       },
//       {
//         Header: "Name",
//         accessor: "name",
//       },
//       {
//         Header: "Description",
//         accessor: "description",
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable(
//       {
//         columns,
//         data: tableCardsItems,
//       },
//       useSortBy,
//       useResizeColumns
//     );

//   return (
//     <table {...getTableProps()} className="table">
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                 {column.render("Header")}
//                 <span>
//                   {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
//                 </span>
//                 <div
//                   {...column.getResizerProps()}
//                   className={`resizer ${column.isResizing ? "isResizing" : ""}`}
//                 />
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           const item = row.original; // Get the item data
//           const rowColor = item.color; // Use the specified color

//           return (
//             <tr {...row.getRowProps()} style={{ backgroundColor: rowColor }}>
//               {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default App;
