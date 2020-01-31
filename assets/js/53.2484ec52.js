(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{318:function(e,a,t){"use strict";t.r(a);var n=t(0),i=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"http://frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("frictionlessdata.io"),t("OutboundLink")],1),t("br"),e._v("\nApplying licenses, waivers or public domain marks to "),t("router-link",{attrs:{to:"/specs/data-package/"}},[e._v("data packages")]),e._v(" and "),t("router-link",{attrs:{to:"/specs/data-resource/"}},[e._v("data resources")]),e._v(" helps people understand how they can use, modify and share the contents of a data package.")],1),e._v(" "),t("p",[e._v("It is recommended to that you apply a license, waiver or public domain mark to a data package using the "),t("router-link",{attrs:{to:"/specs/data-package/#licenses"}},[t("code",[e._v("licenses")])]),e._v(" property. The value assigned to the data package "),t("code",[e._v("licenses")]),e._v(" property applies to all the data, files and metadata in the data package unless specified otherwise.")],1),e._v(" "),t("p",[e._v("You can optionally apply a license to a data resource. This allows a license that differs from the data package license to be applied to the data resource. If the data resource "),t("router-link",{attrs:{to:"/specs/data-resource/#optional-properties"}},[t("code",[e._v("licenses")])]),e._v(" property is not specified, it inherits the data package "),t("code",[e._v("licenses")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"specifying-a-license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specifying-a-license"}},[e._v("#")]),e._v(" Specifying a license")]),e._v(" "),t("p",[e._v("The Frictionless Data specification states that a "),t("router-link",{attrs:{to:"/specs/data-package/#licenses"}},[e._v("license")]),e._v(" must contain a "),t("code",[e._v("name")]),e._v(" property and/or a "),t("code",[e._v("path")]),e._v(" property, and may contain a "),t("code",[e._v("title")]),e._v(" property.")],1),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("name")]),e._v(": The name MUST be an "),t("a",{attrs:{href:"http://licenses.opendefinition.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Definition license ID"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("code",[e._v("path")]),e._v(": A "),t("router-link",{attrs:{to:"/specs/data-resource/#url-or-path"}},[e._v("url-or-path")]),e._v(" string, that is a fully qualified HTTP address, or a relative POSIX path")],1),e._v(" "),t("li",[t("code",[e._v("title")]),e._v(": A human-readable title")])])]),e._v(" "),t("p",[e._v("You can specify the location of a license using a URL or a Path.")]),e._v(" "),t("h3",{attrs:{id:"specify-a-license-using-a-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specify-a-license-using-a-url"}},[e._v("#")]),e._v(" Specify a license using a URL")]),e._v(" "),t("p",[e._v("To specify a license using a URL, use the fully qualified HTTP address as the value in the "),t("code",[e._v("path")]),e._v(" property, e.g.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"licenses": [{\n  "path": "https://cdla.io/sharing-1-0/",\n  "title": "Community Data License Agreement – Sharing, Version 1.0"\n}]\n')])])]),t("h3",{attrs:{id:"specify-a-license-using-a-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#specify-a-license-using-a-path"}},[e._v("#")]),e._v(" Specify a license using a Path")]),e._v(" "),t("p",[e._v("To specify a license using a path, use a relative POSIX path to the file in the data package as the value in the "),t("code",[e._v("path")]),e._v(" property, e.g.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"licenses": [{\n  "path": "LICENSE.pdf"\n}]\n')])])]),t("p",[e._v("In this example, LICENSE.pdf would be in the root of the data package folder, e.g.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("folder\n  |- datapackage.json\n  |- LICENSE.pdf\n  |- README.md\n  |- data\n      |- data.csv\n      |- reference-data.csv\n\n")])])]),t("p",[e._v("It is recommended that the licence is provided in "),t("a",{attrs:{href:"http://commonmark.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown"),t("OutboundLink")],1),e._v(" format to simplify its display in data platforms and other software.")]),e._v(" "),t("p",[e._v("The license can be a separate file or included in the "),t("a",{attrs:{href:"http://README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),t("OutboundLink")],1),e._v(" file. If license information is included in the "),t("a",{attrs:{href:"http://README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),t("OutboundLink")],1),e._v(" file, it is recommended that it follows the "),t("router-link",{attrs:{to:"/guides/publish-faq/#readme"}},[e._v("guide for formatting a README file")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"applying-a-license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#applying-a-license"}},[e._v("#")]),e._v(" Applying a license")]),e._v(" "),t("p",[e._v("These scenarios apply to either the data package or a data resource.")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#apply-an-open-license"}},[e._v("Apply an open license")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#apply-a-non-open-license"}},[e._v("Apply a non-open license")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#apply-a-waiver"}},[e._v("Apply a waiver")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#apply-a-public-domain-mark"}},[e._v("Apply a public domain mark")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#do-not-apply-a-license"}},[e._v("Do not apply a license")])])]),e._v(" "),t("p",[e._v("Other considerations:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#provide-additional-license-information"}},[e._v("Provide additional license information")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#copyright-belongs-to-multiple-parties"}},[e._v("Copyright belongs to multiple parties")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#license-may-become-legally-binding"}},[e._v("License may become legally binding")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#software-may-not-fully-support-the-frictionless-data-specification"}},[e._v("Software may not fully support the Frictionless Data specification")])])]),e._v(" "),t("h3",{attrs:{id:"apply-an-open-license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-an-open-license"}},[e._v("#")]),e._v(" Apply an open license")]),e._v(" "),t("p",[e._v("For an "),t("a",{attrs:{href:"http://opendefinition.org/licenses/",target:"_blank",rel:"noopener noreferrer"}},[e._v("open license"),t("OutboundLink")],1),e._v(", use "),t("code",[e._v("name")]),e._v(", "),t("code",[e._v("path")]),e._v(" and "),t("code",[e._v("title")]),e._v(", e.g.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"licenses": [{\n  "name": "CC-BY-4.0",\n  "path": "https://creativecommons.org/licenses/by/4.0/",\n  "title": "Creative Commons Attribution 4.0"\n}]\n')])])]),t("p",[t("code",[e._v("name")]),e._v(" must be an "),t("a",{attrs:{href:"http://licenses.opendefinition.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Definition license ID"),t("OutboundLink")],1),e._v(" however note that some license IDs are placeholders or have been retired and should not be used, e.g. "),t("a",{attrs:{href:"http://licenses.opendefinition.org/licenses/other-at.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("other-at"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://licenses.opendefinition.org/licenses/other-open.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("other-open"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://licenses.opendefinition.org/licenses/other-pd.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("other-pd"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://licenses.opendefinition.org/licenses/notspecified.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("notspecified"),t("OutboundLink")],1),e._v(",  "),t("a",{attrs:{href:"http://licenses.opendefinition.org/licenses/ukcrown-withrights.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("ukcrown-withrights"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"apply-a-non-open-license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-a-non-open-license"}},[e._v("#")]),e._v(" Apply a non-open license")]),e._v(" "),t("p",[e._v("To apply an non-open license, use the "),t("code",[e._v("path")]),e._v(" and optionally the "),t("code",[e._v("title")]),e._v(" properties. It is preferred that the license is published at a URL (a fully qualified HTTP address), e.g.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"licenses": [{\n  "path": "https://creativecommons.org/licenses/by-nc-nd/4.0/",\n  "title": "Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"\n}]\n')])])]),t("p",[e._v("If the license is not available at a URL, you can "),t("a",{attrs:{href:"#specify-a-license-using-a-path"}},[e._v("specify a license using a path")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"apply-a-waiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-a-waiver"}},[e._v("#")]),e._v(" Apply a waiver")]),e._v(" "),t("p",[e._v("You can indicate that copyright has been waived by referencing a waiver at a URL in the "),t("code",[e._v("path")]),e._v(" property, e.g.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"licenses": [{\n  "name": "CC0-1.0"\n  "path": "https://creativecommons.org/publicdomain/zero/1.0/",\n  "title": "CC0 1.0"\n}]\n')])])]),t("p",[e._v("If the waiver is not available at a URL, you can "),t("a",{attrs:{href:"#specify-a-license-using-a-path"}},[e._v("specify a waiver using a path")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"apply-a-public-domain-mark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-a-public-domain-mark"}},[e._v("#")]),e._v(" Apply a public domain mark")]),e._v(" "),t("p",[e._v("You can indicate that there is no copyright in the data or that copyright has expired, using the "),t("a",{attrs:{href:"https://creativecommons.org/share-your-work/public-domain/pdm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("public domain mark"),t("OutboundLink")],1),e._v(" or other public domain dedications, e.g.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"licenses": [{\n  "path": "http://creativecommons.org/publicdomain/mark/1.0/",\n  "title": "Public Domain Mark"\n}]\n')])])]),t("p",[e._v("If the public domain dedication is not available at a URL, you can  "),t("a",{attrs:{href:"#specify-a-license-using-a-path"}},[e._v("specify the public domain dedication using a path")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"do-not-apply-a-license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#do-not-apply-a-license"}},[e._v("#")]),e._v(" Do not apply a license")]),e._v(" "),t("p",[e._v("If you have not decided what license to apply but still want to publish the data package, describe the situation in a file in the data package, e.g.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"licenses": [{\n  "path": "README.md"\n}]\n')])])]),t("h2",{attrs:{id:"other-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-considerations"}},[e._v("#")]),e._v(" Other considerations")]),e._v(" "),t("h3",{attrs:{id:"provide-additional-license-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provide-additional-license-information"}},[e._v("#")]),e._v(" Provide additional license information")]),e._v(" "),t("p",[e._v("It can be helpful to data consumers to provide additional copyright or attribution information such as:")]),e._v(" "),t("ul",[t("li",[e._v("copyright notice - this allows a data publisher to specify a short copyright notice")]),e._v(" "),t("li",[e._v("copyright statement URL - a URL to a copyright statement")]),e._v(" "),t("li",[e._v("preferred attribution text - the text to be used when attributing the creator(s) of the data")]),e._v(" "),t("li",[e._v("attribution URL - a URL to be used when building an attribution link")])]),e._v(" "),t("p",[e._v("This is explained in the ODI "),t("a",{attrs:{href:"https://theodi.org/guides/publishers-guide-to-the-open-data-rights-statement-vocabulary",target:"_blank",rel:"noopener noreferrer"}},[e._v("Publisher’s Guide to the Open Data Rights Statement Vocabulary"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://theodi.org/guides/odrs-reusers-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Re-users Guide to the Open Data Rights Statement Vocabulary"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Some licenses require that data consumers provide the copyright notice in the attribution (e.g. "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/legalcode#s3",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY 4.0 Section 3"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("Some data publishers may waive some of their rights under a license, e.g.")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://data.gov.au/dataset/noosa-wedding-locations",target:"_blank",rel:"noopener noreferrer"}},[e._v("Noosa Wedding Locations"),t("OutboundLink")],1),e._v(" data by "),t("a",{attrs:{href:"https://www.noosa.qld.gov.au",target:"_blank",rel:"noopener noreferrer"}},[e._v("Noosa Shire Council"),t("OutboundLink")],1),e._v(" is licensed under a "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creative Commons Attribution 4.0"),t("OutboundLink")],1),e._v(" licence."),t("br"),e._v("\nNoosa Shire Council waives the requirements of attribution under this licence, for this data.")])]),e._v(" "),t("p",[e._v("You can include this information, either:")]),e._v(" "),t("ul",[t("li",[e._v("in the file containing license information (e.g. "),t("a",{attrs:{href:"http://README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("as additional metadata properties in the datapackage.json")])]),e._v(" "),t("p",[e._v("The data package specification supports adding "),t("router-link",{attrs:{to:"/specs/data-package/#descriptor"}},[e._v("additional metadata properties")]),e._v(" to the datapackage.json, e.g.")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "name" : "coastal-data-system-near-real-time-wave-data",\n  "title" : "Coastal Data System – Near real time wave data",\n  "licenses" : [{\n    "name": "CC-BY-4.0",\n    "path": "https://creativecommons.org/licenses/by/4.0/",\n    "title": "Creative Commons Attribution 4.0"\n  }],\n  "copyrightNotice": "© The State of Queensland 1995–2017",\n  "copyrightStatement": "https://www.qld.gov.au/legal/copyright",\n  "attributionText": "Science, Information Technology and Innovation, Queensland Government, Coastal Data System – Near real time wave data, licensed under Creative Commons Attribution 4.0 sourced on 26 December 2017",\n  "resources": [\n    {\n      "path": "https://data.qld.gov.au/dataset/coastal-data-system-near-real-time-wave-data",\n      ...\n    }\n  ]\n}\n')])])]),t("h3",{attrs:{id:"copyright-belongs-to-multiple-parties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copyright-belongs-to-multiple-parties"}},[e._v("#")]),e._v(" Copyright belongs to multiple parties")]),e._v(" "),t("p",[e._v("Sometimes data in a resource may be combined from multiple sources that are licensed in different ways. You can indicate this by placing two or more licenses in the "),t("code",[e._v("licenses")]),e._v(" property. Further explanation should be given in the "),t("code",[e._v("README.md")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('"licenses": [{\n    "name": "ODC-PDDL-1.0",\n    "path": "http://opendatacommons.org/licenses/pddl/",\n    "title": "Open Data Commons Public Domain Dedication and License v1.0"\n  },\n  {\n    "name": "CC-BY-SA-4.0",\n    "path": "https://creativecommons.org/licenses/by-sa/4.0/",\n    "title": "Creative Commons Attribution Share-Alike 4.0"\n  }]\n')])])]),t("h3",{attrs:{id:"license-may-become-legally-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license-may-become-legally-binding"}},[e._v("#")]),e._v(" License may become legally binding")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("frictionlessdata.io"),t("OutboundLink")],1),t("br"),e._v("\nThe "),t("router-link",{attrs:{to:"/specs/data-package/#licenses"}},[e._v("specification")]),e._v(" for "),t("code",[e._v("licenses")]),e._v(" states:")],1),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("This property is not legally binding and does not guarantee the package is licensed under the terms defined in this property.")])])]),e._v(" "),t("p",[e._v("A data package may be uploaded to a data platform and the "),t("code",[e._v("licenses")]),e._v(" applied to the data resources may be publicly displayed. This may make, or give the perception that, the license is legally binding. Please check your specific situation before publishing the data.")]),e._v(" "),t("h3",{attrs:{id:"software-may-not-fully-support-the-frictionless-data-specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-may-not-fully-support-the-frictionless-data-specification"}},[e._v("#")]),e._v(" Software may not fully support the Frictionless Data specification")]),e._v(" "),t("p",[e._v("Be aware that some data platforms or software may not fully support the Frictionless Data specification. This may result in license information being lost or other issues. Always test your data publication to ensure you communicate the correct license information.")]),e._v(" "),t("p",[e._v("For example, at the time of writing:")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-datapackager",target:"_blank",rel:"noopener noreferrer"}},[e._v("CKAN Data Package extension"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("does not upload the "),t("a",{attrs:{href:"http://README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),t("OutboundLink")],1),e._v(" file in a data package. If you have described licence information in the "),t("a",{attrs:{href:"http://README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),t("OutboundLink")],1),e._v(" file, this will be lost ("),t("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-datapackager/issues/60",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #60"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("does not display license information in the datapackage.json file correctly ("),t("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-datapackager/issues/62",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue #62"),t("OutboundLink")],1),e._v(")")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://data-curator.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Curator"),t("OutboundLink")],1),e._v(" only allows the user to select from a limited set of open licenses to describe the data package and data resource licenses.")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);