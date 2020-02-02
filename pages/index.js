//import React from 'react';
import commerce from '../ecommerce';
import React, {Component} from 'react';
import web3 from '../web3';


class CommerceIndex extends Component{
    static async getInitialProps(){
        const accounts = await web3.eth.getAccounts();
        return {accounts};
    }
    
    render(){
        <h1>Hello guys</h1>
    }
}

export default CommerceIndex