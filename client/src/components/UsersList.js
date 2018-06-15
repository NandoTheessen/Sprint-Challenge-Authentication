import React from 'react'
import { Card } from 'semantic-ui-react'

export const UserList = (props) => {
    let items = props.users.map(e => {
        return {
            header: e.id,
            meta: e.punchline,
            description: e.setup
        }
    })
    return (
        <div className='joke-wrapper'>
            {!props.loggedin && <h1>Please login to view high-end jokes!</h1>}
            {!props.loggedin && <button id='login' onClick={() => props.history.push('/login')} type="button">Login</button>}
            {/* {let item = props.users.map((e) => {
                return (

                    <div key={e.id}>
                        <h1>{e.setup}</h1>
                        <h6>{e.punchline}</h6>
                    </div>
                );
            })} */}
            <Card.Group items={items} />
        </div>
    )
}

UserList.defaultProps = {
    users: [],
}