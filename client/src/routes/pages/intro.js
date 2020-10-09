import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/current-user.context";
import { Input, Spin, Card, Col, Row, Pagination } from "antd";
import data from "../../assets/json/events.json";

const { Search } = Input;

var json = JSON.parse(JSON.stringify(data));
var test = json.events[0];
var test2 = json.events[1];
var test3 = json.events[2];
var test4 = json.events[3];

const IntroPage = () => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  return (
    <>
      <h1>Timeline</h1>
      <br />
      <Search
        size="large"
        placeholder="Search for events!"
        onSearch={(value) => console.log(value)}
        style={{ width: "50%" }}
        enterButton
      />
      <br />
      <br />
      <p>
        Check out the latest timeline of the upcoming events, and see what we
        have done before!
      </p>
      {currentUser.token ? (
        <>
          <table>
            <tbody id="timeline">
              <p>Upcoming</p>
              <Card
                title={test.name}
                hoverable
                style={{
                  display: "block",
                  overflow: "auto",
                  marginBottom: "15px",
                }}
              >
                <Row gutter={[16, 16]}>
                  <Col span={3}>
                    <img src={require("./cfg_event_1.jpg")} />
                  </Col>
                  <Col span={18}>
                    <p>Description: {test.description}</p>
                    <p>
                      Date: {test.date}, Time: {test.time}
                    </p>
                    <tr>Venue: {test.venue}</tr>
                    <tr>Min. Age: {test.age.max}</tr>
                    <tr>Max. Age: {test.age.min}</tr>
                    <tr>Deadline: {test.deadline}</tr>
                    <tr>Language: {test.language}</tr>
                  </Col>
                  <Col span={3}>
                    <img src={require("./Sincerity.png")} />
                    Sincerity
                    <img src={require("./Service.png")} />
                    Service
                    <img src={require("./Gratitude.png")} />
                    Gratitude
                    <img src={require("./Kindness.png")} />
                    Kindness
                  </Col>
                </Row>
              </Card>
              <Card
                title={test2.name}
                hoverable
                style={{
                  display: "block",
                  overflow: "auto",
                  marginBottom: "15px",
                }}
              >
                <Row gutter={[16, 16]}>
                  <Col span={3}>
                    <img src={require("./cfg_event_2.jpg")} />
                  </Col>
                  <Col span={18}>
                    <p>Description: {test2.description}</p>
                    <p>
                      Date: {test2.date}, Time: {test2.time}
                    </p>
                    <tr>Venue: {test2.venue}</tr>
                    <tr>Min. Age: {test2.age.max}</tr>
                    <tr>Max. Age: {test2.age.min}</tr>
                    <tr>Deadline: {test2.deadline}</tr>
                    <tr>Language: {test2.language}</tr>
                  </Col>
                  <Col span={3}>

                    <img src={require("./Gratitude.png")} />
                    Gratitude
                    <img src={require("./Kindness.png")} />
                    Kindness
                  </Col>
                </Row>
              </Card>
              <Card
                title={test3.name}
                hoverable
                style={{
                  display: "block",
                  overflow: "auto",
                  marginBottom: "15px",
                }}
              >
                <Row gutter={[16, 16]}>
                  <Col span={3}>
                    <img src={require("./cfg_event_3.jpeg")} />
                  </Col>
                  <Col span={18}>
                    <p>Description: {test3.description}</p>
                    <p>
                      Date: {test3.date}, Time: {test3.time}
                    </p>
                    <tr>Venue: {test3.venue}</tr>
                    <tr>Min. Age: {test3.age.max}</tr>
                    <tr>Max. Age: {test3.age.min}</tr>
                    <tr>Deadline: {test3.deadline}</tr>
                    <tr>Language: {test3.language}</tr>
                  </Col>
                  <Col span={3}>
                    <img src={require("./Sincerity.png")} />
                    Sincerity
                    <img src={require("./Service.png")} />
                    Service

                  </Col>
                </Row>
              </Card>
              <Card
                title={test4.name}
                hoverable
                style={{
                  display: "block",
                  overflow: "auto",
                  marginBottom: "15px",
                }}
              >
                <Row gutter={[16, 16]}>
                  <Col span={3}>
                    <img src={require("./cfg_event_4.jpeg")} />
                  </Col>
                  <Col span={18}>
                    <p>Description: {test4.description}</p>
                    <p>
                      Date: {test4.date}, Time: {test4.time}
                    </p>
                    <tr>Venue: {test4.venue}</tr>
                    <tr>Min. Age: {test4.age.max}</tr>
                    <tr>Max. Age: {test4.age.min}</tr>
                    <tr>Deadline: {test4.deadline}</tr>
                    <tr>Language: {test4.language}</tr>
                  </Col>
                  <Col span={3}>
                    <img src={require("./Sincerity.png")} />
                    Sincerity
                    <img src={require("./Service.png")} />
                    Service

                    <img src={require("./Kindness.png")} />
                    Kindness
                  </Col>
                </Row>
              </Card>
              <p>2019</p>
              <p>2018</p>
            </tbody>
          </table>
        </>
      ) : (
        <p>
          You need to <Link to="/signup">Sign Up</Link> first!
        </p>
      )}
    </>
  );
};

export default IntroPage;
