import React from "react";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import ProjectView from "../../components/ProjectView/ProjectView";
const BananaPage = () =>{
    return(
        <div>
        <main>
    <Row className="row-center">
    <Col><ProjectView imageSrc={"https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg"} text={"Wowzers"}></ProjectView></Col>
    <Col><ProjectView imageSrc={"https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg"} text={"Wowzers"}></ProjectView></Col>
    <Col><ProjectView imageSrc={"https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg"} text={"Wowzers"}></ProjectView></Col>
    </Row>
    <Row className="row-center">
    <Col><ProjectView imageSrc={"https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg"} text={"Wowzers"}></ProjectView></Col>
    </Row>
    </main>
    </div>
    );
};
export default BananaPage;
