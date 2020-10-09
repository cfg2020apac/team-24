import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CurrentUserContext from '../../context/current-user.context'
import { Input,Spin } from 'antd'
import data from '../../assets/json/events.json'

const { Search } = Input

var json = JSON.parse(JSON.stringify(data));
var test = json.events[1];

const IntroPage = () => {
    const [loading, setLoading]= useState(true)
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    return (
        <>
            <h1>Timeline</h1>
            <br/>
            <Search
                size='large'
                placeholder="Search for events!"
                onSearch={value => console.log(value)}
                style={{ width: '50%' }}
                enterButton
            />
            <br/>
            <br/>
            <p>Check out the latest timeline of the upcoming events, and see what we have done before!</p>
            {
                currentUser.token?(
                      <><table>
                      <tbody id ="timeline">
                      <tr>
                        <td>Upcoming</td>
                        <td><Card title = {test.name}/>
                        <p>Description: {test.description}</p>
                        <p>Date: {test.date}</p><br/>
                        <p>Time: {test.time}</p><br/>
                        <tr>Venue: {test.venue}</tr><br/>
                        <tr>Min. Age: {test.age.max}</tr><br/>
                        <tr>Max. Age: {test.age.min}</tr><br/>
                        <tr>Deadline: {test.deadline}</tr><br/>
                        <tr>Language: {test.language}</tr><table>
                          <tr>
                            <td><img src={require("./cfg_event_1.jpg")}/></td>
                            <td>
                              <table>
                                <tr>Description: {test.description}</tr>
                                <tr>Date: {test.date}</tr><br/>
                                <tr>Time: {test.time}</tr><br/>
                                <tr>Venue: {test.venue}</tr><br/>
                                <tr>Min. Age: {test.age.max}</tr><br/>
                                <tr>Max. Age: {test.age.min}</tr><br/>
                                <tr>Deadline: {test.deadline}</tr><br/>
                                <tr>Language: {test.language}</tr>
                              </table></td>
                              <td><table>
                                <tr>
                                  <td><img src={require("./Sincerity.png")}/>Sincerity</td>
                                  <td><img src={require("./Service.png")}/>Service</td>
                                </tr>
                                <tr>
                                  <td><img src={require("./Gratitude.png")}/>Gratitude</td>
                                  <td><img src={require("./Kindness.png")}/>Kindness</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table></td>
                      </tr>
                      </tbody>
                      </table></>
                ):(
                    <p>You need to <Link to="/signup">Sign Up</Link> first!</p>
                )
            }
        </>
    )
}

export default IntroPage
