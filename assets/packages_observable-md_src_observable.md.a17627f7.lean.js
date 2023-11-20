import{_ as s,r,c as l,b as n,w as o,d as e,e as t,a as d,o as i}from"./app.8d0e5b28.js";const O='{"title":"Observable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Observable","slug":"observable-1"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Credits","slug":"credits"}],"relativePath":"packages/observable-md/src/observable.md"}',c={},h=e("h1",{id:"observable",tabindex:"-1"},[t("Observable "),e("a",{class:"header-anchor",href:"#observable","aria-hidden":"true"},"#")],-1),b=e("p",null,[e("strong",null,"Class"),t(": "),e("code",null,"Observable")],-1),v=e("hpcc-vitepress",{style:{width:"100%",height:"600px"}},[e("pre",null,[e("code",null,`<div id="placeholder" style="width:100%;height:600px">
</div>
<script type="module">
    import { Observable } from "@hpcc-js/observable-md";
    
    const observable = new Observable()
        .target("placeholder")
        .showValues(true)
        .mode("omd")
        .text(\`
        # Hello World

        \\\`\\\`\\\`
        hw = 'Hello' + ' World';            
        tick = {                           
          let i = 0;                       
          while (true) {                   
            yield ++i;                     
          }                                
        }
        \\\`\\\`\\\`
        \`)                                  
        .render()
        ;
<\/script>
`)])],-1),p=d("",4);function _(u,m,f,x,g,w){const a=r("ClientOnly");return i(),l("div",null,[h,b,n(a,null,{default:o(()=>[v]),_:1}),p])}var T=s(c,[["render",_]]);export{O as __pageData,T as default};
