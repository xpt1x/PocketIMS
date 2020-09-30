import { redirectTo } from '@reach/router'
import  React from 'react'
export default function Dashboard({loggedIn})
{
    return(
        <>
        <h2>Hi lol your are loggedin {console.log(loggedIn)}</h2>
        </>
    )
}