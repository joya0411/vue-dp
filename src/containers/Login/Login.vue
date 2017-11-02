<template>
  <transition name="slide">
    <div class="page">
      <hd title="登录"></hd>
      <div class="login-container">
          <div class="login-container-inner">
              <div class="input-container">
                  <i class="icon-tablet"></i>
                  <div class="inputCon">
                    <input 
                        type="tel"
                        placeholder="请输入手机号"
                        v-model="telValue"
                    />
                  </div>
              </div>
              <div class="input-container">
                  <i class="icon-key"></i>
                  <div class="inputCon">
                    <input type="text" placeholder="输入验证码"/>
                  </div>
                  <button>发送验证码</button>
              </div>
              <button class="login-btn" @click="clickHandle">登录</button>
          </div>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
  import Hd from 'base/Hd/Hd'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        telValue: ''
      }
    },
    computed: {
      ...mapGetters([
        'tel'
      ])
    },
    methods: {
      clickHandle() {
        // 输入为空，返回
        if (this.telValue === '') {
          return
        }
        // 存入vuex中
        this.setUserInfo({
          tel: this.telValue
        })
        // 如果是收藏，不需要到用户中心页面
        if (this.$router.isSelect) {
          this.$router.back()
          return
        }
        this.goUserPage()
      },
      goUserPage() {
        this.$router.push({
          path: 'login/user'
        })
      },
      ...mapActions([
        'setUserInfo'
      ])
    },
    components: {
      Hd
    }
  }
</script>

<style scoped lang="sass">
.login-container {
    position: absolute;
    left:0;
    right:0;
    top:25%;
    padding:0 15px;
    .input-container {
        display:flex;
        align-items:center;
        height: 40px;
        width:100%;
        margin:10px 0;
        box-sizing:border-box;
        border:1px solid #f1f1f1;
        border-radius:5px;
        i {
          flex: 0 0 30px;
          color:#f63;
          text-align:center;
        }
        .inputCon {
          flex:1;
          height:100%;
          input {
            font-size:12px;
            height:100%;
            width:100%;
            border:0;
            padding-right:10px;
            box-sizing:border-box;
          }
        }
        button {
          flex:0 0 80px;
          right:0;
          top:0;
          line-height: 1.5;
          background:transparent;
          color:#f63;
          font-weight: bold;
          font-size:12px;
        }
    }
    .login-btn {
        width:100%;
        line-height:1.5;
        background: #f63;
        border-radius:5px;
        color:#fff;
        font-size:14px;
        height:40px;
    }
}
</style>