import { Card, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { MailOutlined, PhoneOutlined, GlobalOutlined, HeartOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { getUsers, updateUser } from './api/hello';
import { Form, Modal } from 'antd';


export default function Home() {
  
  
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        const users = await getUsers();
        setUsers(users);
      };
      fetchUsers();
    }, []);
    // ...
  
  return (
    <div className='usersCard'>
    <Row gutter={[20,20]}>
    {users.map(user => (
      <Col lg={6} md={8} xs={24} sm={12} key={user.id}>
        <Card actions={[
          <HeartOutlined key="love" />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}>
        <h3>{user.name}</h3>
          <p><MailOutlined style={{ fontSize: '16px'}} />{user.email}</p>
          <p><PhoneOutlined style={{ fontSize: '16px'}} /> {user.phone}</p>
          <p><GlobalOutlined style={{ fontSize: '16px'}} /> {user.website}</p>
        </Card>
      </Col>
    ))}
  </Row>
  </div>
  )
}
