/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const fs = require('fs');

let files = fs.readdirSync('.');
console.log(files);
let list = document.querySelector('#files');
files.forEach(file =>{
    list.innerHTML += `<li>${filee}</li>`;
});
