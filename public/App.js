/*For now hardcoded information in MAP - Later will move it JSON file*/
const studentInfo = [{
  name: "Somnath Shantveer",
  imageurl: "images/somnath.jpg",
  intro: "MS Student at San Diego State University. Software development Engineer at Mitchell International. Experienced in developing Enterprise applications using various technologies.",
  githuburl: "https://github.com/sshantveer"
}];
const studentData = studentInfo.map(({
  name,
  imageurl,
  intro,
  githuburl
}) => /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, name)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("img", {
  src: imageurl,
  align: "center"
}))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, intro)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("form", {
  action: githuburl
}, /*#__PURE__*/React.createElement("input", {
  type: "submit",
  value: "MY GITHUB REPO"
})))))));
ReactDOM.render(studentData, document.getElementById("contents"));