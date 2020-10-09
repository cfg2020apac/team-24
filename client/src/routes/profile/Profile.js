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
import profileJson from "../../assets/json/profile.json";

const GREETINGS = {
  noOne: ["", ""],
  me: ["My", "Welcome, "],
  user: ["User", "This is the profile of "],
};
var profileData = JSON.parse(JSON.stringify(profileJson));
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
  const [user, setUser] = useState("");
  const [currentUser] = useContext(CurrentUserContext);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    console.log(currentUser);
    // console.log(profileData.profiles.Profile1);
    var user = profileData.profiles.Profile1;
    if (currentUser.token && params.id === currentUser.userId) {
      // const client = getClient(currentUser.token)
      setUser(user);
      setUserId(user.Id);
      setName(user.firstName + user.lastName);
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
      setUser(user);
      setUserId(user.Id);
      setName(user.firstName + " " + user.lastName);
      setEmail("currentUser.uesrId");
      setGreetings(GREETINGS.me);
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
            <Col md={16} style={({ display: "flex" }, { marginTop: 30 })}>
              <div style={{ width: "100%" }}>
                <div>
                  <img src={require("../../assets/img/sticker_1.png")} />
                  <span>{user.Stickers.Sticker1.Quantity}</span>
                  <img src={require("../../assets/img/sticker_2.png")} />
                  <span>{user.Stickers.sticker2.quantity}</span>
                  <img src={require("../../assets/img/sticker_3.png")} />
                  <span>{user.Stickers.sticker3.quantity}</span>
                  <img src={require("../../assets/img/sticker_4.png")} />
                  <span>{user.Stickers.sticker4.quantity}</span>
                </div>
                <progress id="file" value="40" max="100" className="level-bar">
                  {" "}
                  40%{" "}
                </progress>
                <br />
                <br />
                <br />
                <h2>{name}</h2>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <ProfileDetail user={user} />
          </Row>
          <h1>Preference Form</h1>
          <ProfileForm user={user} />
          <h3>Languages</h3>
          <Languages />
        </>
      )}
    </>
  );
};

export default ProfilePage;
