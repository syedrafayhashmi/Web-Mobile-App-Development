function Person(props) {
  return React.createElement("div", { className: "person" },
  React.createElement("h2", null, props.name),
  React.createElement("p", null, "Age : ", props.age));


}
var app =
React.createElement("div", null,
React.createElement(Person, { name: "Rafay", age: "21" }),
React.createElement(Person, { name: "Zain", age: "22" }));


ReactDOM.render(app, document.querySelector("#app"));
// ReactDOM.render(<Person name = "Zain" age = "22"/>,document.querySelector("#p2"));