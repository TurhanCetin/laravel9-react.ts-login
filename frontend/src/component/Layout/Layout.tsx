import React from "react";
import { Row, Col } from 'antd';
interface ILoyout{
    children: Array<JSX.Element>| JSX.Element;
}

const Layout: React.FC<ILoyout> = ({children}) => {

    return( 
    <Row>
      <Col span={12} offset={6}>
        {children}
      </Col>
    </Row>
    )

}


export default Layout