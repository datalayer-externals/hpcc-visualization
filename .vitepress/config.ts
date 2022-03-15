import { ApiClass, ApiItem, ApiModel, ApiProperty } from "@microsoft/api-extractor-model";
import { IndentedWriter, writeApiItem } from "./mdWriter";
import path from "path";

function getGuideSidebar() {
    return [
        {
            text: "Introduction",
            children: [
                { text: "Getting Started", link: "/README" }
            ]
        },
        {
            text: "Advanced",
            children: [{ text: "API Reference", link: "/docs/api/hpcc-js" }]
        }
    ];
}

// Keep in sync with:  ../components/README.md

function getComponentsSidebar() {
    return [
        {
            text: "Editors",
            children: [
                { text: "CodeMirror", link: "/components/editor/src/codemirror" },
                { text: "Preview", link: "/components/preview/src/preview" },
            ]
        }, {
            text: "Layouts",
            children: [
                { text: "Getting Started", link: "/components/layout/README" },
                { text: "Dock Panel", link: "/components/layout/src/lumino/dockPanel" },
                { text: "Drag and Zoom", link: "/components/layout/src/zoom" },
                { text: "Split Panel", link: "/components/layout/src/lumino/splitPanel" },
                { text: "Tab Panel", link: "/components/layout/src/lumino/tabPanel" },
            ]
        }//, {
        //     text: "Visualizations",
        //     children: [
        //         { text: "Gauge", link: "/components/gauge/src/gauge" },
        //         { text: "Half Pie", link: "/components/pie/src/halfpie" },
        //         { text: "Observable JS", link: "/components/observable/src/observable" },
        //         { text: "Pie", link: "/components/pie/src/pie" },
        //         { text: "Quarter Pie", link: "/components/pie/src/quarterpie" },
        //         { text: "Sankey", link: "/components/sankey/src/sankey" },
        //         { text: "Treemap", link: "/components/treemap/src/treemap" },
        //     ]
        // }
    ];
}

function getVisualizationsSidebar() {
    return [
        {
            text: "Charts",
            children: [
                { text: "Getting Started", link: "/packages/chart/README" },
            ]
        }, {
            text: "Editors",
            children: [
                { text: "Getting Started", link: "/packages/codemirror/README" },
            ]
        }, {
            text: "Grids",
            children: [
                { text: "Getting Started", link: "/packages/dgrid/README" },
            ]
        }, {
            text: "Graphs",
            children: [
                { text: "Getting Started", link: "/packages/graph/README" },
            ]
        }, {
            text: "Layouts",
            children: [
                { text: "Getting Started", link: "/packages/layout/README" },
            ]
        }, {
            text: "Geospatial 2D",
            children: [
                { text: "Getting Started", link: "/packages/map/README" },
            ]
        }, {
            text: "Geospatial 3D",
            children: [
                { text: "Getting Started", link: "/packages/map-deck/README" },
            ]
        }, {
            text: "Observable",
            children: [
                { text: "Getting Started", link: "/packages/observable-md/README" },
            ]
        }, {
            text: "Timelines",
            children: [
                { text: "Getting Started", link: "/packages/timeline/README" },
            ]
        }, {
            text: "Hierarchy",
            children: [
                { text: "Getting Started", link: "/packages/tree/README" },
            ]
        }
    ];
}

module.exports = {
    lang: "en-US",
    title: "@hpcc-js/Visualization",
    description: "HPCC Systems JavaScript Library",
    base: "/Visualization/",

    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/Visualization/resources/favicon.ico' }],
    ],

    themeConfig: {
        repo: "hpcc-systems/Visualization",
        docsDir: "",
        docsBranch: "trunk",
        editLinks: true,
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",

        nav: [
            {
                text: "Guide",
                link: "/README",
                activeMatch: "^/README"
            },
            {
                text: "Web Components",
                link: "/components/README",
                activeMatch: "^/components/"
            },
            {
                text: "Visualizations",
                link: "/packages/README",
                activeMatch: "^/packages/"
            },
            {
                text: "Release Notes",
                link: "https://github.com/hpcc-systems/Visualization/releases"
            }
        ],

        sidebar: {
            "/README": getGuideSidebar(),
            "/components": getComponentsSidebar(),
            "/packages": getVisualizationsSidebar()
        }
    },

    vite: {
        cacheDir: "./.vitepress/cache",
        server: {
            fs: {
                strict: false
            }
        },
        resolve: {
            alias: {
            }
        },
        plugins: [
        ]
    },

    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => {
                    return tag.toLowerCase().indexOf("hpcc-") === 0;
                }
            }
        }
    },

    markdown: {
        config: (md) => {
            const structs: { [id: string]: ApiItem } = {};
            const props: { [id: string]: ApiItem } = {};

            let allMeta = {};
            try {
                allMeta = require(path.join(__dirname, "../temp/hpcc-js.meta.json"));
            } catch (e) {
                //  File might not exit yet  ---
            }

            function writeAttributes(struct: ApiItem, writer: IndentedWriter, isAttribute: boolean = true): boolean {
                let retVal = false;
                const structClass = struct as ApiClass;
                // writer.writeLine(struct.displayName);
                const baseClass = structs[structClass.extendsType?.excerpt?.text?.trim()];
                if (baseClass) {
                    retVal = writeAttributes(baseClass, writer, isAttribute);
                }
                const classMeta = allMeta[struct.displayName] ?? { observed: {} };
                for (const prop of struct.members) {
                    const propMeta = classMeta.observed[prop.displayName];
                    if ((prop as ApiProperty).tsdocComment) {
                        if (propMeta === undefined || propMeta.isAttribute === isAttribute) {
                            if (writeApiItem(prop, { writer }, false)) {
                                retVal = true;
                            }
                        }
                    }
                }
                return retVal;
            }

            md.core.ruler.before("normalize", "types", function replace(state) {
                const apiModel = new ApiModel();
                let apiPackage;
                try {
                    apiPackage = apiModel.loadPackage("./temp/hpcc-js.api.json");
                } catch (e) {
                    //  File might not exit yet  ---
                }

                apiPackage?.members.forEach(entyrPoint => {
                    for (const struct of entyrPoint.members) {
                        // if (struct.displayName.indexOf("HPCC") === 0 && struct.displayName.indexOf("Element") > 0) {
                        structs[struct.displayName] = struct;
                        for (const prop of struct.members) {
                            props[struct.displayName + "." + prop.displayName] = prop;
                        }
                        // }
                    }
                });

                for (const key in structs) {
                    const struct = structs[key];
                    const search = `## \`${key}\``;
                    if (state.src.indexOf(search) >= 0) {
                        let replacement = "";
                        const attrWriter = new IndentedWriter();
                        attrWriter.writeLine(`## Attributes`);
                        attrWriter.writeLine();
                        if (writeAttributes(struct, attrWriter, true)) {
                            replacement += attrWriter.toString();
                        }
                        const propWriter = new IndentedWriter();
                        propWriter.writeLine(`## Properties`);
                        propWriter.writeLine();
                        if (writeAttributes(struct, propWriter, false)) {
                            replacement += propWriter.toString();
                        }
                        state.src = state.src.split(search).join(replacement);
                    }
                }

                for (const key in props) {
                    const search = `### \`${key}\``;
                    if (state.src.indexOf(search) >= 0) {
                        const prop = props[key];
                        const writer = new IndentedWriter();
                        writeApiItem(prop, { writer }, false);
                        state.src = state.src.split(search).join(writer.toString());
                    }
                }
            });
        }
    }
};
