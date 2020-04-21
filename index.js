const program = require('commander');

module.exports = () => {
  program
    .version(require(`${__dirname}/package.json`).version, '-v, --version')
    .parse(process.argv);
  console.log('reactance');
}
