const fs = require('fs');
const path = require('path');

const buttonTemplate = fs.readFileSync(
  './ButtonTemplate.tsx',
  'utf8',
  () => {},
);

fs.writeFile('../src/components/Button/Button.tsx', buttonTemplate, (error) => {
  if (error) {
    console.log(error);
  }
});
