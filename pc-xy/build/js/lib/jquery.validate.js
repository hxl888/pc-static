!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return void(e&&e.debug&&window.console);var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click change",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function r(){var r,n;return!i.settings.submitHandler||(i.submitButton&&(r=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),n=i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&r.remove(),void 0!==n&&n)}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,r()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):r():(i.focusInvalid(),!1)})),i)},valid:function(){var e,i;return t(this[0]).is("form")?e=this.validate().form():(e=!0,i=t(this[0].form).validate(),this.each(function(){e=i.element(this)&&e})),e},removeAttrs:function(e){var i={},r=this;return t.each(e.split(/\s/),function(t,e){i[e]=r.attr(e),r.removeAttr(e)}),i},rules:function(e,i){var r,n,s,a,o,u,d=this[0];if(e)switch(r=t.data(d.form,"validator").settings,n=r.rules,s=t.validator.staticRules(d),e){case"add":t.extend(s,t.validator.normalizeRule(i)),delete s.messages,n[d.name]=s,i.messages&&(r.messages[d.name]=t.extend(r.messages[d.name],i.messages));break;case"remove":return i?(u={},t.each(i.split(/\s/),function(e,i){u[i]=s[i],delete s[i],"required"===i&&t(d).removeAttr("aria-required")}),u):(delete n[d.name],s)}return a=t.validator.normalizeRules(t.extend({},t.validator.classRules(d),t.validator.attributeRules(d),t.validator.dataRules(d),t.validator.staticRules(d)),d),a.required&&(o=a.required,delete a.required,a=t.extend({required:o},a),t(d).attr("aria-required","true")),a.remote&&(o=a.remote,delete a.remote,a=t.extend(a,{remote:o})),a}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(new RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){9===e.which&&""===this.elementValue(t)||(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},onchange:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,r){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(r):t(e).addClass(i).removeClass(r)},unhighlight:function(e,i,r){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(r):t(e).removeClass(i).addClass(r)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),r="on"+e.type.replace(/^validate/,""),n=i.settings;n[r]&&!this.is(n.ignore)&&n[r].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i,r=this.groups={};t.each(this.settings.groups,function(e,i){"string"==typeof i&&(i=i.split(/\s/)),t.each(i,function(t,i){r[i]=e})}),i=this.settings.rules,t.each(i,function(e,r){i[e]=t.validator.normalizeRule(r)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",e).validateDelegate("select, option, [type='radio'], [type='checkbox']","click change",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){var i=this.clean(e),r=this.validationTargetFor(i),n=!0;return this.lastElement=r,void 0===r?delete this.invalid[i.name]:(this.prepareElement(r),this.currentElements=t(r),n=this.check(r)!==!1,n?delete this.invalid[r.name]:this.invalid[r.name]=!0),t(e).attr("aria-invalid",!n),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),n},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid").showMsg(0)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console,!(this.name in i||!e.objectLength(t(this).rules()))&&(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i,r=t(e),n=e.type;return"radio"===n||"checkbox"===n?t("input[name='"+e.name+"']:checked").val():"number"===n&&"undefined"!=typeof e.validity?!e.validity.badInput&&r.val():(i=r.val(),"string"==typeof i?i.replace(/\r/g,""):i)},check:function(e){e=this.validationTargetFor(this.clean(e));var i,r,n,s=t(e).rules(),a=t.map(s,function(t,e){return e}).length,o=!1,u=this.elementValue(e);for(r in s){n={method:r,parameters:s[r]};try{if(i=t.validator.methods[r].call(this,u,e,n.parameters),"dependency-mismatch"===i&&1===a){o=!0;continue}if(o=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!i)return this.formatAndAdd(e,n),!1}catch(d){throw this.settings.debug&&window.console,d}}if(!o)return this.objectLength(s)&&this.successList.push(e),!0},customDataMessage:function(e,i){return t(e).data("msg"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase())||t(e).data("msg")},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var r=this.defaultMessage(e,i.method),n=/\$?\{(\d+)\}/g;"function"==typeof r?r=r.call(this,i.parameters,e):n.test(r)&&(r=t.validator.format(r.replace(n,"{$1}"),i.parameters)),this.errorList.push({message:r,element:e,method:i.method}),this.errorMap[e.name]=r,this.submitted[e.name]=r},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e,i;for(t=0;this.errorList[t];t++)i=this.errorList[t],this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){t(e).showMsg({i:1,msg:i});var r,n,s,a=this.errorsFor(e),o=this.idOrName(e),u=t(e).attr("aria-describedby");a.length?(a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),a.html(i)):(a=t("<"+this.settings.errorElement+">").attr("id",o+"-error").addClass(this.settings.errorClass).html(i||""),r=a,this.settings.wrapper&&(r=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),a.is("label")?a.attr("for",o):0===a.parents("label[for='"+o+"']").length&&(s=a.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),u?u.match(new RegExp("\\b"+s+"\\b"))||(u+=" "+s):u=s,t(e).attr("aria-describedby",u),n=this.groups[e.name],n&&t.each(this.groups,function(e,i){i===n&&t("[name='"+e+"']",this.currentForm).attr("aria-describedby",a.attr("id"))}))),!i&&this.settings.success&&(a.text(""),"string"==typeof this.settings.success?a.addClass(this.settings.success):this.settings.success(a,e)),this.toShow=this.toShow.add(a)},errorsFor:function(e){var i=this.idOrName(e),r=t(e).attr("aria-describedby"),n="label[for='"+i+"'], label[for='"+i+"'] *";return r&&(n=n+", #"+r.replace(/\s+/g,", #")),this.errors().filter(n)},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name)),t(e).not(this.settings.ignore)[0]},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return!this.dependTypes[typeof t]||this.dependTypes[typeof t](t,e)},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},r=t(e).attr("class");return r&&t.each(r.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i,r,n={},s=t(e),a=e.getAttribute("type");for(i in t.validator.methods)"required"===i?(r=e.getAttribute(i),""===r&&(r=!0),r=!!r):r=s.attr(i),/min|max/.test(i)&&(null===a||/number|range|text/.test(a))&&(r=Number(r)),r||0===r?n[i]=r:a===i&&"range"!==a&&(n[i]=!0);return n.maxlength&&/-1|2147483647|524288/.test(n.maxlength)&&delete n.maxlength,n},dataRules:function(e){var i,r,n={},s=t(e);for(i in t.validator.methods)r=s.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()),void 0!==r&&(n[i]=r);return n},staticRules:function(e){var i={},r=t.data(e.form,"validator");return r.settings.rules&&(i=t.validator.normalizeRule(r.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(r,n){if(n===!1)return void delete e[r];if(n.param||n.depends){var s=!0;switch(typeof n.depends){case"string":s=!!t(n.depends,i.form).length;break;case"function":s=n.depends.call(i,i)}s?e[r]=void 0===n.param||n.param:delete e[r]}}),t.each(e,function(r,n){e[r]=t.isFunction(n)?n(i):n}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].replace(/[\[\]]/g,"").split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(null!=e.min&&null!=e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),null!=e.minlength&&null!=e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,r){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==r?r:t.validator.messages[e],i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,r){if(!this.depend(r,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var n=t(i).val();return n&&n.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(e,i){return e=t.trim(e),this.optional(i)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i,r,n=0,s=0,a=!1;if(t=t.replace(/\D/g,""),t.length<13||t.length>19)return!1;for(i=t.length-1;i>=0;i--)r=t.charAt(i),s=parseInt(r,10),a&&(s*=2)>9&&(s-=9),n+=s,a=!a;return n%10===0},minlength:function(e,i,r){var n=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||n>=r},maxlength:function(e,i,r){var n=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||n<=r},rangelength:function(e,i,r){var n=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||n>=r[0]&&n<=r[1]},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||t<=i},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},equalTo:function(e,i,r){var n=t(r);return this.settings.onfocusout&&n.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===n.val()},remote:function(e,i,r){if(this.optional(i))return"dependency-mismatch";var n,s,a=this.previousValue(i);return this.settings.messages[i.name]||(this.settings.messages[i.name]={}),a.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=a.message,r="string"==typeof r&&{url:r}||r,a.old===e?a.valid:(a.old=e,n=this,this.startRequest(i),s={},s[i.name]=e,t.ajax(t.extend(!0,{url:r,mode:"abort",port:"validate"+i.name,dataType:"json",data:s,context:n.currentForm,success:function(r){var s,o,u,d=r===!0||"true"===r;n.settings.messages[i.name].remote=a.originalMessage,d?(u=n.formSubmitted,n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()):(s={},o=r||n.defaultMessage(i,"remote"),s[i.name]=a.message=t.isFunction(o)?o(e):o,n.invalid[i.name]=!0,n.showErrors(s)),a.valid=d,n.stopRequest(i,d)}},r)),"pending")}}}),t.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var e,i={};t.ajaxPrefilter?t.ajaxPrefilter(function(t,e,r){var n=t.port;"abort"===t.mode&&(i[n]&&i[n].abort(),i[n]=r)}):(e=t.ajax,t.ajax=function(r){var n=("mode"in r?r:t.ajaxSettings).mode,s=("port"in r?r:t.ajaxSettings).port;return"abort"===n?(i[s]&&i[s].abort(),i[s]=e.apply(this,arguments),i[s]):e.apply(this,arguments)}),t.extend(t.fn,{validateDelegate:function(e,i,r){return this.bind(i,function(i){var n=t(i.target);if(n.is(e))return r.apply(n,arguments)})}})}),$(function(){function t(t){var n,s=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1),a=new Array("1","0","X","9","8","7","6","5","4","3","2"),o=new Array,u=0,d=t.length,l=t;if(15!=d&&18!=d)return!1;for(i=0;i<d;i++){if(o[i]=l.charAt(i),(o[i]<"0"||o[i]>"9")&&17!=i)return!1;i<17&&(o[i]=o[i]*s[i])}if(18==d){var h=l.substring(6,14);if(0==r(h))return!1;for(i=0;i<17;i++)u+=o[i];if(n=a[u%11],o[17]!=n)return!1}else{var c=l.substring(6,12);if(0==e(c))return!1}return!0}function e(t){if(!/^[0-9]{6}$/.test(t))return!1;var e,i;return e=t.substring(0,4),i=t.substring(4,6),!(e<1700||e>2500)&&!(i<1||i>12)}function r(t){if(!/^[0-9]{8}$/.test(t))return!1;var e,i,r;e=t.substring(0,4),i=t.substring(4,6),r=t.substring(6,8);var n=[31,28,31,30,31,30,31,31,30,31,30,31];return!(e<1700||e>2500)&&((e%4==0&&e%100!=0||e%400==0)&&(n[1]=29),!(i<1||i>12)&&!(r<1||r>n[i-1]))}$.format=$.validator.format,$.validator.addMethod("mechanismNo",function(t,e){return this.optional(e)||/^[0-9\-]{12,30}$/.test(t)},"组织机构代码只能为数字加-，且长度为11位"),$.validator.addMethod("chinese",function(t,e){return this.optional(e)||/^[\u4e00-\u9faf]+$/.test(t)},"请输入汉字"),$.validator.addMethod("uclowerAndNum",function(t,e){return this.optional(e)||/^[A-Z0-9]{14,30}$/.test(t)},"大写字母和数字"),$.validator.addMethod("alpha_numeric",function(t,e){return this.optional(e)||/^[A-Za-z0-9]+$/.test(t)},"请使用字母和数字组合！"),$.validator.addMethod("rname",function(t,e){return this.optional(e)||/^[^`~!@#$%^&*()+=|\\\][\]\{\}:;'\,.<>\/?]{1}[^`~!@$%^&()+=|\\\][\]\{\}:;'\,.<>?]{0,19}$/.test(t)},"请输入正确真实姓名！"),$.validator.addMethod("p_number",function(t,e){return this.optional(e)||/^\d+(\.\d+)?$/.test(t)},"请输入正确格式的数值！"),$.validator.addMethod("bankcard",function(t,e){return this.optional(e)||/^\d+[-]?\d+$/.test(t)},"请输入正确的银行卡号！"),$.validator.addMethod("exclude",function(t,e,i){return this.optional(e)||t!=i},"请选择一个选项"),$.validator.addMethod("attachTo",function(t,e,i){var r=$(i).val();return $.trim(t).length>0||$.trim(r).length>0},"请至少填写其中一项"),$.validator.addMethod("maxto",function(t,e,i){return this.optional(e)||parseFloat(t)<=parseFloat($(i).val())},"输入数值过大"),$.validator.addMethod("minto",function(t,e,i){return this.optional(e)||parseFloat(t)>=parseFloat($(i).val())},"输入数值过小"),$.validator.addMethod("images",function(t,e){var i=".jpg.jpeg.gif.bmp.png.";return this.optional(e)||i.indexOf("."+t.substring(t.lastIndexOf(".")+1).toLowerCase()+".")!=-1},"图片格式不正确"),$.validator.addMethod("compress",function(t,e){var i=".zip.rar.";return this.optional(e)||i.indexOf("."+t.substring(t.lastIndexOf(".")+1).toLowerCase()+".")!=-1},"压缩文件格式不正确"),$.validator.addMethod("favicon",function(t,e){var i=".ico.";return this.optional(e)||i.indexOf("."+t.substring(t.lastIndexOf(".")+1).toLowerCase()+".")!=-1},"图标格式不正确"),$.validator.addMethod("video",function(t,e){var i=".flv.";return this.optional(e)||i.indexOf("."+t.substring(t.lastIndexOf(".")+1).toLowerCase()+".")!=-1},"视频格式不正确"),$.validator.addMethod("phone",function(t,e){return this.optional(e)||/^\d{3,4}-\d{3,8}(-\d{3,4})?$/.test(t)},"请输入正确的电话号码，带区号"),$.validator.addMethod("telephone",function(t,e){return this.optional(e)||/^1\d{10}$/.test(t)},"请输入正确的手机号码"),$.validator.addMethod("istel",function(t,e){return this.optional(e)||/^\d{3,4}-\d{3,8}(-\d{3,4})?$/.test(t)||/^1\d{10}$/.test(t)},"请输入正确的联系方式"),$.validator.addMethod("idCart",function(t,e){return this.optional(e)||/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}|\d{3}[Xx]$/.test(t)},"请输入正确的身份证号码"),$.validator.addMethod("zipCode",function(t,e){return this.optional(e)||/^[0-9]{6}$/.test(t)},"请输入正确的邮政编码"),$.validator.addMethod("accept",function(t,e,i){var r,n,s,a="string"==typeof i?i.replace(/\s/g,"").replace(/,/g,"|"):"image/*",o=this.optional(e),u=!0;if(o)return o;if("file"===$(e).attr("type")){if(a=a.replace(/\*/g,".*"),s=new RegExp(".?("+a+")$","i"),KUI.browser&&"Msie"==KUI.browser)if(""!=t&&t.lastIndexOf(".")!=-1){var d=t.substring(t.lastIndexOf(".")+1,t.length);u=d.match(s)}else u=!1;else if(e.files&&e.files.length)for(r=0;r<e.files.length;r++)n=e.files[r],n.type.match(s)||(u=!1)}else u=!1;return u},jQuery.format("请选择正确的上传文件类型")),$.validator.addMethod("extension",function(t,e,i){return i="string"==typeof i?i.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(e)||t.match(new RegExp(".("+i+")$","i"))},"文件格式不正确"),$.validator.addMethod("decimal",function(t,e){return this.optional(e)||t.indexOf(".")>0&&t.substring(t.indexOf(".")).length<=3||t.indexOf(".")==-1},"金额保留两位小数"),$.validator.addMethod("cardNo",function(e,i){return this.optional(i)||t(e)},"请输入正确的身份证号"),$.validator.addMethod("certifies",function(t,e){return this.optional(e)||/^[a-zA-Z\d]{8}\-[a-zA-Z\d]$/.test(t)},"请输入正确的组织机构代码"),$.validator.addMethod("passwordLevel",function(t,e){function r(t){return t>=48&&t<=57?1:t>=97&&t<=122||t>=65&&t<=90?4:8}function n(t){for(modes=0,i=0;i<4;i++)1&t&&modes++,t>>>=1;return modes}var s=0,a=0;for(i=0;i<t.length;i++)a|=r(t.charCodeAt(i));return s=n(a),!(s<2)},$.validator.format("请输入字母加数字或字符至少两种以上组合的6-20位密码")),$.validator.setDefaults({success:function(t,e){$(e).showMsg(2)}})}),$.fn.extend({showMsg:function(t){return this.each(function(){var e,i=$(this),r=this.type,n=i.data("msgList"),s=t?"number"==typeof t?t:t.i:0,a=i.attr("validate-ele-id");"undefined"==typeof n&&(n="undefined"==typeof a||""==a?("radio"===r||"checkbox"===r?i.parent():i).nextAll(".u-msg").children():$("#"+a).children(),i.data("msgList",n)),e=$(this).parents(".validate-parent").find(".u-msg li").removeClass("active").eq(s).addClass("active"),"object"==typeof t&&"string"==typeof t.msg&&e.find("span").html(t.msg)})}});