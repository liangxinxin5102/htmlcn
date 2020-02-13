jQuery.validator.addMethod("specialCharacters", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9_\u0391-\uFFE5][a-zA-Z0-9_\u0391-\uFFE5]+$/i.test(value);
}, "请输入合法字符！");
jQuery.validator.addMethod("phone", function (value, element) {
    return this.optional(element) || /^(13|14|15|16|17|18)\d{9}$/i.test(value);
}, "请输入正确手机号码！");