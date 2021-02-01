/*For now hardcoded information in MAP - Later will move it JSON file*/
const studentInfo = [
  {
    name: "Somnath Shantveer",
    imageurl: "images/somnath.jpg",
    intro:
      "MS Student at San Diego State University. Software development Engineer at Mitchell International. Experienced in developing Enterprise applications using various technologies.",
    githuburl: "https://github.com/sshantveer",
  },
];
const studentData = studentInfo.map(({ name, imageurl, intro, githuburl }) => (
  <table>
    <tbody>
      <tr>
        <td>{name}</td>
      </tr>
      <tr>
        <td>
          <img src={imageurl} align="center" />
        </td>
      </tr>
      <tr>
        <td>{intro}</td>
      </tr>
      <tr>
        <td>
          <form action={githuburl}>
            <input type="submit" value="MY GITHUB REPO" />
          </form>
        </td>
      </tr>
    </tbody>
  </table>
));

ReactDOM.render(studentData, document.getElementById("contents"));
