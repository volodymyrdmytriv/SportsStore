/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../app/admin/auth.component');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/change_detection');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('@angular/router/src/router');
var import9 = require('../../../app/model/auth.service');
var import10 = require('@angular/core/src/linker/view_container');
var import11 = require('../../node_modules/@angular/common/src/directives/ng_if.ngfactory');
var import12 = require('../../node_modules/@angular/forms/src/directives/ng_form.ngfactory');
var import13 = require('../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory');
var import14 = require('../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory');
var import15 = require('../../node_modules/@angular/forms/src/directives/validators.ngfactory');
var import16 = require('../../node_modules/@angular/forms/src/directives/ng_model.ngfactory');
var import17 = require('../../node_modules/@angular/router/src/directives/router_link.ngfactory');
var import18 = require('@angular/core/src/linker/template_ref');
var import19 = require('@angular/core/src/linker/element_ref');
var import20 = require('@angular/router/src/router_state');
var import21 = require('@angular/common/src/location/location_strategy');
var import22 = require('@angular/common/src/directives/ng_if');
var import23 = require('@angular/forms/src/directives/default_value_accessor');
var import24 = require('@angular/forms/src/directives/validators');
var import25 = require('@angular/forms/src/validators');
var import26 = require('@angular/forms/src/directives/control_value_accessor');
var import27 = require('@angular/forms/src/directives/ng_model');
var import28 = require('@angular/forms/src/directives/ng_control');
var import29 = require('@angular/forms/src/directives/ng_control_status');
var import30 = require('@angular/router/src/directives/router_link');
var import31 = require('@angular/forms/src/directives/ng_form');
var import32 = require('@angular/forms/src/directives/control_container');
var Wrapper_AuthComponent = (function () {
    function Wrapper_AuthComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.AuthComponent(p0, p1);
    }
    Wrapper_AuthComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AuthComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AuthComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AuthComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AuthComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AuthComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AuthComponent;
}());
exports.Wrapper_AuthComponent = Wrapper_AuthComponent;
var renderType_AuthComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AuthComponent_Host0 = (function (_super) {
    __extends(View_AuthComponent_Host0, _super);
    function View_AuthComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AuthComponent_Host0, renderType_AuthComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AuthComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AuthComponent0(this.viewUtils, this, 0, this._el_0);
        this._AuthComponent_0_3 = new Wrapper_AuthComponent(this.injectorGet(import8.Router, this.parentIndex), this.injectorGet(import9.AuthService, this.parentIndex));
        this.compView_0.create(this._AuthComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AuthComponent_0_3.context);
    };
    View_AuthComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AuthComponent) && (0 === requestNodeIndex))) {
            return this._AuthComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AuthComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AuthComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_AuthComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AuthComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AuthComponent_Host0;
}(import1.AppView));
exports.AuthComponentNgFactory = new import7.ComponentFactory('ng-component', View_AuthComponent_Host0, import0.AuthComponent);
var styles_AuthComponent = [];
var renderType_AuthComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AuthComponent, {});
var View_AuthComponent0 = (function (_super) {
    __extends(View_AuthComponent0, _super);
    function View_AuthComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AuthComponent0, renderType_AuthComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AuthComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'bg-info p-a-1 text-xs-center'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'SportsStore Admin', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_6 = new import10.ViewContainer(6, null, this, this._anchor_6);
        this._TemplateRef_6_5 = new import18.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import11.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'p-a-1'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'form', new import3.InlineArray2(2, 'novalidate', ''), null);
        this._NgForm_10_3 = new import12.Wrapper_NgForm(null, null);
        this._ControlContainer_10_4 = this._NgForm_10_3.context;
        this._NgControlStatusGroup_10_5 = new import13.Wrapper_NgControlStatusGroup(this._ControlContainer_10_4);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Name', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_12, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'username', 'required', ''), null);
        this._DefaultValueAccessor_17_3 = new import14.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_17));
        this._RequiredValidator_17_4 = new import15.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_17_5 = [this._RequiredValidator_17_4.context];
        this._NG_VALUE_ACCESSOR_17_6 = [this._DefaultValueAccessor_17_3.context];
        this._NgModel_17_7 = new import16.Wrapper_NgModel(this._ControlContainer_10_4, this._NG_VALIDATORS_17_5, null, this._NG_VALUE_ACCESSOR_17_6);
        this._NgControl_17_8 = this._NgModel_17_7.context;
        this._NgControlStatus_17_9 = new import13.Wrapper_NgControlStatus(this._NgControl_17_8);
        this._text_18 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_19 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Password', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_20, 'input', new import3.InlineArray8(8, 'class', 'form-control', 'name', 'password', 'required', '', 'type', 'password'), null);
        this._DefaultValueAccessor_25_3 = new import14.Wrapper_DefaultValueAccessor(this.renderer, new import19.ElementRef(this._el_25));
        this._RequiredValidator_25_4 = new import15.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_25_5 = [this._RequiredValidator_25_4.context];
        this._NG_VALUE_ACCESSOR_25_6 = [this._DefaultValueAccessor_25_3.context];
        this._NgModel_25_7 = new import16.Wrapper_NgModel(this._ControlContainer_10_4, this._NG_VALIDATORS_25_5, null, this._NG_VALUE_ACCESSOR_25_6);
        this._NgControl_25_8 = this._NgModel_25_7.context;
        this._NgControlStatus_25_9 = new import13.Wrapper_NgControlStatus(this._NgControl_25_8);
        this._text_26 = this.renderer.createText(this._el_20, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'text-xs-center'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'button', new import3.InlineArray4(4, 'class', 'btn btn-secondary', 'routerLink', '/'), null);
        this._RouterLink_30_3 = new import17.Wrapper_RouterLink(this.parentView.injectorGet(import8.Router, this.parentIndex), this.parentView.injectorGet(import20.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import21.LocationStrategy, this.parentIndex));
        this._text_31 = this.renderer.createText(this._el_30, 'Go back', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_28, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'submit'), null);
        this._text_34 = this.renderer.createText(this._el_33, 'Log In', null);
        this._text_35 = this.renderer.createText(this._el_28, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_8, '\n', null);
        this._text_38 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_10));
        this._NgForm_10_3.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_17));
        this._NgModel_17_7.subscribe(this, this.eventHandler(this.handleEvent_17), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_25, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_25));
        this._NgModel_25_7.subscribe(this, this.eventHandler(this.handleEvent_25), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_30));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._text_38
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_AuthComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import22.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import23.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3.context;
        }
        if (((token === import24.RequiredValidator) && (17 === requestNodeIndex))) {
            return this._RequiredValidator_17_4.context;
        }
        if (((token === import25.NG_VALIDATORS) && (17 === requestNodeIndex))) {
            return this._NG_VALIDATORS_17_5;
        }
        if (((token === import26.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_6;
        }
        if (((token === import27.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_7.context;
        }
        if (((token === import28.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_8;
        }
        if (((token === import29.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_9.context;
        }
        if (((token === import23.DefaultValueAccessor) && (25 === requestNodeIndex))) {
            return this._DefaultValueAccessor_25_3.context;
        }
        if (((token === import24.RequiredValidator) && (25 === requestNodeIndex))) {
            return this._RequiredValidator_25_4.context;
        }
        if (((token === import25.NG_VALIDATORS) && (25 === requestNodeIndex))) {
            return this._NG_VALIDATORS_25_5;
        }
        if (((token === import26.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_25_6;
        }
        if (((token === import27.NgModel) && (25 === requestNodeIndex))) {
            return this._NgModel_25_7.context;
        }
        if (((token === import28.NgControl) && (25 === requestNodeIndex))) {
            return this._NgControl_25_8;
        }
        if (((token === import29.NgControlStatus) && (25 === requestNodeIndex))) {
            return this._NgControlStatus_25_9.context;
        }
        if (((token === import30.RouterLink) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._RouterLink_30_3.context;
        }
        if (((token === import31.NgForm) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._NgForm_10_3.context;
        }
        if (((token === import32.ControlContainer) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._ControlContainer_10_4;
        }
        if (((token === import29.NgControlStatusGroup) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._NgControlStatusGroup_10_5.context;
        }
        return notFoundResult;
    };
    View_AuthComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = (this.context.errorMessage != null);
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._NgForm_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatusGroup_10_5.ngDoCheck(this, this._el_10, throwOnChange);
        this._DefaultValueAccessor_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_1_0 = '';
        this._RequiredValidator_17_4.check_required(currVal_17_1_0, throwOnChange, false);
        this._RequiredValidator_17_4.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_2_0 = 'username';
        this._NgModel_17_7.check_name(currVal_17_2_0, throwOnChange, false);
        var currVal_17_2_1 = this.context.username;
        this._NgModel_17_7.check_model(currVal_17_2_1, throwOnChange, false);
        this._NgModel_17_7.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatus_17_9.ngDoCheck(this, this._el_17, throwOnChange);
        this._DefaultValueAccessor_25_3.ngDoCheck(this, this._el_25, throwOnChange);
        var currVal_25_1_0 = '';
        this._RequiredValidator_25_4.check_required(currVal_25_1_0, throwOnChange, false);
        this._RequiredValidator_25_4.ngDoCheck(this, this._el_25, throwOnChange);
        var currVal_25_2_0 = 'password';
        this._NgModel_25_7.check_name(currVal_25_2_0, throwOnChange, false);
        var currVal_25_2_1 = this.context.password;
        this._NgModel_25_7.check_model(currVal_25_2_1, throwOnChange, false);
        this._NgModel_25_7.ngDoCheck(this, this._el_25, throwOnChange);
        this._NgControlStatus_25_9.ngDoCheck(this, this._el_25, throwOnChange);
        var currVal_30_0_0 = '/';
        this._RouterLink_30_3.check_routerLink(currVal_30_0_0, throwOnChange, false);
        this._RouterLink_30_3.ngDoCheck(this, this._el_30, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_10_5.checkHost(this, this, this._el_10, throwOnChange);
        this._RequiredValidator_17_4.checkHost(this, this, this._el_17, throwOnChange);
        this._NgControlStatus_17_9.checkHost(this, this, this._el_17, throwOnChange);
        this._RequiredValidator_25_4.checkHost(this, this, this._el_25, throwOnChange);
        this._NgControlStatus_25_9.checkHost(this, this, this._el_25, throwOnChange);
    };
    View_AuthComponent0.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
        this._NgModel_17_7.ngOnDestroy();
        this._NgModel_25_7.ngOnDestroy();
        this._NgForm_10_3.ngOnDestroy();
    };
    View_AuthComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_AuthComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    View_AuthComponent0.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_10_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.authenticate(this._NgForm_10_3.context) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AuthComponent0.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.username = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AuthComponent0.prototype.handleEvent_25 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_25_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.password = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AuthComponent0.prototype.handleEvent_30 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_30_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AuthComponent0;
}(import1.AppView));
exports.View_AuthComponent0 = View_AuthComponent0;
var View_AuthComponent1 = (function (_super) {
    __extends(View_AuthComponent1, _super);
    function View_AuthComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AuthComponent1, renderType_AuthComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import6.UNINITIALIZED;
    }
    View_AuthComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'bg-danger m-t-1 p-a-1 text-xs-center'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AuthComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '\n    ', this.parentView.context.errorMessage, '\n');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AuthComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AuthComponent1;
}(import1.AppView));
