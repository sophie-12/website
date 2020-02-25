(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{375:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("! Daniel Fireman was one of 2017’s "),s("a",{attrs:{href:"https://toolfund.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Data Tool Fund"),s("OutboundLink")],1),t._v(" grantees tasked with extending implementation of core Frictionless Data libraries in Go programming language. You can read more about this in "),s("router-link",{attrs:{to:"/articles/daniel-fireman/"}},[t._v("his grantee profile")]),t._v(". In this post, Fireman will show you how to install and use the "),s("a",{attrs:{href:"http://golang.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go"),s("OutboundLink")],1),t._v(" libraries for working with "),s("router-link",{attrs:{to:"/specs/tabular-data-package/"}},[t._v("Tabular Data Packages")]),t._v(".")],1),t._v(" "),s("p",[t._v("Our goal in this tutorial is to load a data package from the web and read its metadata and contents.")]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("For this tutorial, we will need the "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-go",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage-go"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-go",target:"_blank",rel:"noopener noreferrer"}},[t._v("tableschema-go"),s("OutboundLink")],1),t._v(" packages, which provide all the functionality to deal with a Data Package’s metadata and its contents.")]),t._v(" "),s("p",[t._v("We are going to use the "),s("a",{attrs:{href:"https://golang.github.io/dep/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dep tool"),s("OutboundLink")],1),t._v(" to manage the dependencies of our new project:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GOPATH")]),t._v("/src/newdataproj\n$ dep init\n")])])]),s("h2",{attrs:{id:"the-periodic-table-data-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-periodic-table-data-package"}},[t._v("#")]),t._v(" The Periodic Table Data Package")]),t._v(" "),s("p",[t._v("A "),s("router-link",{attrs:{to:"/specs/data-package/"}},[t._v("Data Package")]),t._v(" is a simple container format used to describe and package a collection of data. It consists of two parts:")],1),t._v(" "),s("ul",[s("li",[t._v("Metadata that describes the structure and contents of the package")]),t._v(" "),s("li",[t._v("Resources such as data files that form the contents of the package")])]),t._v(" "),s("p",[t._v("In this tutorial, we are using a "),s("router-link",{attrs:{to:"/specs/tabular-data-package/"}},[t._v("Tabular Data Package")]),t._v(" containing the periodic table. The package descriptor ("),s("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage.json"),s("OutboundLink")],1),t._v(") and contents ("),s("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("data.csv"),s("OutboundLink")],1),t._v(") are stored on GitHub. This dataset includes the atomic number, symbol, element name, atomic mass, and the metallicity of the element. Here are the header and the first three rows:")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("atomic number")]),t._v(" "),s("th",[t._v("symbol")]),t._v(" "),s("th",[t._v("name")]),t._v(" "),s("th",[t._v("atomic mass")]),t._v(" "),s("th",[t._v("metal or nonmetal?")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("H")]),t._v(" "),s("td",[t._v("Hydrogen")]),t._v(" "),s("td",[t._v("1.00794")]),t._v(" "),s("td",[t._v("nonmetal")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("He")]),t._v(" "),s("td",[t._v("Helium")]),t._v(" "),s("td",[t._v("4.002602")]),t._v(" "),s("td",[t._v("noble gas")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Li")]),t._v(" "),s("td",[t._v("Lithium")]),t._v(" "),s("td",[t._v("6.941")]),t._v(" "),s("td",[t._v("alkali metal")])])])]),t._v(" "),s("h2",{attrs:{id:"inspecting-package-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inspecting-package-metadata"}},[t._v("#")]),t._v(" Inspecting Package Metadata")]),t._v(" "),s("p",[t._v("Let’s start off by creating the "),s("code",[t._v("main.go")]),t._v(", which loads the data package and inspects some of its metadata.")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/frictionlessdata/datapackage-go/datapackage"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("panic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Package loaded successfully."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Before running the code, you need to tell the dep tool to update our project dependencies. Don’t worry; you won’t need to do it again in this tutorial.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ dep ensure\n$ go run main.go\nPackage loaded successfully.\n")])])]),s("p",[t._v("Now that you have loaded the periodic table Data Package, you have access to its "),s("code",[t._v("title")]),t._v(" and "),s("code",[t._v("name")]),t._v(" fields through the "),s("a",{attrs:{href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Package.Descriptor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Package.Descriptor() function"),s("OutboundLink")],1),t._v(".  To do so, let’s change our main function to (omitting error handling for the sake of brevity, but we know it is "),s("em",[t._v("very")]),t._v(" important):")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Name:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Descriptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Title:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Descriptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("And rerun the program:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go run main.go\nName: period-table\nTitle: Periodic Table\n")])])]),s("p",[t._v("And as you can see, the printed fields match the "),s("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("package descriptor"),s("OutboundLink")],1),t._v(". For more information about the Data Package structure, please take a look at the "),s("router-link",{attrs:{to:"/specs/data-package/"}},[t._v("specification")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"quick-look-at-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-look-at-the-data"}},[t._v("#")]),t._v(" Quick Look At the Data")]),t._v(" "),s("p",[t._v("Now that you have loaded your Data Package, it is time to process its contents. The package content consists of one or more resources. You can access "),s("a",{attrs:{href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Resource",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resources"),s("OutboundLink")],1),t._v(" via the "),s("a",{attrs:{href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Package.GetResource()",target:"_blank",rel:"noopener noreferrer"}},[t._v("Package.GetResource()"),s("OutboundLink")],1),t._v(" method. Let’s print the periodic table "),s("code",[t._v("data")]),t._v(" resource contents.")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" row "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" table "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go run main.go\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("atomic number symbol name atomic mass metal or nonmetal?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" H Hydrogen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.00794")]),t._v(" nonmetal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" He Helium "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.002602")]),t._v(" noble gas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" Li Lithium "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.941")]),t._v(" alkali metal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" Be Beryllium "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.012182")]),t._v(" alkaline earth metal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("The "),s("a",{attrs:{href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Resource.ReadAll",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resource.ReadAll()"),s("OutboundLink")],1),t._v(" method loads the whole table in memory as raw strings and returns it as a Go "),s("code",[t._v("[][]string")]),t._v(". This can be quick useful to take a quick look or perform a visual sanity check at the data.")]),t._v(" "),s("h2",{attrs:{id:"processing-the-data-package’s-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processing-the-data-package’s-content"}},[t._v("#")]),t._v(" Processing the Data Package’s Content")]),t._v(" "),s("p",[t._v("Even though the string representation can be useful for a quick sanity check, you probably want to use actual language types to process the data. Don’t worry, you won’t need to fight the casting battle yourself. Data Package Go libraries provide a rich set of methods to deal with data loading in a very idiomatic way (very similar to "),s("a",{attrs:{href:"https://golang.org/pkg/encoding/json/",target:"_blank",rel:"noopener noreferrer"}},[t._v("encoding/json"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("As an example, let’s change our "),s("code",[t._v("main")]),t._v(" function to use actual types to store the periodic table and print the elements with atomic mass smaller than 10.")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/frictionlessdata/datapackage-go/datapackage"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/frictionlessdata/tableschema-go/csv"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" element "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Number "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`tableheader:"atomic number"`')]),t._v("\n    Symbol "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`tableheader:"symbol"`')]),t._v("\n    Name   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`tableheader:"name"`')]),t._v("\n    Mass   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`tableheader:"atomic mass"`')]),t._v("\n    Metal  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`tableheader:"metal or nonmetal?"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    resource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("element\n    resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Cast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" csv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%+v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go run main.go\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number:1 Symbol:H Name:Hydrogen Mass:1.00794 Metal:nonmetal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number:2 Symbol:He Name:Helium Mass:4.002602 Metal:noble gas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number:3 Symbol:Li Name:Lithium Mass:6.941 Metal:alkali metal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number:4 Symbol:Be Name:Beryllium Mass:9.012182 Metal:alkaline earth metal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In the example above, all rows in the table are loaded into memory. Then every row is parsed into an "),s("code",[t._v("element")]),t._v(" object and appended to the slice. The "),s("code",[t._v("resource.Cast")]),t._v(" call returns an error if the whole table cannot be successfully parsed.")]),t._v(" "),s("p",[t._v("If you don’t want to load all data in memory at once, you can lazily access each row using "),s("a",{attrs:{href:"https://godoc.org/github.com/frictionlessdata/datapackage-go/datapackage#Resource.Iter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Resource.Iter"),s("OutboundLink")],1),t._v(" and use "),s("a",{attrs:{href:"https://godoc.org/github.com/frictionlessdata/tableschema-go/schema#Schema.CastRow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schema.CastRow"),s("OutboundLink")],1),t._v(" to cast each row into an "),s("code",[t._v("element")]),t._v(" object. That would change our main function to:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    resource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    iter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Iter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("csv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    sch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSchema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" e element\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" iter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CastRow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Row")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%+v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ go run main.go\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number:1 Symbol:H Name:Hydrogen Mass:1.00794 Metal:nonmetal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number:2 Symbol:He Name:Helium Mass:4.002602 Metal:noble gas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number:3 Symbol:Li Name:Lithium Mass:6.941 Metal:alkali metal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Number:4 Symbol:Be Name:Beryllium Mass:9.012182 Metal:alkaline earth metal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("And our code is ready to deal with the growth of the periodic table in a very memory-efficient way 😃")]),t._v(" "),s("p",[t._v("We welcome your feedback and questions via our "),s("a",{attrs:{href:"http://gitter.im/frictionlessdata/chat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Data Gitter chat"),s("OutboundLink")],1),t._v(" or via "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-go/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub issues"),s("OutboundLink")],1),t._v(" on the datapackage-go repository.")])])}),[],!1,null,null,null);a.default=n.exports}}]);