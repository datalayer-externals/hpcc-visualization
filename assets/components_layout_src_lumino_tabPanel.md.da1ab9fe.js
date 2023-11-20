import{_ as r,r as l,c as o,b as a,w as i,d as e,e as s,a as n,o as u}from"./app.8d0e5b28.js";const T='{"title":"Tab Panel","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes","slug":"attributes"},{"level":3,"title":"add_button_enabled","slug":"add-button-enabled"},{"level":3,"title":"tab_placement","slug":"tab-placement"},{"level":3,"title":"tabs_movable","slug":"tabs-movable"},{"level":2,"title":"Child Element data-??? attributes","slug":"child-element-data-attributes"},{"level":3,"title":"data-label","slug":"data-label"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"fit-request","slug":"fit-request"},{"level":3,"title":"update-request","slug":"update-request"},{"level":2,"title":"More Examples","slug":"more-examples"},{"level":3,"title":"Movable Tabs","slug":"movable-tabs"},{"level":2,"title":"Credits","slug":"credits"},{"level":3,"title":"Lumino","slug":"lumino"}],"relativePath":"components/layout/src/lumino/tabPanel.md"}',d={},c=e("h1",{id:"tab-panel",tabindex:"-1"},[s("Tab Panel "),e("a",{class:"header-anchor",href:"#tab-panel","aria-hidden":"true"},"#")],-1),m=e("p",null,[e("strong",null,"tag"),s(": "),e("code",null,"<hpcc-tabpanel>")],-1),p=e("hpcc-vitepress",{preview_border:"0px",style:{width:"100%",height:"600px"}},[e("pre",null,[e("code",null,`<script type="module">
    import "@hpcc-js/wc-layout";
<\/script>

<hpcc-tabpanel style="width:100%;height:100%">
  <div data-label="AAA" style="overflow:auto;min-width:48px">
    <h1>AAA Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
  <div data-label="BBB" style="overflow:auto;min-width:48px">
    <h1>BBB Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
</hpcc-tabpanel>
`)])],-1),h=n('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See <a href="./../../../../README.html">Getting Started</a> for details on how to include @hpcc-js/web-components in your application</p></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h2><h3 id="add-button-enabled" tabindex="-1"><code>add_button_enabled</code> <a class="header-anchor" href="#add-button-enabled" aria-hidden="true">#</a></h3><p><i>Whether the button to add new tabs is enabled</i></p><p><strong>Type:</strong> <code>boolean</code></p><p><strong>Default Value:</strong> false</p><h3 id="tab-placement" tabindex="-1"><code>tab_placement</code> <a class="header-anchor" href="#tab-placement" aria-hidden="true">#</a></h3><p><i>The placement of the tab bar relative to the content</i></p><p><strong>Type:</strong> <code>&quot;top&quot; | &quot;left&quot; | &quot;right&quot; | &quot;bottom&quot;</code></p><p><strong>Default Value:</strong> &quot;top&quot;</p><h3 id="tabs-movable" tabindex="-1"><code>tabs_movable</code> <a class="header-anchor" href="#tabs-movable" aria-hidden="true">#</a></h3><p><i>Whether the tabs are movable by the user</i></p><p><strong>Type:</strong> <code>boolean</code></p><p><strong>Default Value:</strong> false</p><h2 id="child-element-data-attributes" tabindex="-1">Child Element <code>data-???</code> attributes <a class="header-anchor" href="#child-element-data-attributes" aria-hidden="true">#</a></h2><h3 id="data-label" tabindex="-1"><code>data-label</code> <a class="header-anchor" href="#data-label" aria-hidden="true">#</a></h3><p><em>The tabbed panel will display this text as the tab label</em></p><p><strong>Type</strong>: <code>string</code></p><p><strong>Default Value</strong>: Will first revert to the <code>id</code> of the child element and then the element <code>tag</code> if no <code>id</code>.</p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><h3 id="fit-request" tabindex="-1"><code>fit-request</code> <a class="header-anchor" href="#fit-request" aria-hidden="true">#</a></h3><p><em>Emitted when a child component should recalculate its size constraints to fit the space requirements of its child widgets, and to update their position and size. Typically when a child elements visibility state changes.</em></p><h3 id="update-request" tabindex="-1"><code>update-request</code> <a class="header-anchor" href="#update-request" aria-hidden="true">#</a></h3><p><em>Emitted whenever the split panel contents should be updated, typically when split pane has been resized.</em></p><h2 id="more-examples" tabindex="-1">More Examples <a class="header-anchor" href="#more-examples" aria-hidden="true">#</a></h2><h3 id="movable-tabs" tabindex="-1">Movable Tabs <a class="header-anchor" href="#movable-tabs" aria-hidden="true">#</a></h3><p><strong>tag</strong>: <code>&lt;hpcc-tabpanel tabsMovable&gt;</code></p>',27),b=e("hpcc-vitepress",{preview_border:"0px",style:{width:"100%",height:"600px"}},[e("pre",null,[e("code",null,`<script type="module">
    import "@hpcc-js/wc-layout";
<\/script>

<hpcc-tabpanel tabs_movable style="width:100%;height:100%">
  <div data-label="AAA" style="overflow:auto;min-width:48px">
    <h1>AAA Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
  <div data-label="BBB" style="overflow:auto;min-width:48px">
    <h1>BBB Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
</hpcc-tabpanel>
`)])],-1),g=n('<h2 id="credits" tabindex="-1">Credits <a class="header-anchor" href="#credits" aria-hidden="true">#</a></h2><h3 id="lumino" tabindex="-1">Lumino <a class="header-anchor" href="#lumino" aria-hidden="true">#</a></h3><p><em>Lumino is a set of JavaScript packages, written in TypeScript, that provide a rich toolkit of widgets, layouts, events, and data structures. These enable developers to construct extensible high-performance desktop-like web applications, such as JupyterLab. Lumino was formerly known as PhosphorJS.</em></p><ul><li><a href="https://lumino.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Home Page</a></li><li><a href="https://github.com/jupyterlab/lumino" target="_blank" rel="noopener noreferrer">GitHub</a></li></ul>',4);function f(v,_,q,w,x,y){const t=l("ClientOnly");return u(),o("div",null,[c,m,a(t,null,{default:i(()=>[p]),_:1}),h,a(t,null,{default:i(()=>[b]),_:1}),g])}var P=r(d,[["render",f]]);export{T as __pageData,P as default};
