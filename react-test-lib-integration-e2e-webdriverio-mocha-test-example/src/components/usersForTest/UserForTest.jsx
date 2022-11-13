import React from 'react';
import {useEffect, useState} from "react";
import User from "./User";

const UserForTest = () => {
    const [users, setUsers] = useState([]);
    const [loading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setUsers(json);
                    setIsLoading(false);
                }, 1000)
            })
    }, [])

    const onDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    return (
        <div>
            {loading && <h1 id="users-loading">Идет загрузка...</h1>}
            {users.length && (
                <div id="users-list">
                    {users.map(user => (
                        <User onDelete={onDelete} user={user}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserForTest;