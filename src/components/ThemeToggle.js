import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';


class ThemeToggle extends React.Component {
    static contextType = ThemeContext;
    
    render() { 
        console.log("this.context"+this.context)
        const {toggleTheme} = this.context;
        return (
            <button onClick={toggleTheme}>Toggle the Theme</button>
        )
    }
}
 
export default ThemeToggle;