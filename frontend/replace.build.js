var replace = require('replace-in-file');
var newPort = process.argv[2];
var newUrl = process.argv[3];
var oldPort = process.argv[4];
var oldUrl = process.argv[5];
const options1 = {
  files: 'src/environments/environment.ts',
  from: oldPort,
  to: newPort,
  allowEmptyPaths: false,
};

const options2 = {
  files: 'src/environments/environment.ts',
  from: oldUrl,
  to: newUrl,
  allowEmptyPaths: false,
};


try {
  let changedFiles = replace.sync(options1);
  changedFiles = replace.sync(options2);
  console.log('Build Port Backend: ' + newPort);
  console.log('Build Url: ' + newUrl);
}
catch (error) {
  console.error('Error occurred:', error);
}
