import { Breadcrumb, Menu } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";

const Home = () => {

    return(
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Login Successfuly</div>
            </Content>
        </Header>
    )

    

}

export default Home;