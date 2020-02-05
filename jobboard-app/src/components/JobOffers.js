import React from "react";
import JobOffer from "./JobOffer";

class JobOffers extends React.Component {
    render() {
        const { jobs } = this.props;

        return (
            <div className="job-offers">
                {Object.keys(jobs).map(key => (
                    <JobOffer key={key} index={key} jobs={jobs[key]} />
                ))}
            </div>
        );
    }
}

export default JobOffers;
