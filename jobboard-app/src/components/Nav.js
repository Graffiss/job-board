import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <img
                    src="/img/job-board-logo.png"
                    alt="Logo of JobBoard company"
                    className="logo"
                />
                <ul>
                    <li>Post a job</li>
                    <li>Sign in</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
