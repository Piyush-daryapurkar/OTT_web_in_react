import React, { useState, useEffect } from 'react';
import { getuser, adduser, deleteuser } from './api/userService';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../src/css/admin.css'

const Admin = () => {
    const navigate = useNavigate();
    const [user_data, update_user_data] = useState([]);
    const [form, updateForm] = useState({ name: "", email: "", password: "" });

    useEffect(() => {
        const fetchuser = async () => {
            try {
                const data = await getuser();
                update_user_data(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchuser();
    }, []);

    useEffect(() => {
        localStorage.setItem("user_data", JSON.stringify(user_data));
    }, [user_data]);

    const handleAddUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = form;
        if (name && email && password) {
            try {
                const newuser = { name, email, password };
                const addedUser = await adduser(newuser);
                update_user_data((prev) => [...prev, addedUser]);
                updateForm({ name: "", email: "", password: "" });
            } catch (error) {
                console.error("Error adding user:", error);
            }
        } else {
            alert("Please fill in all fields.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteuser(id);
                update_user_data(user_data.filter((user) => user.id !== id));
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/useredit/${id}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="admin-container">
            <h1>Super Admin Dashboard</h1>
            <table className="table-striped">
                <thead className='admin-thead'> 
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody className='admin-tbody'>
                    {user_data.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td>
                                <button className="delete-btn" onClick={() => handleDelete(data.id)}>Delete</button>
                            </td>
                            <td>
                                <button className="update-btn" onClick={() => handleEdit(data.id)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

           <div className="input-from">
           <Form className='admin-form' onSubmit={handleAddUser}>
                <Form.Group controlId="formName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder='Enter Your Name'
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className='admin-form' controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder='Enter Your Email'
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className='admin-form' controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder='Enter Your Password'
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button className='from-btn' type="submit" variant="primary">
                    Add User
                </Button>
            </Form>
           </div>
        </div>
    );
};

export default Admin;
