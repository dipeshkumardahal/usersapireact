import axios from 'axios';
import { Card, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';



export default function Home() {
  
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
      };
      fetchUsers();
    }, []);
    // ...
  
  return (
    <div className='usersCard'>
    <Row gutter={[40,40]}>
    {users.map(user => (
      <Col md={6} xs={24} sm={8} key={user.id}>
        <Card>
        <h3>{user.name}</h3>
        <MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />
         {user.email}
          <br />
          <PhoneOutlined style={{ fontSize: '16px', color: '#08c' }} /> {user.phone}
          <br/>
          <PhoneOutlined style={{ fontSize: '16px', color: '#08c' }} /> {user.website}
        </Card>
      </Col>
    ))}
  </Row>
  </div>
  )
}
