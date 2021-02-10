import './styles/App.scss';
import Heading from "./components/Heading.jsx";
import Footer from "./components/Footer.jsx";
import TestJobs from "./components/TestJobs.js";

function HomePage(){
    return(
        <div>
            <Heading />
            <TestJobs />
            <Footer />
        </div>
    )
}

export default HomePage;