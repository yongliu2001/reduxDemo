/**
 * Created by yongliu on 5/07/2016.
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome !"
        };
    }
    onTitleChanged(title) {
        this.setState({title});
    }

    render() {
        // setTimeout(()=> {
        //     this.setState({
        //         title: "Welcome, Yong !"
        //     })
        // },2000);

        return (
            <div>
                <Header title={this.state.title} changeTitle={this.onTitleChanged.bind(this)} />
                <Footer />
            </div>
        );
    }
}

export default Layout;