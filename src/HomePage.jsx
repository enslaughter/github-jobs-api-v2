import './styles/App.scss';
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import TestJobs from "./TestJobs";

import {useEffect} from 'react';

function HomePage(props){

    useEffect(() => {
        props.changePageView('home');
    })

    return(
        <div>
            <Heading changeTheme={props.changeTheme} toggleState={props.toggleState} pageView={props.pageView}/>
            <TestJobs toggleState={props.toggleState}/>
            <Footer />
        </div>
    )
}

export default HomePage;