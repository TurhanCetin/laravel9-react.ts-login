import React from "react";
import { Row, Col } from 'antd';
import { Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";

interface ILoyout{
    children: Array<JSX.Element>| JSX.Element;
}

const Layout: React.FC<ILoyout> = ({children}) => {


    return(
  
     <Header>
       <Row>
        <Col offset={11} >
          <Title 
            style={{ color: '#fff' }}>
            Log In
          </Title>
        </Col>
       </Row>
        <Row>
          <Col span={12} offset={6}>
            {children}
          </Col>
        </Row>
    </Header>
    
    )

}


export default Layout