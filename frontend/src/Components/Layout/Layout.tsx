import React from "react";

interface ILayout {
    children: Array<JSX.Element> | JSX.Element;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return <div> {children} </div>
};

export default Layout;
