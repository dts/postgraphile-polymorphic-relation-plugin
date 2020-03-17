"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./add_backward_poly_association_plugin"));
__export(require("./add_forward_poly_association_plugin"));
__export(require("./postgraphilePolyRelationCorePlugin"));
var postgraphile_plugin_connection_filter_polymorphic_1 = require("postgraphile-plugin-connection-filter-polymorphic");
exports.addModelTableMappingPlugin = postgraphile_plugin_connection_filter_polymorphic_1.addModelTableMappingPlugin;
exports.definePolymorphicCustom = postgraphile_plugin_connection_filter_polymorphic_1.definePolymorphicCustom;
//# sourceMappingURL=index.js.map