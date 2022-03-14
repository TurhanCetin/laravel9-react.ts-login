import React from "react";
import { Row, Col, Tabs } from 'antd';
import { Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";

interface ILoyout{
    childLogin: Array<JSX.Element>| JSX.Element;
    childSignup: Array<JSX.Element>| JSX.Element;
    key?:String
}

const Layout: React.FC<ILoyout> = ({childLogin,childSignup ,key}) => {

  const {TabPane} = Tabs;

  const callback = () => {
    console.log(key);
  }

    return(
        <Header>
            <Title 
              style={{ color: '#fff' }}>
              Log In
            </Title>
          <Row gutter={16}>
            <Col span={8}/>
            <Col span={8}>
                <Tabs defaultActiveKey="Tab 1"onChange={callback}>
                  <TabPane tab="Login" key="1">
                    {childLogin}
                  </TabPane>
                  <TabPane tab="Sign Up" key="2">
                    {childSignup}
                  </TabPane>
                </Tabs>         
            </Col>
            <Col span={8}/>
          </Row>
      </Header>
    )

}


export default Layout