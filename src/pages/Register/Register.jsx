import './register.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import registerPageImage from '../../assets/images/login.svg'
import { userRegister } from '../../api/apiUser';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Register = () => {
    const navigate = useNavigate();
    const [buttonState, setButtonState] = useState(false);

    const onFinish = async (values) => {
        setButtonState(true);
        const response = await userRegister(values);
        console.log(response.data.user.user_id)
        if (response.status === 201) {
            setButtonState(false);
            navigate('/register/profileComplete')
            console.log('Registration Successful')
        } else {
            setButtonState(false);
            antNotification(api, 'topLeft', "Registration failed", '', 'error');
        }
    };

    return (
        <div className="register__page">
            <div className="login__container" >
                <div className="login__form">
                    <h1>REGISTER</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <label htmlFor="">First Name</label>
                        <Form.Item
                            name="first_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'First name required',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                        </Form.Item>

                        <label htmlFor="">Last Name</label>
                        <Form.Item
                            name="last_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Last name required',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                        </Form.Item>

                        <label htmlFor="">Email</label>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email required',
                                },
                                {
                                    type: 'email',
                                    message: 'Input a valid email',
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                        </Form.Item>

                        <label htmlFor="">Password</label>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Password required',
                                },
                                // {
                                //     min: 8,
                                //     message: 'Password must be at least 8 characters'
                                // }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                            />
                        </Form.Item>

                        <label htmlFor="">Confirm Password</label>
                        <Form.Item
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: 'Confirm your password',
                                },
                                // {
                                //     min: 8,
                                //     message: 'Password must be at least 8 characters'
                                // }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                            />
                        </Form.Item>


                        <Form.Item className='form__submission'>
                            <div className="login__register">
                                <Button type="primary" htmlType="submit" className="login-form-button" disabled={buttonState}>
                                    Register
                                </Button>
                            </div>
                            <div className="google__login">
                                Already Logged In?<Link to='/login' className='text-blue-400'> Login</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>

                <div className="image">
                    <img src={registerPageImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Register
