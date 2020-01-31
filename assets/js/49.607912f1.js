(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{313:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("! "),e("a",{attrs:{href:"http://okfn.gr/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Open Knowledge Greece"),e("OutboundLink")],1),a._v(" was one of 2017’s "),e("a",{attrs:{href:"https://toolfund.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Frictionless Data Tool Fund"),e("OutboundLink")],1),a._v(" grantees tasked with extending implementation of core Frictionless Data libraries in R programming language. You can read more about this in "),e("a",{attrs:{href:"https://frictionlessdata.io/articles/open-knowledge-greece/",target:"_blank",rel:"noopener noreferrer"}},[a._v("their grantee profile"),e("OutboundLink")],1),a._v(". In this tutorial, "),e("a",{attrs:{href:"https://twitter.com/Kleanthis_k10",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kleanthis Koupidis"),e("OutboundLink")],1),a._v(", a Data Scientist and Statistician at Open Knowledge Greece, explains how to work with Data Packages in R.")]),a._v(" "),e("p",[a._v("This tutorial will show you how to install the R libraries for working with Tabular Data Packages and demonstrate a very simple example of loading a Tabular Data Package from the web and pushing it directly into a local SQL database and send query to retrieve results.")]),a._v(" "),e("p",[a._v("!! For a comprehensive introduction to creating tabular data packages in R, "),e("router-link",{attrs:{to:"/docs/creating-tabular-data-packages-in-r/"}},[a._v("start by going through this tutorial")]),a._v(".")],1),a._v(" "),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[a._v("#")]),a._v(" Setup")]),a._v(" "),e("p",[a._v("For this tutorial, we will need the Data Package R library ("),e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-r",target:"_blank",rel:"noopener noreferrer"}},[a._v("datapackage.r"),e("OutboundLink")],1),a._v("). "),e("a",{attrs:{href:"https://cran.r-project.org/package=devtools",target:"_blank",rel:"noopener noreferrer"}},[a._v("Devtools library"),e("OutboundLink")],1),a._v(" is also required to install the datapackage.r library from github.")]),a._v(" "),e("pre",[e("code",[a._v('# Install devtools package if not already\ninstall.packages("devtools")\n')])]),a._v(" "),e("p",[a._v("And then install the development version of "),e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-r",target:"_blank",rel:"noopener noreferrer"}},[a._v("datapackage.r"),e("OutboundLink")],1),a._v(" from github.")]),a._v(" "),e("pre",[e("code",[a._v('devtools::install_github("frictionlessdata/datapackage-r")\n')])]),a._v(" "),e("h2",{attrs:{id:"load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[a._v("#")]),a._v(" Load")]),a._v(" "),e("p",[a._v("You can start using the library by loading "),e("code",[a._v("datapackage.r")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    library"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("datapackage.r"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("h2",{attrs:{id:"reading-basic-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-basic-metadata"}},[a._v("#")]),a._v(" Reading Basic Metadata")]),a._v(" "),e("p",[a._v("In this case, we are using an example Tabular Data Package containing the periodic table stored on "),e("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/tree/master/periodic-table",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub"),e("OutboundLink")],1),a._v(" ("),e("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[a._v("datapackage.json"),e("OutboundLink")],1),a._v(", "),e("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[a._v("data.csv"),e("OutboundLink")],1),a._v("). This dataset includes the atomic number, symbol, element name, atomic mass, and the metallicity of the element. Here are the first five rows:")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/example_data/data.csv'")]),a._v("\n    pt_data "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" read.csv2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" sep "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("','")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    knitr"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("kable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("head"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("pt_data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" align "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'c'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[a._v("atomic.number")]),a._v(" "),e("th",[a._v("symbol")]),a._v(" "),e("th",[a._v("name")]),a._v(" "),e("th",[a._v("atomic.mass")]),a._v(" "),e("th",[a._v("metal.or.nonmetal.")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("1")]),a._v(" "),e("td",[a._v("H")]),a._v(" "),e("td",[a._v("Hydrogen")]),a._v(" "),e("td",[a._v("1.00794")]),a._v(" "),e("td",[a._v("nonmetal")])]),a._v(" "),e("tr",[e("td",[a._v("2")]),a._v(" "),e("td",[a._v("He")]),a._v(" "),e("td",[a._v("Helium")]),a._v(" "),e("td",[a._v("4.002602")]),a._v(" "),e("td",[a._v("noble gas")])]),a._v(" "),e("tr",[e("td",[a._v("3")]),a._v(" "),e("td",[a._v("Li")]),a._v(" "),e("td",[a._v("Lithium")]),a._v(" "),e("td",[a._v("6.941")]),a._v(" "),e("td",[a._v("alkali metal")])]),a._v(" "),e("tr",[e("td",[a._v("4")]),a._v(" "),e("td",[a._v("Be")]),a._v(" "),e("td",[a._v("Beryllium")]),a._v(" "),e("td",[a._v("9.012182")]),a._v(" "),e("td",[a._v("alkaline earth metal")])]),a._v(" "),e("tr",[e("td",[a._v("5")]),a._v(" "),e("td",[a._v("B")]),a._v(" "),e("td",[a._v("Boron")]),a._v(" "),e("td",[a._v("10.811")]),a._v(" "),e("td",[a._v("metalloid")])])])]),a._v(" "),e("p",[a._v("Data Packages can be loaded either from a local path or directly from the web.")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://raw.githubusercontent.com/okgreece/datapackage-r/master/vignettes/example_data/package.json'")]),a._v("\n    datapackage "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Package.load"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    datapackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("descriptor"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("profile "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'tabular-data-resource'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tabular resource descriptor profile")]),a._v("\n    datapackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("commit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# commit changes")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## [1] TRUE")]),a._v("\n")])])]),e("p",[a._v("At the most basic level, Data Packages provide a standardized format for general metadata (for example, the dataset title, source, author, and/or description) about your dataset. Now that you have loaded this Data Package, you have access to this "),e("code",[a._v("metadata")]),a._v(" using the metadata dict attribute. Note that these fields are optional and may not be specified for all Data Packages. For more information on which fields are supported, see "),e("router-link",{attrs:{to:"/specs/data-package/"}},[a._v("the full Data Package standard")]),a._v(".")],1),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    datapackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("descriptor"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("title\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('## [1] "Periodic Table"')]),a._v("\n")])])]),e("h2",{attrs:{id:"reading-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reading-data"}},[a._v("#")]),a._v(" Reading Data")]),a._v(" "),e("p",[a._v("Now that you have loaded your Data Package, you can read its data. A Data Package can contain multiple files which are accessible via the "),e("code",[a._v("resources")]),a._v(" attribute. The "),e("code",[a._v("resources")]),a._v(" attribute is an array of objects containing information (e.g. path, schema, description) about each file in the package.")]),a._v(" "),e("p",[a._v("You can access the data in a given resource in the "),e("code",[a._v("resources")]),a._v(" array by reading the "),e("code",[a._v("data")]),a._v(" attribute.")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    table "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" datapackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("table\n    periodic_table_data "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" table"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("read"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("You can further manipulate list objects in R by using")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("purrr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("https"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("cran.r"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("project.org"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("package"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("purrr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("rlist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("https"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("cran.r"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("project.org"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("package"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rlist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" packages.\n")])])]),e("h2",{attrs:{id:"loading-into-an-sql-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-an-sql-database"}},[a._v("#")]),a._v(" Loading into an SQL database")]),a._v(" "),e("p",[e("router-link",{attrs:{to:"/specs/tabular-data-package/"}},[a._v("Tabular Data Packages")]),a._v(" contains schema information about its data using "),e("router-link",{attrs:{to:"/docs/table-schema/"}},[a._v("Table Schema")]),a._v(". This means you can easily import your Data Package into the SQL backend of your choice. In this case, we are creating an "),e("a",{attrs:{href:"http://sqlite.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("SQLite"),e("OutboundLink")],1),a._v(" database.")],1),a._v(" "),e("p",[a._v("To create a new SQLite database and load the data into SQL we will need "),e("a",{attrs:{href:"https://cran.r-project.org/package=DBI",target:"_blank",rel:"noopener noreferrer"}},[a._v("DBI"),e("OutboundLink")],1),a._v(" package and "),e("a",{attrs:{href:"https://cran.r-project.org/package=RSQLite",target:"_blank",rel:"noopener noreferrer"}},[a._v("RSQLite"),e("OutboundLink")],1),a._v(" package, which contains "),e("a",{attrs:{href:"https://www.sqlite.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("SQLite"),e("OutboundLink")],1),a._v(" (no external software is needed).")]),a._v(" "),e("p",[a._v("You can install and load them by using:")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    install.packages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"DBI"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RSQLite"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    library"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("DBI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    library"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("RSQLite"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("To create a new SQLite database, you simply supply the filename to "),e("code",[a._v("dbConnect()")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    dp.database "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" dbConnect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("RSQLite"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("SQLite"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# temporary database")]),a._v("\n")])])]),e("p",[a._v("We will use "),e("a",{attrs:{href:"https://cran.r-project.org/package=RSQLite",target:"_blank",rel:"noopener noreferrer"}},[a._v("data.table"),e("OutboundLink")],1),a._v(" package to convert the list object with the data to a data frame object to copy them to database table.")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# install data.table package if not already")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# install.packages("data.table")')]),a._v("\n\n    periodic_table_sql "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" data.table"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("rbindlist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("periodic_table_data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    periodic_table_sql "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" setNames"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("periodic_table_sql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("unlist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("datapackage"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("resources"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("$")]),a._v("headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("You can easily copy an R data frame into a SQLite database with "),e("code",[a._v("dbWriteTable()")]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    dbWriteTable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dp.database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"periodic_table_sql"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" periodic_table_sql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# show remote tables accessible through this connection")]),a._v("\n    dbListTables"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dp.database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('## [1] "periodic_table_sql"')]),a._v("\n")])])]),e("p",[a._v("The data are already to the database.")]),a._v(" "),e("p",[a._v("We can further issue queries to hte database and return first 5 elements:")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("\n    dbGetQuery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dp.database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'SELECT * FROM periodic_table_sql LIMIT 5'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##   atomic number symbol      name atomic mass   metal or nonmetal?")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 1             1      H  Hydrogen    1.007940             nonmetal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 2             2     He    Helium    4.002602            noble gas")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 3             3     Li   Lithium    6.941000         alkali metal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 4             4     Be Beryllium    9.012182 alkaline earth metal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 5             5      B     Boron   10.811000            metalloid")]),a._v("\n")])])]),e("p",[a._v("Or return all elements with an atomic number of less than 10:")]),a._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[a._v("    dbGetQuery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dp.database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'SELECT * FROM periodic_table_sql WHERE \"atomic number\" < 10'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##   atomic number symbol      name atomic mass   metal or nonmetal?")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 1             1      H  Hydrogen    1.007940             nonmetal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 2             2     He    Helium    4.002602            noble gas")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 3             3     Li   Lithium    6.941000         alkali metal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 4             4     Be Beryllium    9.012182 alkaline earth metal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 5             5      B     Boron   10.811000            metalloid")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 6             6      C    Carbon   12.010700             nonmetal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 7             7      N  Nitrogen   14.006700             nonmetal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 8             8      O    Oxygen   15.999400             nonmetal")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 9             9      F  Fluorine   18.998403              halogen")]),a._v("\n")])])]),e("p",[a._v("More about using databases, SQLite in R you can find in vignettes of "),e("a",{attrs:{href:"https://cran.r-project.org/package=DBI",target:"_blank",rel:"noopener noreferrer"}},[a._v("DBI"),e("OutboundLink")],1),a._v(" and "),e("a",{attrs:{href:"https://cran.r-project.org/package=RSQLite",target:"_blank",rel:"noopener noreferrer"}},[a._v("RSQLite"),e("OutboundLink")],1),a._v(" packages.")]),a._v(" "),e("p",[a._v("We welcome your feedback and questions via our "),e("a",{attrs:{href:"http://gitter.im/frictionlessdata/chat",target:"_blank",rel:"noopener noreferrer"}},[a._v("Frictionless Data Gitter chat"),e("OutboundLink")],1),a._v(" or via "),e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-r/issues",target:"_blank",rel:"noopener noreferrer"}},[a._v("Github issues"),e("OutboundLink")],1),a._v(" on the "),e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-r",target:"_blank",rel:"noopener noreferrer"}},[a._v("datapackage-r"),e("OutboundLink")],1),a._v(" repository.")])])}),[],!1,null,null,null);t.default=r.exports}}]);