<template>
	<div class="register">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="checkPhone">
                <el-input type="password" v-model="ruleForm.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="name">
                <el-input v-model.number="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>    
            <el-form-item class="verification" label="验证码" prop="checkVerification">
                <el-input type="password" v-model="ruleForm.verification" autocomplete="off"></el-input>
                <el-button @click="resetForm('ruleForm')">获取验证码</el-button>
                <el-button @click="resetForm('ruleForm')">{{time}}s后重新获取</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
	</div>
</template>

<script>
    import { ref } from 'vue';
	export default {
        setup() {
            const time = ref(60);
            return {
                time
            }
        },
		data() {  //自定义规则
			var checkAge = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('用户名不能为空'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
            var checkPhone = (rule, value, callback) => {
            	var reg = /^1[3456789]\d{9}$/;
            	console.log(reg.test(value))
            	if (value === '') {
            		callback(new Error('请输入手机号'));
            	} else if (reg.test(value)) {
            		callback(new Error('手机号码格式不正确'));
            	} else {
            		callback();
            	}
            };
            var checkVerification = (rule, value, callback) => {
            	if (!value) {
            		return callback(new Error('验证码不能为空'));
            	} else {
            		callback();
            	}
            };
			return {
				ruleForm: {
					pass: '',
					checkPass: '',
					name: '',
                    phone: '',
                    verification: '' 
				}
				// rules: {
				// 	pass: [{
				// 		validator: validatePass,
				// 		trigger: 'blur'
				// 	}],
				// 	checkPass: [{
				// 		validator: validatePass2,
				// 		trigger: 'blur'
				// 	}],
				// 	name: [{
				// 		validator: checkAge,
				// 		trigger: 'blur'
				// 	}]
				// }
			};
		},
		methods: {
			submitForm(formName) {  //提交注册
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						console.log(this.ruleForm)
						// var {status,message} = await axios.post('/myblok/register',this.ruleForm);
						// if(status === 0) {
						// 	this.loginErr('注册成功！');
						// 	this.$router.push('/login');
						// } else {
						// 	this.loginErr(message);
						// }
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			loginErr(msg) {  //提示信息
				const h = this.$createElement;
				console.log("sssa")
				this.$notify({
					duration: 1500,
					message: h('i', {
						style: 'color: red'
					}, msg)
				});
			},
			resetForm(formName) { //重置表单
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped lang="less">
	.register {
        height: 100%;
        background: url(../assets/image/bg.jpg) repeat;
		overflow: hidden;
        /deep/.demo-ruleForm {
            width: 500px;
            margin: 120px auto;
            background: rgba(255, 255, 255, .6);
            padding: 50px 60px 30px 0;
            border-radius: 8px;
        }
        .verification {
            /deep/.el-form-item__content {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            /deep/.el-input {
                width: 250px;
                margin-right: 15px;
            }
        }
	}
	.form_box {
		background-image: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1280325423,1024589167&fm=26&gp=0.jpg");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding: 80px 120px;
		padding-right: 220px;
	}
</style>
