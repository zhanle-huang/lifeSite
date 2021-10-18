export const validateName = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('用户名不能为空'));
    } else {
        callback();
    }
};
export const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
    }
};
export const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};
export const validatePhone = (rule, value, callback) => {
    var reg = /^1[3456789]\d{9}$/;
    console.log(value, reg.test(value))
    if (value === '') {
        callback(new Error('请输入手机号'));
    } else if (!reg.test(value)) {
        callback(new Error('手机号码格式不正确'));
    } else {
        callback();
    }
};
export const validateVerification = (rule, value, callback) => {
    console.log(value)
    if (!value) {
        return callback(new Error('验证码不能为空'));
    } else {
        callback();
    }
};