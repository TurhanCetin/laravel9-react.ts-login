import React from "react";
import { Input,Button,Form,Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from "axios";



const Login = () => {

    const csrfBaseUrl = 'http://localhost/';
    const baseUrl = 'http://localhost/api/';

    const onFinish = (e:React.FormEvent<HTMLFormElement>) => {
        // Cors hatasını atlatmak için bu işlemleri gerçekleştiriyoruz.
        axios.defaults.withCredentials = true; 
        
        axios.get( csrfBaseUrl + 'sanctum/csrf-cookie').then(response => {
            //ardından login işlemini burada gerçekleştireceğiz.
            axios.post(baseUrl + 'login', e).then(res => {
                console.log(res.data); 
            })
        });
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <Form 
            id="loginForm"
            name="login_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
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
            name="password_"
            rules={[{ required: true, message: 'Please input your password!' }]}
            wrapperCol={{ offset:2, span: 24 }}
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

export default Login