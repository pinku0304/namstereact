//<h1 id="heading1">Hello World</h1>
// const heading = React.createElement("h1", {id:"heading1"}, "Hello world");

// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//---------------------------------//

//how to create a nested structure using react core
// ex: <div id="parent">
//     <div id="child">
//         <h1>Hi i am h1 tag</h1>
//     </div>
// </div>

// const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1",{}, "Hi I am h1 tag")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)
//---------------------------------//

//how to create a nested structure like below using react core


// <div id="parent">
//    <div id="child">  
//           <h1>Hi i am h1 tag</h1>
//           <h2>Hi i am h2 tag</h2>
//     </div>
// </div>

// const parent = React.createElement("div", {id:"parent"},
//      React.createElement("div", {id:"child"},
//          [React.createElement("h1", {}, "Hi i am h1 tag"), React.createElement("h2", {}, "Hi i am h2 tag")]));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//how to create a nested structure like below using react core


// <div id="parent">
//    <div id="child">  
//           <h1>Hi i am h1 tag</h1>
//           <h2>Hi i am h2 tag</h2>
//     </div>
//    <div id="child2">  
//           <h1>Hi i am h1 tag</h1>
//           <h2>Hi i am h2 tag</h2>
//     </div>
// </div>

const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child"},
[React.createElement("h1", {}, "Hi i am h1 tag"), React.createElement("h2", {}, "Hi i am h2 tag")],

    ),
    React.createElement("div", {id:"child2"},
        [React.createElement("h1", {}, "Hi i am h1 tag"), React.createElement("h2", {}, "Hi i am h2 tag")],
        
            )
]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

