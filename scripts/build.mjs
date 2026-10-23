import {readFile,writeFile} from 'node:fs/promises';
const css=await readFile(new URL('../src/styles.css',import.meta.url),'utf8');
const js=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="DSQUARE AI Visibility Checker — AI Visibility readiness, supporting SEO checks and expert review"><title>AI Visibility Checker | DSQUARE</title><link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400;500;600;700&family=Google+Sans:wght@400;700&display=swap" rel="stylesheet"><style>${css}</style></head><body><div id="app"></div><dialog id="dialog" class="modal" aria-labelledby="dialog-title"></dialog><script>${js}</script></body></html>`;
await writeFile(new URL('../index.html',import.meta.url),html);
console.log('Built standalone EN/VI prototype');
