import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Profile from "../assets/ProfilePic.png";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
      <img  src={Profile} alt="abdil" className="profile"/>
        <h2> Hi, My Name is Abdil</h2>
        <div className="prompt">
          <p>A ... with a passion for learning and creating.</p>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home