import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Buisness extends Component{
    render() {
        return (
            <div>
                <Link to="/"><button className="p_btn">PERSONAL</button></Link>
                <Link to="/buisness"><button className="b_btn">BUSINESS</button></Link>
                <form>
                    <label>
                        <input type="text" placeholder="Buisness Name"/>
                    </label><br/><br/>
                    <label>
                        <input type="text" placeholder="Email"/>
                    </label><br/><br/>
                    <label>
                        <input type="text" placeholder="Phone Number"/>
                    </label><br/><br/>
                </form>   
                <Link to="/next"><button className="navLinks">NEXT</button></Link>
            </div>
        )
    }
}