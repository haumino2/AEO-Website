import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {renderStatic} from './render-static.mjs';
const css=await readFile(new URL('../src/styles.css',import.meta.url),'utf8'),js=await readFile(new URL('../src/app.js',import.meta.url),'utf8');
const version=createHash('sha256').update(js+css).digest('hex').slice(0,10);
const title='AI Visibility Checker | DSQUARE';
const descriptions={vi:'Kiểm tra mức sẵn sàng AI Visibility qua 6 tín hiệu website | DSQUARE',en:'Check your website’s AI search readiness across six signals | DSQUARE'};
function head(lang,depth){
 const description=descriptions[lang];
 return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${description}"><meta name="robots" content="noindex, nofollow"><meta property="og:type" content="website"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><title>${title}</title><link rel="icon" type="image/svg+xml" href="${depth}favicon.svg"><link rel="preload" href="${depth}src/fonts/google-sans-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="${depth}src/styles.css?v=${version}"><script data-app defer src="${depth}src/app.js?v=${version}"></script></head>`;
}
const dialog='<dialog id="dialog" class="modal" aria-labelledby="dialog-title"></dialog>';
const base=new URL('../',import.meta.url);
for(const [path,lang] of [['','vi'],['vi/','vi'],['en/','en']]){
 await mkdir(new URL(path,base),{recursive:true});
 const fallback=lang==='en'?'Enable JavaScript to try the sample report':'Bật JavaScript để trải nghiệm báo cáo mẫu';
 await writeFile(new URL(path+'index.html',base),head(lang,path?'../':'')+`<body><div id="app">${renderStatic(js,lang)}</div>${dialog}<noscript><p>${fallback}</p></noscript></body></html>`);
}
for(const path of ['result/','report/']){
 await mkdir(new URL(path,base),{recursive:true});
 await writeFile(new URL(path+'index.html',base),head('vi','../')+`<body><div id="app"></div>${dialog}<noscript>Báo cáo chỉ có trong phiên trải nghiệm hiện tại</noscript></body></html>`);
}
console.log('Built noindex VI/EN landing and result/report routes; assets '+version);
