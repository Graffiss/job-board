import React from "react";
import Nav from "./components/Nav";
import Map from "./components/Map";
import JobOffers from "./components/JobOffers";
import MainNavigation from "./components/MainNavigation";
import jobs from "./database";

class App extends React.Component {
    state = {
        jobs: jobs
    };

    render() {
        return (
            <React.Fragment>
                <Nav />
                <MainNavigation />
                <div className="main-content">
                    <JobOffers jobs={this.state.jobs} />
                    <Map />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
