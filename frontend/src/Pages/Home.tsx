import React, { useEffect } from "react";
import { Breadcrumb, Button, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('auth_token');
    const csrfBaseUrl = 'http://localhost/';
    const instance = axios.create({
        baseURL: 'http://localhost/api/',
        headers: {'Authorization': 'Bearer '+token}
    });

        const logOut = () => {
            axios.defaults.withCredentials = true;
            axios.get(csrfBaseUrl + 'sanctum/csrf-cookie').then(response => {
                instance.post('user/logout').then(res => {
                    Swal.fire({
                        title:"Congratulations",
                        icon:"success",
                        text:"Log out Successfully",
                        timer: 2000,
                    })
                    navigate("/welcome");
                    localStorage.clear();
                }).catch(err => {
                    console.log(err);
                    Swal.fire({
                        title:"Error",
                        icon:"error",
                        text:"Couldn't log out for some reason",
                        timer: 2000,
                    })
                })
            })
        } 

        /**
         * ! useEffect asenkron işlemlerden sonra kullanılmalıdır o yüzden alta aldık
         */
        
    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (token == null){
            navigate("/welcome");
        }else {
            navigate("/");
        }
    },[navigate])

    return(
        <Header>
            <Menu theme="dark" mode="inline" >
                <Button onClick={logOut}>Log out</Button>
            </Menu>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Login Successfuly</div>
            </Content>
        </Header>
    ) 
}
export default Home;