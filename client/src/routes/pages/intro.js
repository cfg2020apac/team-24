import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CurrentUserContext from '../../context/current-user.context'
import { Input,Spin } from 'antd'
import {data} from './events.json'
const { Search } = Input

var json = JSON.parse(data);

const IntroPage = () => {
    const [loading, setLoading]= useState(true)
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    return (
        <>
            <h1>Timeline</h1>
            <br/>
            <Search
                size='large'
                placeholder="input search text"
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
                        <td><table>
                          <tr>
                            <td><img src={"./A.png"}/></td>
                            <td>
                              <table>
                                <tr>ID: 9843482452634756</tr><br/>
                                <tr>Name: Standards For Being A Good Student and Child 弟子规 @Tohyi</tr><br/>
                                <tr>Description: Year 2020 is an eventful year. The Covid-19 pandemic let us see the positive (selflessness) and negative (self-centeredness) traits of human nature. Seeing the importance of cultivating the positive traits of our next generation, we should start them from young by sowing good seeds in their minds and hearts, and continue to irrigate and fertilise them to let them thrive. As the saying goes: it takes 10 years to cultivate a tree, 100 years to nurture a human being.Therefore, Joyous Learning Grove develops a series of moral education courses for children from 4 to 12 years old. These children will attend classes every week to learn about moral values such as filial piety, friendship, and helping others and implement them in their daily lives.The commencement of the course for the new semester is about to begin, we encourage all the parents to register your child for the course promptly!</tr>
                                <tr>Date: Oct 31 2020</tr><br/>
                                <tr>Time: 02:30pm - 05:00pm</tr><br/>
                                <tr>Venue: Blossom World Society (Main Office) 9 Toh Yi Drive Singapore 590009</tr><br/>
                                <tr>Min. Age: 4</tr><br/>
                                <tr>Max. Age: 6</tr><br/>
                                <tr>Deadline: Oct 15 2020</tr><br/>
                                <tr>Language: Mandarin</tr>
                              </table></td>
                              <td><table>
                                <tr>
                                  <td>Sincerity</td>
                                  <td>Service</td>
                                </tr>
                                <tr>
                                  <td>Gratitude</td>
                                  <td>Kindness</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                        <td>2020</td>
                        <td><table>
                          <tr>
                            <td>Event Image</td>
                            <td>
                              <table>
                              <tr>ID: 7882339934898923</tr>
                              <tr>Name: Happy Formula 快乐秘方 @ Tohyi</tr>
                              <tr>Description: Year 2020 is an eventful year. The Covid-19 pandemic let us see the positive (selflessness) and negative (self-centeredness) traits of human nature. Seeing the importance of cultivating the positive traits of our next generation, we should start them from young by sowing good seeds in their minds and hearts, and continue to irrigate and fertilise them to let them thrive. As the saying goes: it takes 10 years to cultivate a tree, 100 years to nurture a human being.Therefore, Joyous Learning Grove develops a series of moral education courses for children from 4 to 12 years old. These children will attend classes every week to learn about moral values such as filial piety, friendship, and helping others and implement them in their daily lives.The commencement of the course for the new semester is about to begin, we encourage all the parents to register your child for the course promptly!</tr>
                              <tr>Date: Oct 31 2020</tr>
                              <tr>Time: 10:30am - 11:30am</tr>
                              <tr>Venue: Blossom World Society (Main Office) 9 Toh Yi Drive Singapore 590009</tr>
                              <tr>Min. Age: 7</tr>
                              <tr>Max. Age: 9</tr>
                              <tr>Deadline: Oct 15 2020</tr>
                              <tr>Language: Mandarin</tr>
                              </table></td><td>
                              <table>
                                <tr>
                                  <td>Sincerity</td>
                                  <td>Service</td>
                                </tr>
                                <tr>
                                  <td>Gratitude</td>
                                  <td>Kindness</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table></td>
                      </tr>
                      <tr>
                        <td>2019</td>
                        <td><table>
                          <tr>
                            <td>Event Image</td>
                            <td>
                              <table>
                              <tr>ID: </tr>
                              <tr>Name: </tr>
                              <tr>Description: </tr>
                              <tr>Date: </tr>
                              <tr>Time: </tr>
                              <tr>Venue: </tr>
                              <tr>Age: </tr>
                              <tr>Deadline: </tr>
                              <tr>Language: </tr>
                              </table></td><td>
                              <table>
                                <tr>
                                  <td>Sincerity</td>
                                  <td>Service</td>
                                </tr>
                                <tr>
                                  <td>Gratitude</td>
                                  <td>Kindness</td>
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
