import React from "react";
import { Input,Button,Form,Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import axiosinstence from '../axiosInstence'

const Login = () => {

    const csrfBaseUrl = 'http://localhost/';
    const baseUrl = 'http://localhost/api/';
    const navigate = useNavigate();

    const onFinish = (e:React.FormEvent<HTMLFormElement>) => {
        // Cors hatasını atlatmak için bu işlemleri gerçekleştiriyoruz.
        axios.defaults.withCredentials = true; 
        axios.get(csrfBaseUrl + 'sanctum/csrf-cookie').then(response => {
            //ardından login işlemini burada gerçekleştireceğiz.
            axios.post(baseUrl + 'login', e).then(res => {
                if(res.status === 201){
                    Swal.fire({
                        title:"Welcome",
                        icon:"success",
                        text:"Login Successfully",
                        timer: 2000,
                    })
                    navigate("/");  
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: 'Email or password is incorrect',
                        icon: 'error',
                        confirmButtonText:'Try Again',
                    });
                    navigate("/welcome");
                }
            }) 
        })
        /**
         * ! bu seferde 419 hatasında kalıyoruz;
        try {
            await axiosinstence.get( csrfBaseUrl + 'sanctum/csrf-cookie')
            await axiosinstence.post(baseUrl + 'login', e)
            Swal.fire({
                    title:"Welcome",
                    icon:"success",
                    text:"Login Successfully",
                    timer: 2000,
                })
                navigate("/");  
                console.log("yukardaki çalıştı");
                
        } catch(err) {
            console.log('err from catch', err);
            
            Swal.fire({
                title: 'Error!',
                text: 'Email or password is incorrect',
                icon: 'error',
                confirmButtonText:'Try Again',
            });
        }
        */
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