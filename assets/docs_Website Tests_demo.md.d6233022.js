import{_ as e,c as t,o as n,a as o}from"./app.8d0e5b28.js";const _='{"title":"Demo...","description":"","frontmatter":{},"headers":[{"level":2,"title":"Calling Roxie","slug":"calling-roxie"}],"relativePath":"docs/Website Tests/demo.md"}',a={},r=o(`<h1 id="demo" tabindex="-1">Demo... <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h1><p><em>This is a demo of how to merger Markdown with live JavaScript via the HPCC-Systems Visualization Framework</em></p><h2 id="calling-roxie" tabindex="-1">Calling Roxie <a class="header-anchor" href="#calling-roxie" aria-hidden="true">#</a></h2><p>In this example we call a roxie service and populate the response into a table:</p><div class="language-sample"><pre><code>
//  Create a connection to a roxie query  ---
import { Query } from &quot;@hpcc-js/comms&quot;;
const query = Query.attach({ baseUrl: &quot;https://play.hpccsystems.com:18002/&quot; }, &quot;roxie&quot;, &quot;h3testcities&quot;);


//  Create a Table to display the results in  ---
import { Table } from &quot;@hpcc-js/dgrid&quot;;

const table = new Table()
    .target(&quot;target&quot;)
    .columns([&quot;h3Index&quot;, &quot;Row Count&quot;])
    .render()
    ;


//  Call the roxie service and populate the table above  ---
query.submit({
    h3PolySetRes: 4,
    childThreshold: 10,
    h3PolySet: {
        Row: [{
            lat: 56.49117606538043,
            lon: -15.985107421875002
        }, {
            lat: 56.49117606538043,
            lon: -0.16479492187499978
        }, {
            lat: 49.61822155651335,
            lon: -0.16479492187499978
        }, {
            lat: 49.61822155651335,
            lon: -0.16479492187499978
        }, {
            lat: 49.61822155651335,
            lon: -15.985107421875002
        }]
    }
}).then(response =&gt; {
    table
        .data(response.IndexCountSet.map(row=&gt;[row.h3index, row.rowcount]))
        .render()
        ;
});

</code></pre></div>`,5),s=[r];function i(l,c,d,h,u,p){return n(),t("div",null,s)}var q=e(a,[["render",i]]);export{_ as __pageData,q as default};
