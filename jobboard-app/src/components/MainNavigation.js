import React from "react";

class MainNavigation extends React.Component {
    render() {
        return (
            <div className="main-navigation">
                <div className="cities">
                    <ul>
                        <li>Warszawa</li>
                        <li>Kraków</li>
                        <li>Wrocław</li>
                        <li>Poznań</li>
                        <li>Trójmiasto</li>
                        <li>Katowice</li>
                        <li>Łodź</li>
                        <li>Gliwice</li>
                        <li>Rzeszów</li>
                    </ul>
                </div>
                <div className="programing-languages">
                    <ul>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>.NET</li>
                        <li>C</li>
                        <li>DevOps</li>
                        <li>Mobile</li>
                        <li>Data</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainNavigation;
