<template>
	<div class="login">
        <div class="bg"></div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="phone">
                <el-input type="text" v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="toLogin">注册</el-button>
            </el-form-item>
        </el-form>
	</div>
</template>

<script>
    import { ref } from 'vue';
    import { validatePhone, validatePass } from '@/utils/common/rules.js';
	export default {
        setup() {
            // 获取验证码
            const getCode = () => {
                console.log('验证码');
            }
            return {
                time: ref(60),
                getCode
            }
        },
		data() {  //自定义规则
			return {
				ruleForm: {
					pass: '',
                    phone: ''
				},
				rules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
                    phone: [{
                    	validator: validatePhone,
                    	trigger: 'blur'
                    }]
				}
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
            // 跳转注册
            toLogin() {
                this.$router.push('/register');
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
	.login {
        height: 100%;
		overflow: hidden;
        .bg {
            position: absolute;
            z-index: -2;
            height: 100%;
            width: 100%;
            background: url(../assets/image/bg.jpg) repeat;
            filter: blur(5px);
        }
        .demo-ruleForm {
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
