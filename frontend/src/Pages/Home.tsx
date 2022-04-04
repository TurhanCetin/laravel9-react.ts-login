import { Breadcrumb, Button, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import axios from "axios";
import React from "react";

const Home = () => {

    const baseUrl = 'http://localhost/api/';
    const csrfBaseUrl = 'http://localhost/';

        const logOut = () => {
            axios.defaults.withCredentials = true; 
            /**
             * Todo
             * Login olunca alınan Tokeni buraya parametre olarak yollamamzı gerekiyor
             * 
             */
            axios.get(csrfBaseUrl + 'sanctum/csrf-cookie').then(response => {
                axios.post(baseUrl + 'user/logout').then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            })
        }   

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