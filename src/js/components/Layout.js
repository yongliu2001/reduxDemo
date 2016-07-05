/**
 * Created by yongliu on 5/07/2016.
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Layout;