import React from 'react'

export const UserList = (props) => {
    console.log(props)
    return (
        <div>
            {props.loggedin ? null : <h1>Please login to view Users</h1>}
            {props.users.map((e) => {
                return (

                    <div key={e.id}>
                        <h1>{e.setup}</h1>
                        <h6>{e.punchline}</h6>
                    </div>
                );
            })}
        </div>
    )
}

UserList.defaultProps = {
    users: [],
}