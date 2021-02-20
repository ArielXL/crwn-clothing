import React, { Component } from 'react';
import './menu-item.styles.scss';

class MenuItem extends Component {
    
    render() { 
        const { title, imageUrl, size } = this.props

        return (
            <div className={`${size} menu-item`}>
                <div
                    className='background-image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        );
    }
}
 
export default MenuItem;