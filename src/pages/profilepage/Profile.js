import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown, IoIosArrowForward } from 'react-icons/io';


export default function Profile() {
    return (
        <div className="profile">
            {/* birinchi qism */}
            <div className="userProfileBottom">
                <div className="Profile_header">
                    <Link className="profile_link" activeClassName="sevd">Send </Link>
                    <Link className="profile_link" activeClassName="sevd">Feedback</Link>
                    <Link className="profile_link" activeClassName="sevd">Waiting</Link>
                </div>
            </div>
            {/* ikkinchi qism */}
            <div className="profile_notification">
                <ul className="collection_item_profile profile_father">
                    <li className="collection_link profile_title_top">
                        {/* child   ul*/}
                        <ul className="collection_item_profile profile_title_top ">
                            {/* child li 1 title  */}
                            <li className="collection_item Profile_title">
                                <b>Type notification</b>
                            </li>
                            <li className="collection_item Profile_title">
                                <b>Time</b>
                            </li>
                            <li className="collection_item Profile_title profile_arrow">
                                <b>Status </b><IoMdArrowDropdown />
                            </li>
                            <li className="collection_item Profile_title">
                                <b>Descriptions</b>
                            </li>
                        </ul>
                    </li>
                    <li className="collection_link">
                        {/* child   ul*/}
                        <ul className="collection_item_profile">
                            {/* child li  2*/}
                            <li className="collection_item Profile_title">
                                <Link className="profile_li_link">Accident</Link>
                            </li>
                            <li className="collection_item Profile_title">
                                <span>27/07/2017, 14:32</span>
                            </li>
                            <li className="collection_item Profile_title">
                                <button className="profile_li_btn" >Done </button>
                            </li>
                            <li className="collection_item Profile_title">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p><IoIosArrowForward style={{ color: 'blue', cursor: "pointer" }} />
                            </li>
                        </ul>
                    </li>
                    <li className="collection_link">
                        {/* child   ul*/}
                        <ul className="collection_item_profile">
                            {/* child li 3*/}
                            <li className="collection_item Profile_title">
                                <Link className="profile_li_link">Violence</Link>
                            </li>
                            <li className="collection_item Profile_title">
                                <span>27/07/2017, 14:32</span>
                            </li>
                            <li className="collection_item Profile_title">
                                <button className="profile_li_btn" style={{backgroundColor: "#aaa"}}>Time out</button>
                            </li>
                            <li className="collection_item Profile_title">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p><IoIosArrowForward style={{ color: 'blue', cursor: "pointer" }} />

                            </li>
                        </ul>
                    </li>
                    <li className="collection_link">
                        {/* child   ul*/}
                        <ul className="collection_item_profile">
                            {/* child li 4*/}
                            <li className="collection_item Profile_title">
                                <Link className="profile_li_link">Robbery</Link>
                            </li>
                            <li className="collection_item Profile_title">
                                <span>27/07/2017, 14:32</span>
                            </li>
                            <li className="collection_item Profile_title">
                                <button className="profile_li_btn" style={{backgroundColor: "#FFD703"}}>Inprogress</button>
                            </li>
                            <li className="collection_item Profile_title">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p><IoIosArrowForward style={{ color: 'blue', cursor: "pointer" }} />

                            </li>
                        </ul>
                    </li>
                    <li className="collection_link profile_title_bottom">
                        {/* child   ul*/}
                        <ul className="collection_item_profile profile_title_bottom ">
                            {/* child li */}
                            <li className="collection_item Profile_title">
                                <Link className="profile_li_link">Ambulance</Link>
                            </li>
                            <li className="collection_item Profile_title">
                                <span>27/07/2017, 14:32</span>
                            </li>
                            <li className="collection_item Profile_title">
                                <button className="profile_li_btn" style={{backgroundColor: "#aaa"}}>Time out</button>
                            </li>
                            <li className="collection_item Profile_title">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa!</p><IoIosArrowForward style={{ color: 'blue', cursor: "pointer" }} />

                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/* Profile footer page */}
            <div className="footer_profile_link">
                <div className="footer_link">
                    <Link className="page">First page</Link>
                    <Link className="page page_link">1</Link>
                    <Link className="page page_link">2</Link>
                    <Link className="page page_link">3</Link>
                    <Link className="page page_link">4</Link>
                    <Link className="page page_link">5</Link>
                    <Link className="page page_link">6</Link>
                    <Link className="page page_link">7</Link>
                    <Link className="page">Last page</Link>
                </div>
            </div>
        </div>
    )
}
