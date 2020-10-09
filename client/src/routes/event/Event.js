import React, { useEffect, useState, useContext } from "react";
import client from "../../apollo";
import getClient from "../../utils/getClient";
import { getJob, acceptJob } from "../../utils/operations";
import { Spin, Card, Button, Row, Col } from "antd";
import CurrentUserContext from "../../context/current-user.context";
import { Link } from "react-router-dom";
import events from "./events";

const JobPage = (props) => {
  const [job, setJob] = useState({});
  const [accepted, setAccepted] = useState(false);
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [loading, setLoading] = useState(false);

  const {
    match: { params },
  } = props;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const onAccept = (e) => {
    const client = getClient(currentUser.token);
    const variables = {
      id: params.id,
    };
    setAccepted(true)

    // e.target.innerHTML = "Accepted"
    // setAcceptLoad(true);
    // client
    //   .mutate({
    //     mutation: acceptJob,
    //     variables,
    //   })
    //   .then(({ data }) => {
    //     setJob({
    //       ...job,
    //       associate: data.acceptJob.associate,
    //     });
    //     setAcceptLoad(false);
    //   });
  };

  useEffect(() => {
    setLoading(true);

    const data = events[params.id -1];

    setJob(data);
    // client.query({
    //     query: getJob,
    //     variables
    // }).then(({data})=>{
    //     setJob(data.job)
    //     setLoading(false)
    // })

    setLoading(false);
  }, [params.id]);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <>
        <Card
          title={job.title}
          hoverable
          style={{ display: "block", overflow: "auto", marginBottom: "15px" }}
        >
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <img
                src={require(`../../assets/img/cfg_event_${params.id}.jpg`)}
                style={{ width: "150px", height: "190px", objectFit: "cover" }}
              />
            </Col>
            <Col span={18}>
              <p>{job.description}</p>
              <p>
                Event on: {job.time}, {job.date}
              </p>
              <p>
                Open to applications: <text style={{ color: "green" }}>Yes</text>
              </p>
              {
                accepted?(
                  <>
                    <text style={{ color: "green" }}>Volunteered</text>
                    <br/>
                    <br/>
                    <Button onClick= {()=> setAccepted(false)}>Leave</Button>
                  </>
                ):(
                  <>
                    <Button onClick={onAccept}>Volunteer</Button>
                  </>
                )
              }
              
            </Col>
          </Row>
        </Card>
        {/* <Card title={job.title}>
          <p>ID: {job.id}</p>
          <p>Description: {job.description}</p>
          <p>Date: {job.date}</p>
          <p>
            Open to applications: <text style={{ color: "green" }}>Yes</text>
          </p>
          
        </Card> */}
        </>
      )}
    </>
  );
};

export default JobPage;
