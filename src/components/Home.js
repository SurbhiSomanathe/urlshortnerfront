import Alert from "react-bootstrap/Alert";
import NaviBar from "./navbar";
import "./app.css";

const Home = () => {
  return (
    <div className="home">
      <Alert variant="danger">
        <Alert.Heading>URL SHORTNER SITE</Alert.Heading>
        <p className="home2">If you dont have an account, please signup now</p>
        {<NaviBar />}

        <p className="mb-0"></p>
        <hr />
        <hr />
      </Alert>
    </div>
  );
};

export default Home;
