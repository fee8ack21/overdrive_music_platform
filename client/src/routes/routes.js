import react from "react";
import Home from '../pages/Home'
import Member from '../pages/Member'
import Contact from '../pages/Contact'
import Partner from '../pages/Partner'
// 
const routes = [
    {
        path: "/partner",
        component: Partner
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/member",
        component: Member
    },
    {
        path: "/",
        component: Home
    }
];
// 
export default routes