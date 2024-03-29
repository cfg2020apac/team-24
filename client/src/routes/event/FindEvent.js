import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Spin, Card, Col, Row, Pagination } from "antd";
import { getJobs } from "../../utils/operations";
import client from "../../apollo";
import JobPage from "./Event";
import CurrentUserContext from "../../context/current-user.context";
import { Image } from "antd";

import events from "./events";

const { Search } = Input;
const { Meta } = Card;

const FindJobPage = () => {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);

  const pageLen = 3;
  const [jobs, setJobs] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(pageLen);
  const [loading, setLoading] = useState(true);
  // const jobsArray=jobs.map((job)=><Link key={job.id} to={`/job/${job.id}`}><p>Title: {job.title}, Description: {job.description}, Pay: {job.currency} {job.bill}</p></Link>)
  // const jobsArray=jobs.map((job)=><Link key={job.id} to={`/job/${job.id}`}><Card title={job.title} hoverable style={{height: 175, overflow: 'scroll', marginBottom: '15px' }}><p>{job.description}</p><p>Pay: {job.currency} {job.bill}</p><p>Posted on: {new Date(job.createdAt).toDateString()}</p></Card></Link>)
  const jobsArray = jobs.map((job) => (
    <Link key={job.id} to={`/event/${job.id}`}>
      <Card
        title={job.title}
        hoverable
        style={{ display: "block", overflow: "auto", marginBottom: "15px" }}
      >
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <img
              src={job.imgUrl}
              style={{ width: "150px", height: "190px", objectFit: "cover" }}
            />
          </Col>
          <Col span={18}>
            <p>{job.description}</p>
            <p>
              Event on: {job.time}, {job.date}
            </p>
          </Col>
        </Row>
      </Card>
    </Link>
  ));
  useEffect(() => {
    const variables = {
      orderBy: "date_DESC",
    };
    setLoading(true);

    setJobs(events);

    setLoading(false);

    // client.query({
    //     query: getJobs,
    //     variables
    // }).then(({ data })=>{
    //     setLoading(false)
    //     setJobs(data.jobs)
    // })
  }, []);

  // useEffect(()=>{
  //     var st=pageLen*(pageNum-1)
  //     var ed=st+pageLen
  //     if(ed>jobsArray.length){
  //         ed=jobsArray.length
  //     }
  //     setStart(st)
  //     setEnd(ed)
  //     console.log(start,end)
  // },[page])

  const onPageChange = (pageNum) => {
    var st = pageLen * (pageNum - 1);
    var ed = st + pageLen;
    if (ed > jobsArray.length) {
      ed = jobsArray.length;
    }
    setStart(st);
    setEnd(ed);
    console.log(pageNum, start, end);
  };

  // useEffect(()=>{

  // }, [jobs])

  return (
    <div>
      {/* <h1>Feed</h1>
      <br /> */}
      {/* <Search
        size="large"
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        style={{ width: "50%" }}
        enterButton
      /> */}
      {/* <br />
      <br /> */}
      {loading ? (
        <Spin />
      ) : (
        <div>
          {currentUser.token ? (
            <>
              {jobsArray.slice(start, end)}
              <Pagination
                defaultCurrent={1}
                defaultPageSize={pageLen}
                total={jobsArray.length}
                onChange={onPageChange}
              />
            </>
          ) : (
            <p>
              Please <Link to="/signin">sign in</Link> to look for events
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FindJobPage;
