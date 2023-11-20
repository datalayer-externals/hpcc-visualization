import{_ as t,c as e,o as n,a}from"./app.8d0e5b28.js";const l='{"title":"Graph2 (beta)","description":"","frontmatter":{},"headers":[{"level":2,"title":"With Categories","slug":"with-categories"},{"level":2,"title":"With Annotations","slug":"with-annotations"}],"relativePath":"packages/graph/docs/Graph2.md"}',r={},o=a(`<h1 id="graph2-beta" tabindex="-1">Graph2 (beta) <a class="header-anchor" href="#graph2-beta" aria-hidden="true">#</a></h1><p>Graph2 is a newer implementation of the Graph widget, the main focus has been on improving performance and reverting to a data driven modal.</p><div class="language-sample-code"><pre><code>import {Graph2} from &quot;@hpcc-js/graph&quot;;

const subgraphs = [
    { id: 10, text: &quot;Adults&quot; }
];

const vertices = [
    { id: 0, text: &quot;Daddy&quot; },
    { id: 1, text: &quot;Mummy&quot; },
    { id: 2, text: &quot;Baby&quot; }
];

const edges = [
    { id: 0, source: vertices[0], target: vertices[2] },
    { id: 1, source: vertices[1], target: vertices[2] }
];

const hierarchy = [
    { parent: subgraphs[0], child: vertices[0] },
    { parent: subgraphs[0], child: vertices[1] }
];

new Graph2()
    .target(&quot;target&quot;)
    .data({ subgraphs, vertices, edges, hierarchy })
    .layout(&quot;Hierarchy&quot;)
    .render()
    ;
</code></pre></div><h2 id="with-categories" tabindex="-1">With Categories <a class="header-anchor" href="#with-categories" aria-hidden="true">#</a></h2><div class="language-sample-code"><pre><code>import {Graph2} from &quot;@hpcc-js/graph&quot;;

const subgraphs = [
    { id: 10, text: &quot;Adults&quot; }
];

const vertices = [
    { categoryID: 0, id: 0, text: &quot;Daddy&quot; },
    { categoryID: 0, id: 1, text: &quot;Mummy&quot; },
    { categoryID: 1, id: 2, text: &quot;Pickup&quot;, centroid: true }
];

const edges = [
    { id: 0, source: vertices[0], target: vertices[2] },
    { id: 1, source: vertices[1], target: vertices[2] }
];

const hierarchy = [
    { parent: subgraphs[0], child: vertices[0] },
    { parent: subgraphs[0], child: vertices[1] }
];

new Graph2()
    .target(&quot;target&quot;)
    .categories([{
        id: 0,
        imageChar: &quot;fa-user&quot;
    },{
        id: 1,
        imageChar: &quot;fa-car&quot;
    }])
    .data({ subgraphs, vertices, edges, hierarchy })
    .layout(&quot;Hierarchy&quot;)
    .render()
    ;
</code></pre></div><h2 id="with-annotations" tabindex="-1">With Annotations <a class="header-anchor" href="#with-annotations" aria-hidden="true">#</a></h2><div class="language-sample-code"><pre><code>import {Graph2} from &quot;@hpcc-js/graph&quot;;

const subgraphs = [
    { id: 10, text: &quot;Adults&quot; }
];

const vertices = [
    { categoryID: 0, id: 0, text: &quot;Daddy&quot;, centroid: true },
    { categoryID: 0, id: 1, text: &quot;Mummy&quot; },
    { categoryID: 1, id: 2, text: &quot;Pickup&quot;, annotations:[0, 1] }
];

const edges = [
    { id: 0, source: vertices[0], target: vertices[2] },
    { id: 1, source: vertices[1], target: vertices[2] }
];

const hierarchy = [
    { parent: subgraphs[0], child: vertices[0] },
    { parent: subgraphs[0], child: vertices[1] }
];

new Graph2()
    .target(&quot;target&quot;)
    .categories([{
        id: 0,
        imageChar: &quot;fa-user&quot;
    },{
        id: 1,
        imageChar: &quot;fa-car&quot;
    }])
    .annotations([{
        id: 0,
        imageChar: &quot;fa-plus&quot;,
        fill: &quot;white&quot;,
        stroke: &quot;whitesmoke&quot;,
        imageCharFill: &quot;red&quot;
    },{
        id: 1,
        imageChar: &quot;fa-star&quot;,
        fill: &quot;navy&quot;,
        imageCharFill: &quot;white&quot;
    }])
    .data({ subgraphs, vertices, edges, hierarchy })
    .layout(&quot;Hierarchy&quot;)
    .render()
    ;
</code></pre></div>`,7),i=[o];function s(c,u,d,h,g,p){return n(),e("div",null,i)}var v=t(r,[["render",s]]);export{l as __pageData,v as default};
