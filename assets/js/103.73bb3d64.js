(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{469:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Data Package is a simple container format used to describe and package a collection of data. The full specification is available "),s("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" Tools")]),t._v(" "),s("p",[t._v("There is a growing set of online and offline software for working with Data Packages. You will find tools for creating, viewing, validating, publishing and managing them.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Language")]),t._v(" "),s("th",[t._v("URL")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Clojure")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-clj",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-clj"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Go")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-go",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-go"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Java")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-java"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Javascript")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-js"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Julia")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/DataPackage.jl",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/DataPackage.jl"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("MATLAB")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/KrisKusano/datapackage",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/KrisKusano/datapackage"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("PHP")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-php"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Python")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-py"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("R")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-r",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-r"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Ruby")]),t._v(" "),s("td",[s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-rb",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/datapackage-rb"),s("OutboundLink")],1)])])])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("One of the most common use cases of Data Packages is to serve as an interface to datasets. Like a container for data. It gets easier to support a wider community when everyone follows the same interface.")]),t._v(" "),s("p",[t._v("Let’s create Data Package to support multiple formats of user tables with the same fields:")]),t._v(" "),s("h3",{attrs:{id:"files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" Files")]),t._v(" "),s("p",[s("strong",[t._v("australia_users.csv")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Name,Email,Age\nJill,jill@example.com,25\nJack,jack@example.com,33\n")])])]),s("p",[s("strong",[t._v("germany_users.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"julia"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"julia@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Age"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anna"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anna@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Age"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"in-python"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-python"}},[t._v("#")]),t._v(" In Python")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datapackage "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Package\n\npackage1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npackage1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("infer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"australia_users.csv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {'profile': 'tabular-data-package',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  'resources': [{'path': 'australia_users.csv',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'profile': 'tabular-data-resource',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'name': 'australia_users',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'format': 'csv',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'mediatype': 'text/csv',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'encoding': 'utf-8',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'schema': {'fields': [{'name': 'Name',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       'type': 'string',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#       'format': 'default'},")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#      {'name': 'Email', 'type': 'string', 'format': 'default'},")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#      {'name': 'Age', 'type': 'integer', 'format': 'default'}],")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     'missingValues': ['']}}]}")]),t._v("\npackage1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"australia_users.zip"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npackage2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npackage2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("infer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"germany_users.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {'profile': 'data-package',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  'resources': [{'path': 'germany_users.json',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'profile': 'data-resource',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'name': 'germany_users',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'format': 'json',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'mediatype': 'text/json',")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    'encoding': 'utf-8'}]}")]),t._v("\npackage2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schema"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" package1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resources"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"schema"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\npackage2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npackage2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"germany_users.zip"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" australia_users.zip -d australia_users\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" germany_users.zip -d germany_users\n$ tree *_users\naustralia_users\n├── data\n│   └── australia_users.csv\n└── datapackage.json\ngermany_users\n├── data\n│   └── germany_users.json\n└── datapackage.json\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" files\n")])])]),s("h3",{attrs:{id:"in-javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-javascript"}},[t._v("#")]),t._v(" In Javascript")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Package "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"datapackage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("infer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"australia_users.csv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" folder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./australia_users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdirSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("infer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"germany_users.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" folder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./germany_users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdirSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ tree *_users\naustralia_users\n└── datapackage.json\ngermany_users\n└── datapackage.json\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" files\n")])])]),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("ul",[s("li",[t._v("Learn "),s("router-link",{attrs:{to:"/blog/2018/03/07/well-packaged-datasets/"}},[t._v("how to write a Data Package")]),t._v(" using the Data Package Creator.")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);