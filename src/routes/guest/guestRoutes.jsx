import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import { ROUTES } from "../../utils/routes";
import React from "react"

export const guestRoutes =[
    {path: ROUTES.GUEST.signIn,element:<SignIn />},
    {path: ROUTES.GUEST.signUp,element:<SignUp />},

]