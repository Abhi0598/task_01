import React from 'react'
import './sidebar.css'


const SideBarJson = [
    {
        id: 0,
        title: "Overviews",
        imgPath: "./sidebar_icon/overview.png"
    },
    {
        id: 1,
        title: "Tickets",
        imgPath: "./sidebar_icon/ticket.png"
    },
    {
        id: 2,
        title: "Ideas",
        imgPath: "./sidebar_icon/ideas.png"
    },
    {
        id: 3,
        title: "Contacts",
        imgPath: "./sidebar_icon/contacts.png"
    },
    {
        id: 4,
        title: "Agents",
        imgPath: "./sidebar_icon/agent.png"
    },
    {
        id: 5,
        title: "Articles",
        imgPath: "./sidebar_icon/articles.png"
    },
    {
        id: 6,
        title: "Settings",
        imgPath: "./sidebar_icon/setting.png"
    },
    {
        id: 7,
        title: "Subscription",
        imgPath: "./sidebar_icon/subscription.png"
    }
]

class SideBar extends React.Component {
    constructor() {
        super()
        this.state = {
            SideBarJson: SideBarJson,
            selected: 1
        }
    }

    render() {
        return (
            <div className='sideBarMainWrapper'>
                <div className='sideBarIcon'>
                    <div>
                        <img src="./sidebar_icon/logo.png" alt="logo" />
                    </div>
                    <span className='logotext'> Dashboard Kit</span>
                </div>
                <div className='sideBarOptions'>
                    {
                        SideBarJson.map((items, i) => {
                            return (
                                <div key={i} className={this.state.selected === i ? 'sidebarOptionHeading  selectedsidebaroption selectedsidebaroptionopacity' : "sidebarOptionHeading"} >
                                    <div className='iconconstantwidth'>
                                        <img src={items.imgPath} alt={items.title} />
                                    </div>
                                    <span className='headingAlign'>
                                        {items.title}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}

export default SideBar;