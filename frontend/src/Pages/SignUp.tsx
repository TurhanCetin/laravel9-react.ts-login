import React from "react";
import { Input,Button,Form,Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const SignUp = () => {

    const baseUrl = 'http://localhost/api/';
    const csrfBaseUrl = 'http://localhost/';
    const navigate = useNavigate();

    const onFinish = (e:React.FormEvent<HTMLFormElement>) => {
        axios.defaults.withCredentials = true; 
        axios.get(csrfBaseUrl + 'sanctum/csrf-cookie').then(response => {
            axios.post(baseUrl + 'user/register',e).then(res => {
                if(res.status === 201){
                    Swal.fire({
                        title:"Congratulations",
                        icon:"success",
                        text:"Register Successfully",
                        timer: 2000,
                    })
                    navigate("/welcome");  
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'Email or password is incorrect',
                        icon: 'error',
                        confirmButtonText:'Try Again',
                    });
                }
            })
        })
    };
    
    return(
        <Form 
            id="loginForm"
            name="login_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            >
            <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name' }]}
            wrapperCol={{ offset:3, span: 24 }}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email' }]}
            wrapperCol={{ offset:3, span: 24 }}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            wrapperCol={{ offset:2, span: 24 }}
            >
            <Input.Password 
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            </Form.Item>

            <Form.Item
            label="Password Again"
            name="password_confirmation"
            rules={[{ required: true, message: 'Please input your password!' }]}
            wrapperCol={{ offset:1, span: 24 }}
            >
            <Input.Password
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>  
    )
}

export default SignUp