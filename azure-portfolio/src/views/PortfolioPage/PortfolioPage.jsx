import React from "react";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import ProjectView from "../../components/ProjectView/ProjectView";
const PortfolioPage = () =>{
    return(
        <div>
        <main>
    <Row>
        <Col><ProjectView imageSrc={"../../assets/Images/banana_background.jpg"} text={"Wowzers"}></ProjectView></Col>
    </Row>
    </main>
    </div>
    );
};
export default PortfolioPage;
