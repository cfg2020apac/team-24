import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CurrentUserContext from '../../context/current-user.context'
import { Input,Spin } from 'antd'
const { Search } = Input

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
                            <td>Event Image</td>
                            <td>
                              <table>
                                <tr>Detail1</tr>
                                <tr>Detail2</tr>
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
                                <tr>Detail1</tr>
                                <tr>Detail2</tr>
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
                                <tr>Detail1</tr>
                                <tr>Detail2</tr>
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
