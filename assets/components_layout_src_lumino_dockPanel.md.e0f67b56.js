import{_ as i,r as d,c as l,b as o,w as s,d as e,e as t,a as n,o as r}from"./app.8d0e5b28.js";const x='{"title":"Dock Panel","description":"","frontmatter":{},"headers":[{"level":2,"title":"Child Element data-??? attributes","slug":"child-element-data-attributes"},{"level":3,"title":"data-label","slug":"data-label"},{"level":3,"title":"data-mode","slug":"data-mode"},{"level":3,"title":"data-ref","slug":"data-ref"},{"level":3,"title":"data-closable","slug":"data-closable"},{"level":3,"title":"data-caption","slug":"data-caption"},{"level":2,"title":"Events","slug":"events"},{"level":3,"title":"child-added","slug":"child-added"},{"level":3,"title":"child-hidden","slug":"child-hidden"},{"level":3,"title":"child-removed","slug":"child-removed"},{"level":3,"title":"child-shown","slug":"child-shown"},{"level":3,"title":"closeRequest","slug":"closerequest"},{"level":3,"title":"fit-request","slug":"fit-request"},{"level":3,"title":"layout-modified","slug":"layout-modified"},{"level":3,"title":"update-request","slug":"update-request"},{"level":2,"title":"Credits","slug":"credits"},{"level":3,"title":"Lumino","slug":"lumino"}],"relativePath":"components/layout/src/lumino/dockPanel.md"}',c={},h=e("h1",{id:"dock-panel",tabindex:"-1"},[t("Dock Panel "),e("a",{class:"header-anchor",href:"#dock-panel","aria-hidden":"true"},"#")],-1),u=e("p",null,[e("strong",null,"tag"),t(": "),e("code",null,"<hpcc-dockpanel>")],-1),m=e("hpcc-vitepress",{preview_border:"0px",style:{width:"100%",height:"600px"}},[e("pre",null,[e("code",null,`<script type="module">
    import "@hpcc-js/wc-layout";
<\/script>

<hpcc-dockpanel style="width:100%;height:100%">
  <div id="one" data-label="AAAA" style="overflow:auto;min-width:48px;min-height:48px">
    <h1>AAAA HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
  <div id="three" data-mode="split-right" data-closable="true" style="overflow:auto;min-width:48px;min-height:48px">
    <h1>CCCC HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
  <div data-mode="tab-after" data-ref="three" data-caption="What no label!" style="overflow:auto;min-width:48px;min-height:48px">
    <h1>DDDD HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
  <div data-mode="split-bottom" data-ref="one" style="overflow:auto;min-width:48px;min-height:48px">
    <h1>BBBB HTML Ipsum Presents</h1>
    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
  </div>
</hpcc-dockpanel>
<script>
  document.querySelector("hpcc-dockpanel").addEventListener("closeRequest", function (evt) {
    if (!confirm(\`Close Tab "\${evt.detail.tagName} #\${evt.detail.id}"?\`)) {
      evt.preventDefault();
    }
  });
<\/script>
`)])],-1),p=n('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>See <a href="./../../../../README.html">Getting Started</a> for details on how to include @hpcc-js/web-components in your application</p></div><h2 id="child-element-data-attributes" tabindex="-1">Child Element <code>data-???</code> attributes <a class="header-anchor" href="#child-element-data-attributes" aria-hidden="true">#</a></h2><h3 id="data-label" tabindex="-1"><code>data-label</code> <a class="header-anchor" href="#data-label" aria-hidden="true">#</a></h3><p><em>The tabbed panel will display this text as the tab label</em></p><p><strong>Type</strong>: <code>string</code></p><p><strong>Default Value</strong>: Will first revert to the <code>id</code> of the child element and then the element <code>tag</code> if no <code>id</code>.</p><h3 id="data-mode" tabindex="-1"><code>data-mode</code> <a class="header-anchor" href="#data-mode" aria-hidden="true">#</a></h3><p><em>How the child element will be displayed in the tabbed panel</em></p><p><strong>Type</strong>: <code>split-top | split-left | split-right | split-bottom | tab-before | tab-after</code></p><ul><li><code>split-top</code>: The child element will be displayed above the <code>data-ref</code> element.</li><li><code>split-left</code>: The child element will be displayed to the left of the <code>data-ref</code> element.</li><li><code>split-right</code>: The child element will be displayed to the right of the <code>data-ref</code> element.</li><li><code>split-bottom</code>: The child element will be displayed below the <code>data-ref</code> element.</li><li><code>tab-before</code>: The child element will be inserted as a tab before the <code>data-ref</code> element.</li><li><code>tab-after</code>: The child element will be appended as a tab after the <code>data-ref</code> element.</li></ul><p><strong>Default Value</strong>: <code>tab-after</code></p><h3 id="data-ref" tabindex="-1"><code>data-ref</code> <a class="header-anchor" href="#data-ref" aria-hidden="true">#</a></h3><p><em>The reference element <code>id</code> used when appending child items (optional)</em></p><p><strong>Type</strong>: <code>string</code></p><p><strong>Default Value:</strong> When omitted the previous child element will be used as the reference.</p><h3 id="data-closable" tabindex="-1"><code>data-closable</code> <a class="header-anchor" href="#data-closable" aria-hidden="true">#</a></h3><p><em>Allow a tabbed item to be closed by clicking on the displayed &quot;close&quot; button</em></p><p><strong>Type:</strong> <code>boolean</code></p><p><strong>Default Value:</strong> <code>false</code></p><h3 id="data-caption" tabindex="-1"><code>data-caption</code> <a class="header-anchor" href="#data-caption" aria-hidden="true">#</a></h3><p><em>The tooltip text for the tabbed item</em></p><p><strong>Type:</strong> <code>string</code></p><p><strong>Default Value:</strong> <code>&quot;</code></p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><h3 id="child-added" tabindex="-1"><code>child-added</code> <a class="header-anchor" href="#child-added" aria-hidden="true">#</a></h3><p><em>Emitted when a child has been added to the dock panel.</em></p><h3 id="child-hidden" tabindex="-1"><code>child-hidden</code> <a class="header-anchor" href="#child-hidden" aria-hidden="true">#</a></h3><p><em>Emitted when a child has been hidden in the dock panel.</em></p><h3 id="child-removed" tabindex="-1"><code>child-removed</code> <a class="header-anchor" href="#child-removed" aria-hidden="true">#</a></h3><p><em>Emitted when a child has been removed from the dock panel.</em></p><h3 id="child-shown" tabindex="-1"><code>child-shown</code> <a class="header-anchor" href="#child-shown" aria-hidden="true">#</a></h3><p><em>Emitted when a child has been shown in the dock panel.</em></p><h3 id="closerequest" tabindex="-1"><code>closeRequest</code> <a class="header-anchor" href="#closerequest" aria-hidden="true">#</a></h3><p><em>Emitted whenever the user tries to close a tab. Calling <code>evt.preventDefault()</code> will prevent the tab from closing</em></p><ul><li><code>evt.detail</code> references the HTML Element that will be closed.</li><li><code>evt.target</code> references the dockpanel element.</li></ul><h3 id="fit-request" tabindex="-1"><code>fit-request</code> <a class="header-anchor" href="#fit-request" aria-hidden="true">#</a></h3><p><em>Emitted when a child component should recalculate its size constraints to fit the space requirements of its child widgets, and to update their position and size. Typically when a child elements visibility state changes.</em></p><h3 id="layout-modified" tabindex="-1"><code>layout-modified</code> <a class="header-anchor" href="#layout-modified" aria-hidden="true">#</a></h3><p><em>Emitted whenever the layout of the dockpanel changes. Good time to serialize the layout for undo/redo capabilities.</em></p><h3 id="update-request" tabindex="-1"><code>update-request</code> <a class="header-anchor" href="#update-request" aria-hidden="true">#</a></h3><p><em>Emitted whenever the split panel contents should be updated, typically when split pane has been resized.</em></p><h2 id="credits" tabindex="-1">Credits <a class="header-anchor" href="#credits" aria-hidden="true">#</a></h2><h3 id="lumino" tabindex="-1">Lumino <a class="header-anchor" href="#lumino" aria-hidden="true">#</a></h3><p><em>Lumino is a set of JavaScript packages, written in TypeScript, that provide a rich toolkit of widgets, layouts, events, and data structures. These enable developers to construct extensible high-performance desktop-like web applications, such as JupyterLab. Lumino was formerly known as PhosphorJS.</em></p><ul><li><a href="https://lumino.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Home Page</a></li><li><a href="https://github.com/jupyterlab/lumino" target="_blank" rel="noopener noreferrer">GitHub</a></li></ul>',45);function f(b,g,v,w,y,q){const a=d("ClientOnly");return r(),l("div",null,[h,u,o(a,null,{default:s(()=>[m]),_:1}),p])}var T=i(c,[["render",f]]);export{x as __pageData,T as default};
