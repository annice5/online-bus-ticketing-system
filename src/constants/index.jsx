import { BookAIcon, Bus, LayoutDashboard, User2Icon } from "lucide-react";



export default {

NAVLINKS : [
    {
        icon: <LayoutDashboard/>,
        text: "Overview",
        link: "/dashboard",

    },
    {
        icon: <Bus/>,
        text: "Buses",
        link: "/dashboard/buses",

    },
    {
        icon: <BookAIcon/>,
        text: "Bookings",
        link: "/dashboard/bookings",

    },
    {
        icon: <User2Icon/>,
        text: "Users",
        link: "/dashboard/users",

    }
]



}




