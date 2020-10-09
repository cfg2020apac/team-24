import React, { useEffect, useState, useContext } from "react";
import client from "../../apollo";
import getClient from "../../utils/getClient";
import { getJob, acceptJob } from "../../utils/operations";
import { Spin, Card, Button } from "antd";
import CurrentUserContext from "../../context/current-user.context";
import { Link } from "react-router-dom";
import events from "../../events";

const JobPage = (props) => {
  const [job, setJob] = useState({});
  const [acceptLoad, setAcceptLoad] = useState(false);
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [loading, setLoading] = useState(false);
  const {
    match: { params },
  } = props;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const onAccept = () => {
    const client = getClient(currentUser.token);
    const variables = {
      id: params.id,
    };
    setAcceptLoad(true);
    client
      .mutate({
        mutation: acceptJob,
        variables,
      })
      .then(({ data }) => {
        setJob({
          ...job,
          associate: data.acceptJob.associate,
        });
        setAcceptLoad(false);
      });
  };

  useEffect(() => {
    setLoading(true);

    const data = events[0];

    setJob(data.job);
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
        <Card title={job.title}>
          <p>ID: {job.id}</p>
          <p>Description: {job.description}</p>
          <p>Date: {job.date}</p>
          <p>
            Open to applications: <text style={{ color: "green" }}>Yes</text>
          </p>
          {currentUser.token && job.client ? (
            <>
              {currentUser.userId === job.client.id ? (
                <>
                  <br />
                  <br />
                  <Link>Unpublish</Link>
                </>
              ) : (
                <>
                  <br />
                  <br />
                  {acceptLoad ? (
                    <Spin />
                  ) : (
                    <>
                      {job.associate ? (
                        <></>
                      ) : (
                        <Button onClick={onAccept}>Accept</Button>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>{job.associate ? <></> : <p>Sign in to accept this job</p>}</>
          )}
        </Card>
      )}
    </>
  );
};

export default JobPage;
