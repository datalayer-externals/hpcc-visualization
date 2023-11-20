import{_ as t,c as e,o,a as i}from"./app.8d0e5b28.js";const q='{"title":"HTMLEditor","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Published Properties","slug":"published-properties"}],"relativePath":"packages/codemirror/docs/HTMLEditor.md"}',r={},a=i(`<h1 id="htmleditor" tabindex="-1">HTMLEditor <a class="header-anchor" href="#htmleditor" aria-hidden="true">#</a></h1><p>HTMLEditor displays an editable snippet of HTML with syntax coloring and code folding.</p><div class="language-sample-code"><pre><code>import { HTMLEditor } from &quot;@hpcc-js/codemirror&quot;;

new HTMLEditor()
    .html(\`\\
&lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;utf-8&quot; /&gt;
        &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
        &lt;title&gt;hpcc-js&lt;/title&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
        &lt;script src=&quot;packages/util/dist/index.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;packages/common/dist/index.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;packages/api/dist/index.js&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;packages/codemirror/dist/index.js&quot;&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body onload=&quot;alert(&#39;hello world&#39;)&quot;&gt;
        &lt;div id=&quot;target&quot; style=&quot;width:500px;height:500px;&quot;&gt;&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
\`)
    .target(&quot;target&quot;)
    .render()
    ;

</code></pre></div><p>HTMLEditor extends <a href="./Editor.html">Editor</a>.</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h2 id="published-properties" tabindex="-1">Published Properties <a class="header-anchor" href="#published-properties" aria-hidden="true">#</a></h2><div class="language-@hpcc-js/codemirror:HTMLEditor"><pre><code></code></pre></div>`,7),d=[a];function s(l,n,c,p,h,u){return o(),e("div",null,d)}var m=t(r,[["render",s]]);export{q as __pageData,m as default};
