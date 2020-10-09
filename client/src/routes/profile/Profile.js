import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/current-user.context";
import { getProfile, getUser } from "../../utils/operations";
import { useQuery } from "@apollo/react-hooks";
import { Spin } from "antd";
import getClient from "../../utils/getClient";
import ProfileCard from "./ProfileCard";
import { Progress } from "antd";
import { Row, Col } from "antd";
import ProfileDetail from "./ProfileDetails";
import ProfileForm from "./ProfileForm";
import Languages from "./Languages";
import Suggestion from "./Suggestions";
const GREETINGS = {
  noOne: ["", ""],
  me: ["My", "Welcome, "],
  user: ["User", "This is the profile of "],
};

const ProfilePage = (props) => {
  const [greetings, setGreetings] = useState(GREETINGS.noOne);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {
    match: { params },
  } = props;
  const [currentUser] = useContext(CurrentUserContext);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    console.log(currentUser);

    if (currentUser.token && params.id === currentUser.userId) {
      // const client = getClient(currentUser.token)

      setUserId("currentUser.userId");
      setName("Diab Haque");
      setEmail("currentUser.uesrId");
      setGreetings(GREETINGS.me);
      setLoading(false);

      // client.query({
      //     query:getProfile
      // }).then(({ data })=>{
      //     setUserId(data.me.id)
      //     setName(data.me.name)
      //     setEmail(data.me.email)
      //     setGreetings(GREETINGS.me)
      //     setLoading(false)
      // })
      // .error((data)=>{
      //     setError(true)
      //     console.log(data)
      // })
    } else {
      // get other users' profile
      const client = getClient(currentUser.token);

      const variables = {
        id: params.id,
      };

      setUserId("data.me.id");
      setName("data.me.name");
      setEmail("data.me.email");
      setGreetings(GREETINGS.user);
      setLoading(false);

      // client.query({
      //     query: getUser,
      //     variables
      // }).then(({data})=>{
      //     setUserId(data.user.id)
      //     setName(data.user.name)
      //     setGreetings(GREETINGS.user)
      //     setEmail("")
      //     setLoading(false)
      // })
    }
  }, [currentUser, params.id]);

  return (
    <>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <h1>{greetings[0]} Profile</h1>
          <Row className="">
            <Col md={8}>
              <ProfileCard name={name} id={userId} />
            </Col>
            <Col md={16} style={({ display: "flex" }, { marginTop: 50 })}>
              <div style={{ width: "100%" }}>
                <progress id="file" value="32" max="100" className="level-bar">
                  {" "}
                  32%{" "}
                </progress>
                <br />
                <br />
                <br />
                <h2>Richard Buchannan</h2>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <ProfileDetail />
          </Row>
          <h1>Preference Form</h1>
          <ProfileForm />
          <Languages />
          <h1>Suggested Volunteering Opportunties</h1>
          <Suggestion />
        </>
      )}
    </>
  );
};

export default ProfilePage;
