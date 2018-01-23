"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_class_component_1 = require("vue-class-component");
var vue_property_decorator_1 = require("vue-property-decorator");
var tsx = require("vue-tsx-support");
var BasicSubComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BasicSubComponent, _super);
    function BasicSubComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //This will emit the onOk event to parent listeners
    BasicSubComponent.prototype.onOkClicked = function () { };
    //This will emit the onError event to parent listeners
    //and pass the provided parameter
    BasicSubComponent.prototype.onErrorClicked = function (details) {
        //Add more logic here
    };
    BasicSubComponent.prototype.mounted = function () { };
    BasicSubComponent.prototype.render = function (h) {
        var _this = this;
        return <div>
            <button type="button" onClick={function () { _this.onOkClicked(); }}>Ok</button>
            <button type="button" onClick={function () { _this.onErrorClicked({ code: 224, detail: 'Someone clicked error' }); }}>Error</button>
        </div>;
    };
    tslib_1.__decorate([
        vue_property_decorator_1.Prop(),
        tslib_1.__metadata("design:type", String)
    ], BasicSubComponent.prototype, "subtext", void 0);
    tslib_1.__decorate([
        vue_property_decorator_1.Emit('ok'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], BasicSubComponent.prototype, "onOkClicked", null);
    tslib_1.__decorate([
        vue_property_decorator_1.Emit('error'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], BasicSubComponent.prototype, "onErrorClicked", null);
    BasicSubComponent = tslib_1.__decorate([
        vue_class_component_1.default
    ], BasicSubComponent);
    return BasicSubComponent;
}(tsx.Component));
exports.default = BasicSubComponent;
