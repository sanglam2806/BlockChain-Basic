import web3 from './web3';
import commerce from './build/Ecommerce.json';

const instance = new web3.eth.Contract(
    JSON.parse(commerce.interface),
    '0xdCeA35294f7f4cBd73d35Af9DC0FdeC61c0638be'
);
export default instance;