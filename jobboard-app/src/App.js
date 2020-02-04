import React from "react";
import Nav from "./components/Nav";
import Map from "./components/Map";
import JobOffers from "./components/JobOffers";
import MainNavigation from "./components/MainNavigation";
import database from "./database";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <MainNavigation />
                <div className="main-content">
                    <JobOffers />
                    <Map />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
