import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function TableList() {
    const [users, setUsers] = useState({ hits: [] });
  
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers({ hits: data });
        console.log(data.name)
      };
      fetchData();
    }, [setUsers]);
  
    return (
      <div>
        <ul>
          {users.hits &&
            users.hits.map(item => (
                <table style={{"border": "2px solid yellow"}}>
                  <th  style={{"border": "2px solid green"}}>{item.id}</th>
                  <th  style={{"border": "2px solid pink"}}>{item.name}</th>
                  <tb  style={{"border": "2px solid purple"}}>{item.username}</tb>
                  <tb  style={{"border": "2px solid blue"}}>{item.email}</tb>
                </table>
            ))}
        </ul>
      </div>
    );
  }