(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{384:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("! Matt Thompson was one of 2017’s "),s("a",{attrs:{href:"https://toolfund.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Data Tool Fund"),s("OutboundLink")],1),t._v(" grantees tasked with extending implementation of core Frictionless Data "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-clj",target:"_blank",rel:"noopener noreferrer"}},[t._v("data package"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-clj",target:"_blank",rel:"noopener noreferrer"}},[t._v("table schema"),s("OutboundLink")],1),t._v(" libraries in Clojure programming language. You can read more about this in "),s("router-link",{attrs:{to:"/articles/matt-thompson/"}},[t._v("his grantee profile")]),t._v(". In this post, Thompson will show you how to set up and use the "),s("a",{attrs:{href:"http://clojure.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clojure"),s("OutboundLink")],1),t._v(" libraries for working with "),s("router-link",{attrs:{to:"/specs/tabular-data-package/"}},[t._v("Tabular Data Packages")]),t._v(".")],1),t._v(" "),s("p",[t._v("This tutorial uses a worked example of downloading a data package from a remote location on the web, and using the Frictionless Data tools to read its contents and metadata into Clojure data structures.")]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("First, we need to set up the project structure using the "),s("a",{attrs:{href:"http://leiningen.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leiningen"),s("OutboundLink")],1),t._v(" tool. If you don’t have Leiningen set up on your system, follow the link to download and install it. Once it is set up, run the following command from the command line to create the folders and files for a basic Clojure project:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\nlein new periodic-table\n\n")])])]),s("p",[t._v("This will create the "),s("em",[t._v("periodic-table")]),t._v(" folder. Inside the "),s("em",[t._v("periodic-table/src/periodic-table")]),t._v(" folder should be a file named "),s("em",[t._v("core.clj")]),t._v(". This is the file you need to edit during this tutorial.")]),t._v(" "),s("h2",{attrs:{id:"the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-data"}},[t._v("#")]),t._v(" The Data")]),t._v(" "),s("p",[t._v("For this tutorial, we will use a pre-created data package, the Periodic Table Data Package hosted by the Frictionless Data project. A "),s("router-link",{attrs:{to:"/specs/data-package/"}},[t._v("Data Package")]),t._v(" is a simple container format used to describe and package a collection of data. It consists of two parts:")],1),t._v(" "),s("ul",[s("li",[t._v("Metadata that describes the structure and contents of the package")]),t._v(" "),s("li",[t._v("Resources such as data files that form the contents of the package")])]),t._v(" "),s("p",[t._v("Our Clojure code will download the data package and process it using the metadata information contained in the"),s("br"),t._v("\npackage. The data package can be found "),s("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("here on GitHub"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The data package contains data about elements in the periodic table, including each element’s name, atomic number, symbol and atomic weight. The table below shows a sample taken from the first three rows of the CSV file:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("atomic number")]),t._v(" "),s("th",[t._v("symbol")]),t._v(" "),s("th",[t._v("name")]),t._v(" "),s("th",[t._v("atomic mass")]),t._v(" "),s("th",[t._v("metal or nonmetal?")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("H")]),t._v(" "),s("td",[t._v("Hydrogen")]),t._v(" "),s("td",[t._v("1.00794")]),t._v(" "),s("td",[t._v("nonmetal")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("He")]),t._v(" "),s("td",[t._v("Helium")]),t._v(" "),s("td",[t._v("4.002602")]),t._v(" "),s("td",[t._v("noble gas")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Li")]),t._v(" "),s("td",[t._v("Lithium")]),t._v(" "),s("td",[t._v("6.941")]),t._v(" "),s("td",[t._v("alkali metal")])])])]),t._v(" "),s("h2",{attrs:{id:"loading-the-data-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-the-data-package"}},[t._v("#")]),t._v(" Loading the Data Package")]),t._v(" "),s("p",[t._v("The first step is to load the data package into a Clojure data structure (a map). The initial step is to require the data package library in our code (which we will give the alias "),s("strong",[t._v("dp")]),t._v("). Then we can use the "),s("strong",[t._v("load")]),t._v(" function to load our data package into our project. Enter the following code into the core.clj file:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" periodic-table.core\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":require")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("frictionlessdata.datapackage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("frictionlessdata.tableschema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" ts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("clojure.spec.alpha "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" pkg\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("load")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("This pulls the data in from the remote GitHub location and converts the metadata into a Clojure map. We can access this metadata by using the "),s("code",[t._v("descriptor")]),t._v(" function along with keys such as "),s("code",[t._v(":name")]),t._v(" and "),s("code",[t._v(":title")]),t._v(" to get the relevant information:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Package name:"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp/descriptor pkg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Package title:"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp/descriptor pkg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The package descriptor contains metadata that describes the contents of the data package. What about accessing the data itself? We can get to it using the "),s("code",[t._v("get-resources")]),t._v(" function:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" table "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp/get-resources pkg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("doseq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The above code locates the data in the data package, then goes through it line by line and prints the contents.")]),t._v(" "),s("h2",{attrs:{id:"casting-types-with-core-spec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#casting-types-with-core-spec"}},[t._v("#")]),t._v(" Casting Types with core.spec")]),t._v(" "),s("p",[t._v("We can use Clojure’s "),s("a",{attrs:{href:"https://clojure.org/guides/spec",target:"_blank",rel:"noopener noreferrer"}},[t._v("spec"),s("OutboundLink")],1),t._v(" library to define a schema for our data, which can then be used to cast the types of the data in the CSV file.")]),t._v(" "),s("p",[t._v("Below is a spec description of a periodic element type, consisting of an atomic number, atomic symbol, the element’s name, its mass, and whether or not the element is a metal or non-metal:")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::number")]),t._v(" int?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::symbol")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::mass")]),t._v(" float?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::metal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keys")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":req")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::symbol")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::mass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::metal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The above spec can be used to cast values in our tabular data so that they match the specified schema. The example below shows our tabular data values being cast to fit the spec description. Then the "),s("code",[t._v("-main")]),t._v(" function loops through the elements, printing only those with an atomic mass of over 10.")]),t._v(" "),s("div",{staticClass:"language-clojure extra-class"},[s("pre",{pre:!0,attrs:{class:"language-clojure"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ns")]),t._v(" periodic-table.core\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":require")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("frictionlessdata.datapackage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("frictionlessdata.tableschema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" ts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("clojure.spec.alpha "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":as")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::number")]),t._v(" int?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::symbol")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::mass")]),t._v(" float?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::metal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::element")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keys")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":req")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::symbol")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::mass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::metal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" pkg\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("load")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" resources "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp/get-resources pkg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" elements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp/"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cast")]),t._v(" resources element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defn")]),t._v(" -main "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("doseq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("e")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":mass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("println")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("When run, the program produces the following output:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ lein run\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("::number "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" ::symbol "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"H"')]),t._v(" ::name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hydrogen"')]),t._v(" ::mass "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.00794")]),t._v(" ::metal "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nonmetal"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("::number "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" ::symbol "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"He"')]),t._v(" ::name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Helium"')]),t._v(" ::mass "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.002602")]),t._v(" ::metal "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noble gas"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("::number "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" ::symbol "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Li"')]),t._v(" ::name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lithium"')]),t._v(" ::mass "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.941")]),t._v(" ::metal "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alkali gas"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("::number "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" ::symbol "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Be"')]),t._v(" ::name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Beryllium"')]),t._v(" ::mass "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.012182")]),t._v(" ::metal "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alkaline earth metal"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This concludes our simple tutorial for using the Clojure libraries for Frictionless Data.")]),t._v(" "),s("p",[t._v("We welcome your feedback and questions via our "),s("a",{attrs:{href:"http://gitter.im/frictionlessdata/chat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Data Gitter chat"),s("OutboundLink")],1),t._v(" or via "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-clj/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub issues"),s("OutboundLink")],1),t._v(" on the "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-clj",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage-clj"),s("OutboundLink")],1),t._v(" repository.")])])}),[],!1,null,null,null);a.default=n.exports}}]);