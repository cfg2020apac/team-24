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
                    loading?(
                        <Spin/>
                    ):(
                      <><table>
                      <tbody id ="timeline">
                      <tr>
                        <td>Upcoming</td>
                        <td><table>
                          <tr>  //First event
                            <td></td> //Event image here
                            <td>
                              <table> //Event details
                                <tr></tr>
                                <tr></tr>
                              </table>
                              <table> //features
                                <tr>
                                  <td><input type="checkbox" onclick="return false;"/>Sincerity</td>
                                  <td><input type="checkbox" onclick="return false;"/>Service</td>
                                </tr>
                                <tr>
                                  <td><input type="checkbox" onclick="return false;"/>Gratitude</td>
                                  <td><input type="checkbox" onclick="return false;"/>Kindness</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td><script>document.write(new Data().getFullYear())</script></td>
                      </tr>
                      <tr>
                        <td><script>document.write(new Data().getFullYear()-1)</script></td>
                      </tr>
                      </tbody>
                      </table></>
                )):(
                    <p>You need to <Link to="/signup">Sign Up</Link> first!</p>
                )
            }
        </>
    )
}

export default IntroPage
