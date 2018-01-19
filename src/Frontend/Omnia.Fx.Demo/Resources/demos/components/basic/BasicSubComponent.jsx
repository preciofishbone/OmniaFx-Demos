"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_class_component_1 = require("vue-class-component");
var tsx = require("vue-tsx-support");
var vue_property_decorator_1 = require("vue-property-decorator");
var BasicSubComponent = (function (_super) {
    tslib_1.__extends(BasicSubComponent, _super);
    function BasicSubComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicSubComponent.prototype.mounted = function () {
    };
    BasicSubComponent.prototype.render = function (h) {
        return (<div> I am a niceeeee sub component {this.subtext}! </div>);
    };
    tslib_1.__decorate([
        vue_property_decorator_1.Prop(),
        tslib_1.__metadata("design:type", String)
    ], BasicSubComponent.prototype, "subtext", void 0);
    BasicSubComponent = tslib_1.__decorate([
        vue_class_component_1.default
    ], BasicSubComponent);
    return BasicSubComponent;
}(tsx.Component));
exports.default = BasicSubComponent;
