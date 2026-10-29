import vm from 'node:vm';
export function renderStatic(js){
 const nodes={app:{innerHTML:'',addEventListener(){}},dialog:{innerHTML:'',classList:{toggle(){}},addEventListener(){}}},robots={content:''};
 const document={getElementById:id=>nodes[id]||null,querySelector:s=>s==='meta[name="robots"]'?robots:null,documentElement:{lang:'vi'},head:{append(){}},createElement:()=>({}),title:''};
 const location={hash:'',search:'',pathname:'/',protocol:'https:',href:'https://example.com/'};
 vm.runInNewContext(js,{document,location,window:{addEventListener(){}},history:{replaceState(){}},URL,URLSearchParams,Intl,Date,Set,matchMedia:()=>({matches:false})},{timeout:3000});
 return nodes.app.innerHTML;
}
