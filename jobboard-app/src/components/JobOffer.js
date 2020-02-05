import React from "react";

class JobOffer extends React.Component {
    render() {
        const { title, address, city } = this.props.jobs;
        return (
            <div className="job-offer">
                <img src="" alt="" />
                <div className="main-info">
                    <h3>{title}</h3>
                    <h4>
                        {address}
                        <span> {city}</span>
                    </h4>
                </div>
                <div className="extra-info"></div>
            </div>
        );
    }
}

export default JobOffer;
