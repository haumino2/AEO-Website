import http from 'node:http';
import {readFile} from 'node:fs/promises';
const routes={'/':'index.html','/index.html':'index.html','/presenter':'presenter.html','/presenter.html':'presenter.html'};
const port=Number(process.env.PORT||4176),host=process.env.HOST||'127.0.0.1';
http.createServer(async(req,res)=>{
  const name=routes[req.url?.split('?')[0]];
  if(!name){res.writeHead(404);res.end('Not found');return}
  try{const html=await readFile(new URL('../'+name,import.meta.url));res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(html)}catch{res.writeHead(500);res.end('Build the prototype first')}
}).listen(port,host,()=>console.log(`DSQUARE prototype: http://${host}:${port}`));
