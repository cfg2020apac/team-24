import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/current-user.context";
import { Input, Spin, Card, Col, Row, Pagination } from "antd";
import data from "../../assets/json/events.json";

const { Search } = Input;

var json = JSON.parse(JSON.stringify(data));
var test = json.events[1];

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
              <tr>
                <td>
                  <table>
                    <tr>
                      <td>
                        <table>
                          <tr>Description: {test.description}</tr>
                          <tr>Date: {test.date}</tr>
                          <br />
                          <tr>Time: {test.time}</tr>
                          <br />
                          <tr>Venue: {test.venue}</tr>
                          <br />
                          <tr>Min. Age: {test.age.max}</tr>
                          <br />
                          <tr>Max. Age: {test.age.min}</tr>
                          <br />
                          <tr>Deadline: {test.deadline}</tr>
                          <br />
                          <tr>Language: {test.language}</tr>
                        </table>
                      </td>
                      <td>
                        <table>
                          <tr>
                            <td>
                              <img src={require("./Sincerity.png")} />
                              Sincerity
                            </td>
                            <td>
                              <img src={require("./Service.png")} />
                              Service
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={require("./Gratitude.png")} />
                              Gratitude
                            </td>
                            <td>
                              <img src={require("./Kindness.png")} />
                              Kindness
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
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
