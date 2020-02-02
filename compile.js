// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');

// const buildPath = path.resolve(__dirname, 'build');
// fs.removeSync(buildPath);

// const lotteryPath = path.resolve(__dirname, 'contracts', 'project.sol');
// const source = fs.readFileSync(lotteryPath, 'utf8');

// module.exports = solc.compile(source, 1).contracts[':Ecommerce'];
// //console.log(module.exports.interface);
// //console.log(solc.compile(source, 1).contracts[':Ecommerce']);
// const output = solc.compile(source, 1).contracts;

// fs.ensureDirSync(buildPath);

// for (let contract in output) {
//   fs.outputJsonSync(
//     path.resolve(buildPath, contract.replace(':', '') + '.json'),
//     output[contract]
//   );
// }


const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'ECommerce.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
module.exports = solc.compile(source, 1).contracts[':Ecommerce'];
console.log(module.exports.interface);