(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{316:function(t,a,e){"use strict";e.r(a);var o=e(0),r=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("One-off validation of your tabular datasets can be hectic, especially where plenty of published data is maintained and updated fairly regularly.")]),t._v(" "),e("p",[t._v("Running continuous checks on data provides regular feedback and contributes to better data quality as errors can be flagged and fixed early on. This section introduces you to tools that continually check your data for errors and flag content and structural issues as they arise. By eliminating the need to run manual checks on tabular datasets every time they are updated, they make your data workflow more efficient.")]),t._v(" "),e("p",[t._v("In this section, you will learn how to setup automatic tabular data validation using goodtables, so your data is validated every time it’s updated. Although not strictly necessary, it’s useful to "),e("a",{attrs:{href:"/field-guide/well-packaged-datasets"}},[t._v("know about Data Packages and Table Schema")]),t._v(" before proceeding, as they allow you to describe your data in more detail, allowing more advanced validations.")]),t._v(" "),e("p",[t._v("We will show how to set up automated tabular data validations for data published on:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://ckan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("CKAN"),e("OutboundLink")],1),t._v(", an open source data publishing platform;")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(", a hosting service;")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon S3"),e("OutboundLink")],1),t._v(", a data storage service.")])]),t._v(" "),e("p",[t._v("If you don’t use any of these platforms, you can still setup the validation using "),e("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("goodtables-py"),e("OutboundLink")],1),t._v(", it will just require some technical knowledge")]),t._v(" "),e("p",[t._v("If you do use some of these platforms, the data validation report look like:")]),t._v(" "),e("figure",[e("a",{attrs:{href:"https://goodtables.io/github/vitorbaptista/birmingham_schools/jobs/3",rel:"external"}},[e("img",{attrs:{src:"goodtablesio-screenshot.png",alt:"Figure 1: Goodtables.io tabular data validation report"}})]),t._v(" "),e("figcaption",[t._v("\n    Figure 1: Goodtables.io tabular data validation report.\n  ")])]),t._v(" "),e("h2",{attrs:{id:"validate-tabular-data-automatically-on-ckan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validate-tabular-data-automatically-on-ckan"}},[t._v("#")]),t._v(" Validate tabular data automatically on CKAN")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://ckan.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CKAN"),e("OutboundLink")],1),t._v(" is an open source platform for publishing data online. It is widely used across the planet, including by the federal governments of the USA, United Kingdom, Brazil, and others.")]),t._v(" "),e("p",[t._v("To automatically validate tabular data on CKAN, enable the "),e("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ckanext-validation"),e("OutboundLink")],1),t._v(" extension, which uses goodtables to run continuous checks on your data. The "),e("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ckanext-validation"),e("OutboundLink")],1),t._v(" extension:")]),t._v(" "),e("ul",[e("li",[t._v("Adds a badge next to each dataset showing the status of their validation (valid or invalid), and")]),t._v(" "),e("li",[t._v("Allows users to access the validation report, making it possible for errors to be identified and fixed.")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"ckan-validation.png",alt:"Figure 2: Annotated in red, automated validation checks on datasets in CKAN"}}),t._v(" "),e("figcaption",[t._v("\n    Figure 2: Annotated in red, automated validation checks on datasets in CKAN.\n  ")])]),t._v(" "),e("p",[t._v("The installation and usage instructions for "),e("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ckanext-validation"),e("OutboundLink")],1),t._v(" extension are available on "),e("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"validate-tabular-data-automatically-on-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validate-tabular-data-automatically-on-github"}},[t._v("#")]),t._v(" Validate tabular data automatically on GitHub")]),t._v(" "),e("p",[t._v("If your data is hosted on GitHub, you can use goodtables web service to automatically validate it on every change.")]),t._v(" "),e("p",[t._v("For this section, you will first need to create a "),e("a",{attrs:{href:"https://help.github.com/articles/create-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub repository"),e("OutboundLink")],1),t._v(" and add tabular data to it.")]),t._v(" "),e("p",[t._v("Once you have tabular data in your Github repository:")]),t._v(" "),e("ol",[e("li",[t._v("Login on "),e("a",{attrs:{href:"https://goodtables.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("goodtables.io"),e("OutboundLink")],1),t._v(" using your GitHub account and accept the permissions confirmation.")]),t._v(" "),e("li",[t._v("Once we’ve synchronized your repository list, go to the "),e("a",{attrs:{href:"https://goodtables.io/settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manage Sources"),e("OutboundLink")],1),t._v(" page and enable the repository with the data you want to validate.\n"),e("ul",[e("li",[t._v("If you can’t find the repository, try clicking on the Refresh button on the Manage Sources page")])])])]),t._v(" "),e("p",[t._v("Goodtables will then validate all tabular data files (CSV, XLS, XLSX, ODS) and "),e("router-link",{attrs:{to:"/data-packages/"}},[t._v("data packages")]),t._v(" in the repository. These validations will be executed on every change, including pull requests.")],1),t._v(" "),e("h2",{attrs:{id:"validate-tabular-data-automatically-on-amazon-s3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validate-tabular-data-automatically-on-amazon-s3"}},[t._v("#")]),t._v(" Validate tabular data automatically on Amazon S3")]),t._v(" "),e("p",[t._v("If your data is hosted on Amazon S3, you can use "),e("a",{attrs:{href:"https://goodtables.io/",title:"Goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("goodtables.io"),e("OutboundLink")],1),t._v(" to automatically validate it on every change.")]),t._v(" "),e("p",[t._v("It is a technical process to set up, as you need to know how to configure your Amazon S3 bucket. However, once it’s configured, the validations happen automatically on any tabular data created or updated. Find the detailed instructions "),e("a",{attrs:{href:"https://docs.goodtables.io/getting_started/s3.html",title:"Goodtables.io Amazon S3 instructions",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"custom-setup-of-automatic-tabular-data-validation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-setup-of-automatic-tabular-data-validation"}},[t._v("#")]),t._v(" Custom setup of automatic tabular data validation")]),t._v(" "),e("p",[t._v("If you don’t use any of the officially supported data publishing platforms, you can use "),e("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("goodtables-py"),e("OutboundLink")],1),t._v(" directly to validate your data. This is the most flexible option, as you can configure exactly when, and how your tabular data is validated. For example, if your data come from an external source, you could validate it once before you process it (so you catch errors in the source data), and once after cleaning, just before you publish it, so you catch errors introduced by your data processing.")]),t._v(" "),e("p",[t._v("The instructions on how to do this are technical, and can be found on "),e("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/goodtables-py"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);