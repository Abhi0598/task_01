import React from 'react'
import './dashboard.css'


const data = [
    {
        coustomerImage: "./tableuserimage/1.png",
        coustomerName: "Tom Cruise",
        date: "May 26, 2019",
        priority: "high",
        ticketRaiseTitle: "Contact Email Not Linked",
        lastupdate: {
            updated: "Updated 1 day ago",
            on: "24.05.2019",
            time: "06:40 PM"
        }
    },
    {
        coustomerImage: "./tableuserimage/2.png",
        coustomerName: "Matt Damon",
        date: "May 26, 2019",
        priority: "low",
        ticketRaiseTitle: "Adding Images To Featured Posts",
        lastupdate: {
            updated: "Updated 2 day ago",
            on: "22.05.2019",
            time: "11:20 PM"
        }
    },
    {
        coustomerImage: "./tableuserimage/3.png",
        coustomerName: "Robert Donwey",
        date: "May 26, 2019",
        priority: "normal",
        ticketRaiseTitle: "When will I be charged this month?",
        lastupdate: {
            updated: "Updated 3 day ago",
            on: "21.05.2019",
            time: "09:40 AM"
        }
    }
]

class DashBoard extends React.Component {
    constructor() {
        super()
        this.state = {
            data: data
        }
    }

    render() {
        return (
            <div className='dashboardWrapper'>
                <div className='dashboardinside'>
                    <div className='ticketHeading'>
                        Tickets
                    </div>
                    <div className='navoptions'>
                        <img src="./dashboard_icon/search.png" alt="search" />
                        <img src="./dashboard_icon/notification.png" alt="notificationbell" />
                        <img src="./dashboard_icon/vertical.png" alt="divider" />
                        <span> Jones Ferdinand </span>
                        <img src="./dashboard_icon/userimage.png" alt="userimage" />
                        <div></div>
                    </div>
                </div>
                <div className='dashboardTableWrapper'>
                    <div className='tablefilterOptionHeader'>
                        <div className='allticketheading'>
                            All Tickets
                        </div>
                        <div className='flexonly'>
                            <div className='sortpadding'>
                                <img src="./dashboard_icon/sort.png" alt="notificationbell" />
                                &nbsp; <span>
                                    Sort
                                </span>
                            </div>
                            <div className='filterpadding'>
                                <img src="./dashboard_icon/filter.png" alt="divider" />
                                &nbsp; <span>
                                    Filter
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='tableDataContainer'>
                        <div className='tableHeader'>
                            <div className='ticketdetail'>
                                Ticket details
                            </div>
                            <div className='customername'>
                                Coustomer name
                            </div>
                            <div className='date'>
                                Date
                            </div>
                            <div className='priority'>
                                Priority
                            </div>
                            <div className='option'>

                            </div>
                        </div>
                        <div className='tableRow'>
                            {data.map((detailes, i) => {
                                return (
                                    <div className='rowtext' key={i}>
                                        <div className='ticketdetail'>
                                            <img src={detailes.coustomerImage} alt="userImage" />
                                            <span className='ticketmessage'>
                                                <span>
                                                    {detailes.ticketRaiseTitle}
                                                </span>
                                                <sapn className='recentupdatemessage'>
                                                    {detailes.lastupdate.updated}
                                                </sapn>
                                            </span>
                                        </div>
                                        <div className='customername'>
                                            <span>
                                                {detailes.coustomerName}
                                            </span>
                                            <span className='recentupdatemessage'>
                                                on {detailes.lastupdate.on}
                                            </span>
                                        </div>
                                        <div className='date'>
                                            <span>
                                                {detailes.date}
                                            </span>
                                            <span className='recentupdatemessage'>
                                                {detailes.lastupdate.time}
                                            </span>
                                        </div>
                                        <div className='priority'>
                                            <div className={detailes.priority === "high" ? 'textchip red' : "" || detailes.priority === "low" ? "textchip yellow" : "textchip normal"}>
                                                {detailes.priority}
                                            </div>
                                        </div>
                                        <div className='option'>
                                            <img src="./dashboard_icon/tableoptionicon.png" alt="optionicon" />
                                        </div>
                                    </div>
                                )
                            })}
                            <div className='rowpagination'>
                                <div className='rowsperpagedetails'>
                                    Rows Per Page: 8
                                    &nbsp;<img src="./tableuserimage/pagination/down.png" alt="downarrow" />
                                </div>
                                <div className='rowsperpagedetails'>
                                    1-8 of 1240
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="./tableuserimage/pagination/left.png" alt="" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="./tableuserimage/pagination/right.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default DashBoard;