import{_ as i,r as s,c as l,b as a,w as n,d as e,e as t,a as d,o}from"./app.8d0e5b28.js";const Q='{"title":"QuarterPie","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Published Properties","slug":"published-properties"}],"relativePath":"packages/chart/src/QuarterPie.md"}',c={},h=e("h1",{id:"quarterpie",tabindex:"-1"},[t("QuarterPie "),e("a",{class:"header-anchor",href:"#quarterpie","aria-hidden":"true"},"#")],-1),p=e("p",null,[e("a",{href:"./Pie.html"},"Pie"),t(", "),e("a",{href:"./HalfPie.html"},"HalfPie"),t(" and QuarterPie are effectively the same class, but have different starting and ending angles. They support all of the same properties.")],-1),u=e("hpcc-vitepress",{style:{width:"100%",height:"600px"}},[e("pre",null,[e("code",null,`<div id="placeholder" style="height:400px">
</div>
<script type="module">
  import { QuarterPie } from "@hpcc-js/chart";

  new QuarterPie()
      .columns(["Category", "Value"])
      .data([
          ["A", 34],
          ["B", 55],
          ["C", 89],
          ["D", 144]
      ])
      .target("placeholder")
      .render()
      ;
<\/script>
`)])],-1),_=e("hpcc-vitepress",{style:{width:"100%",height:"600px"}},[e("pre",null,[e("code",null,`<div id="placeholder" style="height:400px">
</div>
<script type="module">
  import { QuarterPie } from "@hpcc-js/chart";

  new QuarterPie()
      .columns(["Category", "Value"])
      .data([
          ["A", 34],
          ["B", 55],
          ["C", 89],
          ["D", 144]
      ])
      .target("placeholder")
      .innerRadius(62)
      .showSeriesPercentage(true)
      .showSeriesValue(true)
      .render()
      ;
<\/script>
`)])],-1),P=d("",3);function f(m,g,v,x,y,b){const r=s("ClientOnly");return o(),l("div",null,[h,p,a(r,null,{default:n(()=>[u]),_:1}),a(r,null,{default:n(()=>[_]),_:1}),P])}var V=i(c,[["render",f]]);export{Q as __pageData,V as default};
