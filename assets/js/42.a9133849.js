(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{355:function(a,t,e){a.exports=e.p+"assets/img/tabular-data-package.1c6bf4f3.png"},446:function(a,t,e){"use strict";e.r(t);var s=e(1),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"data-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-packages"}},[a._v("#")]),a._v(" Data Packages")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("This page assumes knowledge about the Frictionless Data ecosystem.")]),a._v(" "),s("p",[a._v("If you don’t have it, please read "),s("a",{attrs:{href:"/guide"}},[a._v("this page")]),a._v(" first.")])]),a._v(" "),s("p",[a._v("Data Package is a simple "),s("strong",[a._v("container")]),a._v(" format used to describe and package a collection of data. The format provides a simple contract for data interoperability that supports frictionless delivery, installation and management of data.")]),a._v(" "),s("p",[a._v("Data Packages can be used to package any kind of data. At the same time, for specific common data types such as tabular data it has support for providing important additional descriptive metadata – for example, describing the columns and data types in a CSV.")]),a._v(" "),s("p",[a._v("The following core principles inform our approach:")]),a._v(" "),s("ul",[s("li",[a._v("Simplicity")]),a._v(" "),s("li",[a._v("Extensibility and customisation by design")]),a._v(" "),s("li",[a._v("Metadata that is human-editable and machine-usable")]),a._v(" "),s("li",[a._v("Reuse of existing standard formats for data")]),a._v(" "),s("li",[a._v("Language, technology and infrastructure agnostic")])]),a._v(" "),s("h2",{attrs:{id:"the-data-package-suite-of-specifications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-data-package-suite-of-specifications"}},[a._v("#")]),a._v(" The Data Package Suite of Specifications")]),a._v(" "),s("p",[a._v("Over time the single Data Package spec has evolved into a suite of specs – partly through componentization whereby the original spec is in several components and partly through extension.")]),a._v(" "),s("p",[a._v("The main specifications are:")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/products/data-package"}},[a._v("Data Package specification")]),a._v(", a simple format for packaging data for sharing between tools and people")]),a._v(" "),s("li",[s("router-link",{attrs:{to:"/blog/2016/07/21/publish-tabular/"}},[a._v("Tabular Data Package")]),a._v(", a format for packaging tabular data that builds on Data Package and which uses:\n"),s("ul",[s("li",[s("router-link",{attrs:{to:"/products/table-schema/"}},[a._v("Table Schema")]),a._v(", a specification for defining a "),s("em",[a._v("schema")]),a._v(" for tabular data")],1),a._v(" "),s("li",[s("a",{attrs:{href:"https://specs.frictionlessdata.io/csv-dialect/",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSV Dialect Description Format"),s("OutboundLink")],1),a._v(" (CSV-DDF), a specification for defining a "),s("em",[a._v("dialect")]),a._v(" for CSV data.")])])],1)]),a._v(" "),s("h3",{attrs:{id:"how-do-these-specifications-relate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-these-specifications-relate"}},[a._v("#")]),a._v(" How do these specifications relate?")]),a._v(" "),s("p",[a._v("A "),s("strong",[a._v("Data Package")]),a._v(" can “contain” any type of file. A "),s("strong",[a._v("Tabular Data Package")]),a._v(" is a type of Data Package specialized for tabular data and which “contains” one or more CSV files.  In a Tabular Data Package, each CSV must have a "),s("em",[a._v("schema")]),a._v(" defined using "),s("strong",[a._v("Table Schema")]),a._v(" and, optionally, a "),s("em",[a._v("dialect")]),a._v(" defined using "),s("strong",[a._v("CSV-DDF")]),a._v(". An application or library that consumes Tabular Data Packages therefore must be able to understand not only the full Data Package specification, but also Table Schema and CSV-DDF.")]),a._v(" "),s("p",[s("img",{attrs:{src:e(355),alt:"Tabular Data Package"}})]),a._v(" "),s("p",[a._v("For more information on each specification, see below:")]),a._v(" "),s("h2",{attrs:{id:"data-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-package"}},[a._v("#")]),a._v(" Data Package")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/products/data-package"}},[a._v("Overview")])]),a._v(" "),s("li",[s("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Full Specification"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"tabular-data-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tabular-data-package"}},[a._v("#")]),a._v(" Tabular Data Package")]),a._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/blog/2016/07/21/publish-tabular/"}},[a._v("Overview")])],1),a._v(" "),s("li",[s("a",{attrs:{href:"https://specs.frictionlessdata.io/tabular-data-package/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Full Specification"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"table-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-schema"}},[a._v("#")]),a._v(" Table Schema")]),a._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/products/table-schema/"}},[a._v("Overview")])],1),a._v(" "),s("li",[s("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Full Specification"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"csv-dialect-description-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csv-dialect-description-format"}},[a._v("#")]),a._v(" CSV Dialect Description Format")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://specs.frictionlessdata.io/csv-dialect/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Full Specification"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[a._v("#")]),a._v(" Getting Started")]),a._v(" "),s("p",[a._v("Creating a Data Package is very easy: all you need to do is put a "),s("code",[a._v("datapackage.json")]),a._v(" “descriptor” file in the top-level directory of your set of data files.")]),a._v(" "),s("p",[a._v("A minimal example Data Package would look like this on disk:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("datapackage.json\n\n# a data file(s) (CSV in this case but could be any type of data). Data files may go either in data subdirectory or in the main directory\ndata\ndata/more-data.csv\n\n# (Optional!) A README (in markdown format)\nREADME.md\n")])])]),s("p",[a._v("Any number of additional files such as more data files, scripts (for processing or analyzing the data) and other material may be provided but are not required.")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("There is a full "),s("strong",[s("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package/",target:"_blank",rel:"noopener noreferrer"}},[a._v("RFC-style specification of Data Package format"),s("OutboundLink")],1)]),a._v(" to complement this quick introduction.")]),a._v(" "),s("p",[a._v("The "),s("router-link",{attrs:{to:"/blog/2016/07/21/publish-tabular/"}},[a._v("Tabular Data Package")]),a._v(" format extends Data Packages for tabular data. It supports providing additional information such as data types of columns.")],1)]),a._v(" "),s("h3",{attrs:{id:"datapackage-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datapackage-json"}},[a._v("#")]),a._v(" datapackage.json")]),a._v(" "),s("p",[s("code",[a._v("datapackage.json")]),a._v(" file is the basic building block of a Data Package and is the only required file. It provides:")]),a._v(" "),s("ul",[s("li",[a._v("General metadata such as the name of the package, its license, its publisher and source, etc")]),a._v(" "),s("li",[a._v("A “manifest” in the the form of a list of the data resources (data files) included in this data package along with information on those files (e.g. schema)")])]),a._v(" "),s("p",[a._v("As its file extension indicates, it must be a "),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/JSON",target:"_blank",rel:"noopener noreferrer"}},[a._v("JSON"),s("OutboundLink")],1),a._v(" file. Here’s a very minimal example of a "),s("code",[a._v("datapackage.json")]),a._v(" file:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a-unique-human-readable-and-url-usable-identifier"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"A nice title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"licenses"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" ... "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sources"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// see below for what a resource descriptor looks like")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("strong",[a._v("Note:")]),a._v(" a complete list of potential attributes and their meaning can be found in the "),s("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package/",target:"_blank",rel:"noopener noreferrer"}},[a._v("full Data Package spec"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[s("strong",[a._v("Note:")]),a._v(" the Data Package format is "),s("strong",[a._v("extensible")]),a._v(": publishers may add their own additional metadata as well as constraints on the format and type of data by adding their own attributes to the "),s("code",[a._v("datapackage.json")]),a._v(".")]),a._v(" "),s("p",[a._v("Here is a much more extensive example of a datapackage JSON file:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a-unique-human-readable-and-url-usable-identifier"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"datapackage_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0-beta"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"A nice title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"keywords"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"My new keyword"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"licenses"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://opendatacommons.org/licenses/pddl/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Open Data Commons Public Domain"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"odc-pddl"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"World Bank and OECD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"web"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://data.worldbank.org/indicator/NY.GDP.MKTP.CD"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"contributors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Joe Bloggs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"joe@bloggs.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"web"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://www.bloggs.com"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"maintainers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// like contributors")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"publishers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// like contributors")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"data-package-name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('">=1.0"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ... see below ...")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// extend your datapackage.json with attributes that are not")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// part of the data package spec")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// we add a views attribute to display Recline Dataset Graph Views")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// in our Data Package Viewer")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"views"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      ... see below ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// you can add your own attributes to a datapackage.json, too")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"my-own-attribute"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"data-packages-are-awesome"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[a._v("#")]),a._v(" Resources")]),a._v(" "),s("p",[a._v("You list data files in the resources entry of the datapackage.json.")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// one of url or path should be present")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"relative-path-to-file"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// e.g. data/mydata.csv")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"online url"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// e.g http://mysite.org/some-data.csv")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[a._v("#")]),a._v(" Views")]),a._v(" "),s("p",[a._v("The "),s("a",{attrs:{href:"http://data.okfn.org/tools/view",target:"_blank",rel:"noopener noreferrer"}},[a._v("Data Package Viewer"),s("OutboundLink")],1),a._v(" will display a "),s("a",{attrs:{href:"http://okfnlabs.org/recline/docs/views.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Recline Dataset Graph View"),s("OutboundLink")],1),a._v(" when a "),s("code",[a._v("views")]),a._v(" entry is provided in the datapackage.json.")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Include the "),s("code",[a._v("resourceName")]),a._v(" property if you have more than one resource and want to display a graph for a resource other than the first resource")])]),a._v(" "),s("li",[s("p",[a._v("In the "),s("code",[a._v("state")]),a._v(" property")]),a._v(" "),s("ul",[s("li",[a._v("the "),s("code",[a._v("group")]),a._v(" property is the name of the resource field whose values will be used on the y axis in the "),s("code",[a._v("bars")]),a._v(" graph type and the x axis in all other graph types")]),a._v(" "),s("li",[a._v("the "),s("code",[a._v("series")]),a._v(" property is an array of one or more names of resource fields whose values will be used on the x axis in the "),s("code",[a._v("bars")]),a._v(" graph type and the y axis in all other graph types")]),a._v(" "),s("li",[a._v("the "),s("code",[a._v("graphType")]),a._v(" may be one of "),s("code",[a._v("lines-and-points")]),a._v(", "),s("code",[a._v("lines")]),a._v(", "),s("code",[a._v("points")]),a._v(", "),s("code",[a._v("bars")]),a._v(", or "),s("code",[a._v("columns")])])])])]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"graph"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"label"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Graph"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"resourceName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a-resource-name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Graph"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"group"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a-resource-field-name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"series"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"another-resource-field-name"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"graphType"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"lines-and-points"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),s("p",[a._v("Many exemplar data packages can be found on "),s("a",{attrs:{href:"https://datahub.io/core",target:"_blank",rel:"noopener noreferrer"}},[a._v("datahub"),s("OutboundLink")],1),a._v(". Specific examples:")]),a._v(" "),s("h4",{attrs:{id:"world-gdp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#world-gdp"}},[a._v("#")]),a._v(" World GDP")]),a._v(" "),s("p",[a._v("A Data Package which includes the data locally in the repo (data is CSV).")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://datahub.io/core/gdp",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://datahub.io/core/gdp"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Here’s the "),s("code",[a._v("datapackage.json")]),a._v(":")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://pkgstore.datahub.io/core/gdp/9/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://pkgstore.datahub.io/core/gdp/9/datapackage.json"),s("OutboundLink")],1)]),a._v(" "),s("h4",{attrs:{id:"s-p-500-companies-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-p-500-companies-data"}},[a._v("#")]),a._v(" S&P 500 Companies Data")]),a._v(" "),s("p",[a._v("This is an example with more than one resource in the data package.")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://datahub.io/core/s-and-p-500-companies",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://datahub.io/core/s-and-p-500-companies"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Here’s the "),s("code",[a._v("datapackage.json")]),a._v(":")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://pkgstore.datahub.io/core/s-and-p-500-companies/10/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://pkgstore.datahub.io/core/s-and-p-500-companies/10/datapackage.json"),s("OutboundLink")],1)]),a._v(" "),s("h4",{attrs:{id:"geojson-and-topojson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geojson-and-topojson"}},[a._v("#")]),a._v(" GeoJSON and TopoJSON")]),a._v(" "),s("p",[a._v("You can see an example on how to package GeoJSON files "),s("a",{attrs:{href:"https://datahub.io/examples/geojson-tutorial",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("DataHub does not currently support the TopoJSON format. You can use “Vega Graph Spec” and display you TopoJSON data using the "),s("a",{attrs:{href:"https://vega.github.io/vega/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Vega specification"),s("OutboundLink")],1),a._v(". See an example "),s("a",{attrs:{href:"https://datahub.io/examples/vega-views-tutorial-topojson",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[a._v("#")]),a._v(" Next Steps")]),a._v(" "),s("ul",[s("li",[a._v("Read the "),s("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package",target:"_blank",rel:"noopener noreferrer"}},[a._v("full specification"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("li",[a._v("Get to know the "),s("a",{attrs:{href:"/products/data-package"}},[a._v("tools")]),a._v(".")]),a._v(" "),s("li",[a._v("Understand how it can be wrapped in a "),s("a",{attrs:{href:"/data-package"}},[a._v("Data Package")]),a._v(".")])])])}),[],!1,null,null,null);t.default=r.exports}}]);