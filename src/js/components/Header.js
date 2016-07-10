import React from 'react';
import Title from './Header/Title';

class Header extends React.Component {

    onTitleChanged(e) {
        console.log(e.target.value);
        this.props.changeTitle(e.target.value);
    }
    
    render() {
        return (
            <div>
                <Title titleName={this.props.title} />
                <input value={this.props.title} onChange={this.onTitleChanged.bind(this)}/>
            </div>
        );
    }
}

export default Header;