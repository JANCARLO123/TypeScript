//// [tests/cases/conformance/ambient/ambientShorthand_reExport.ts] ////

//// [declarations.d.ts]
declare module "jquery";

//// [reExportX.ts]
export {x} from "jquery";

//// [reExportAll.ts]
export * from "jquery";

//// [reExportUser.ts]
import {x} from "./reExportX";
import * as $ from "./reExportAll";
// '$' is not callable, it is an object.
x($);


//// [reExportX.js]
"use strict";
var jquery_1 = require("jquery");
exports.x = jquery_1.x;
//// [reExportAll.js]
"use strict";
//// [reExportUser.js]
"use strict";
var reExportX_1 = require("./reExportX");
var $ = require("./reExportAll");
// '$' is not callable, it is an object.
reExportX_1.x($);
