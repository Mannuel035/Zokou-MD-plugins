const fs = require('fs');
const path = require('path');


const jsonFilePath = path.join(__dirname, 'plugins.json');
const rawData = fs.readFileSync(jsonFilePath);
const pluginsData = JSON.parse(rawData);


let readmeContent = `<h1 align="center"> MANU-2.0 Version-Française-plugins </h1>
<div align="center">
<br /> 
---

- Vous pouvez creer vos propres plugins et les proposer

---`;

pluginsData.pluginsVF.forEach(plugin => {
    readmeContent += `


<h4 align="center"> ${plugin.name} </h1>

  Description : ${plugin.desc}

\`\`\`
${plugin.url}
\`\`\`
- Auteur : ${plugin.author}
---`
});


const readmeFilePath = path.join(__dirname, 'MANU-VF.md');
fs.writeFileSync(readmeFilePath, readmeContent);

console.log('MANU-VF.md généré avec succès');


readmeContent = `<h1 align="center"> MANU-2.0 English-version-plugins </h1>
<div align="center">
<br /> 
---

- Make your own plugins and propose it. thanks

---`;

pluginsData.pluginsVE.forEach(plugin => {
    readmeContent += `


<h4 align="center"> ${plugin.name} </h1>

  Description : ${plugin.desc}

\`\`\`
${plugin.url}
\`\`\`
- Author : ${plugin.author}
---`
});


const readmeFilePath2 = path.join(__dirname, 'MANU-VE.md');
fs.writeFileSync(readmeFilePath2, readmeContent);
console.log('MANU-VE.md généré avec succès');
