"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var vue_class_component_1 = require("vue-class-component");
var BasicService_1 = require("../../services/BasicService");
var fx_1 = require("@omnia/fx");
var BasicComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BasicComponent, _super);
    function BasicComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicComponent.prototype.mounted = function () {
        fx_1.WebComponentBootstrapper.registerElementInstance(this, this.$el);
    };
    BasicComponent.prototype.render = function (h) {
        return (<div>
                I am a web component
            </div>);
    };
    tslib_1.__decorate([
        fx_1.Inject(BasicService_1.BasicService),
        tslib_1.__metadata("design:type", BasicService_1.BasicService)
    ], BasicComponent.prototype, "basicService", void 0);
    tslib_1.__decorate([
        fx_1.Inject(fx_1.HttpClient),
        tslib_1.__metadata("design:type", fx_1.HttpClient)
    ], BasicComponent.prototype, "httpClient", void 0);
    tslib_1.__decorate([
        fx_1.Inject(fx_1.OmniaContext),
        tslib_1.__metadata("design:type", fx_1.OmniaContext)
    ], BasicComponent.prototype, "omniaContext", void 0);
    tslib_1.__decorate([
        fx_1.Inject(fx_1.SharePointContext),
        tslib_1.__metadata("design:type", fx_1.SharePointContext)
    ], BasicComponent.prototype, "spContext", void 0);
    BasicComponent = tslib_1.__decorate([
        vue_class_component_1.default
    ], BasicComponent);
    return BasicComponent;
}(vue_1.default));
exports.BasicComponent = BasicComponent;
fx_1.WebComponentBootstrapper.registerElement(function (manifest) {
    document
        .querySelectorAll('.omf-header')[0]
        .appendChild(document.createElement(manifest.elementName));
    vue_1.default.customElement(manifest.elementName, new BasicComponent().$options);
});
