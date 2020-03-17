"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_backward_poly_association_plugin_1 = require("./add_backward_poly_association_plugin");
const add_forward_poly_association_plugin_1 = require("./add_forward_poly_association_plugin");
const postgraphile_plugin_connection_filter_polymorphic_1 = require("postgraphile-plugin-connection-filter-polymorphic");
const postgraphile_1 = require("postgraphile");
exports.postgraphilePolyRelationCorePlugin = postgraphile_1.makePluginByCombiningPlugins(postgraphile_plugin_connection_filter_polymorphic_1.addModelTableMappingPlugin, postgraphile_plugin_connection_filter_polymorphic_1.definePolymorphicCustom, add_backward_poly_association_plugin_1.addBackwardPolyAssociation, add_forward_poly_association_plugin_1.addForwardPolyAssociation);
//# sourceMappingURL=postgraphilePolyRelationCorePlugin.js.map