// function to generate markdown for README
function generateMarkdown(data) {
  // call the getLicenseBadge function to get the correct badge given the type of license req'd 
  const licenseBadge = getLicenseBadge(data.license);
  // the content needs to start at  the beginning of the lines since the markdown syntax expects 
  // it like that, so no indentation!
  return `# ${data.title}
  ${licenseBadge}
  ## Table of Contents
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributions](#contributions)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  [License](#license)\n

  ## Description
  ${data.description}\n

  ## Installation
  ${data.installation}\n

  ## Usage
  ${data.usage}\n

  ## Contributions
  ${data.contributions}\n

  ## Tests
  ${data.tests}\n

  ## Questions
  Please feel free to reach out to me with any questions about this project at [${data.email}](mailto:${data.email}). You can also check out my Github profile: [${data.github}](https://github.com/${data.github}).\n

  ---

  ## License
  This project is licensed under the terms of the ${licenseBadge} license:
  ${getLicenseText(data.license, data.licenseAuthor)}`;

};

//gets the appropriate badge given the type of license req'd
function getLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'ISC License':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'Unlicensed':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'Total Freedom':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';            
    default:
      console.log(`Invalid license: ${license}`);
  }
};

// gets the license text summary so we can have some licensing info on the readme page
function getLicenseText(license, author) {
  const year = new Date().getFullYear();
  switch (license) {
    case 'MIT':
      return `MIT License

${year} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`;

    case 'GNU GPLv3':
      return `GNU GPLv3 License

${year} ${author}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.`;

    case 'Apache License 2.0':
      return `Apache License 2.0

${year} ${author}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. See the Apache License 2.0 for more details.`;

    case 'ISC License':
      return `ISC License (ISC)

${year} ${author}

Permission to use, copy, modify, and/or distribute this software for any purpose with 
or without fee is hereby granted, provided that the above copyright notice and this permission 
notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS 
SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL 
DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN 
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH 
THE USE OR PERFORMANCE OF THIS SOFTWARE.`;

    case 'Unlicensed':
      return `Unlicensed

${year} ${author}

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE. See the Unlicenced license for more details.`;

    case 'Total Freedom':
      return `Total Freedom
      
${year} ${author}

Everyone is permitted to copy and distribute verbatim or modified 
copies of this license document, and changing it is allowed as long 
as the name is changed. 

DO WHAT THE F*** YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS FOR 
COPYING, DISTRIBUTION AND MODIFICATION. See the wtfpl license for more details.`;

    default:
      console.log(`Invalid license: ${license}`);
  }
};

module.exports = generateMarkdown;
