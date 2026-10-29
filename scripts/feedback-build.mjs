import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {renderStatic} from './render-static.mjs';
const css=await readFile(new URL('../src/styles.css',import.meta.url),'utf8'),js=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
const content=renderStatic(js),version=createHash('sha256').update(js+css).digest('hex').slice(0,10);
const head=(privatePage=false,depth='')=>`<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Kiểm tra mức sẵn sàng AI Visibility qua 6 tín hiệu website | DSQUARE"><meta name="robots" content="${privatePage?'noindex, nofollow':'index, follow'}"><title>Kiểm tra AI Visibility miễn phí | DSQUARE</title><link rel="stylesheet" href="${depth}src/styles.css?v=${version}"><script data-app defer src="${depth}src/app.js?v=${version}"></script></head>`;
await writeFile(new URL('../index.html',import.meta.url),head()+`<body><div id="app">${content}</div><dialog id="dialog" class="modal" aria-labelledby="dialog-title"></dialog><noscript><p>Đây là bản xem trước dùng dữ liệu mẫu — bật JavaScript để trải nghiệm báo cáo</p></noscript></body></html>`);
for(const path of ['result','report']){await mkdir(new URL('../'+path+'/',import.meta.url),{recursive:true});await writeFile(new URL('../'+path+'/index.html',import.meta.url),head(true,'../')+'<body><div id="app"></div><dialog id="dialog" class="modal" aria-labelledby="dialog-title"></dialog><noscript>Báo cáo chỉ có trong phiên trải nghiệm hiện tại</noscript></body></html>')}
console.log('Built static Vietnamese landing and noindex result/report routes; assets '+version);
