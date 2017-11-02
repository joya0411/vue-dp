<template>
  <div>
    <div class="item-container">
      <div class="pic">
        <img v-lazy="item.img">
      </div>
      <div class="content">
        <p>商户:<span>{{item.title}}</span></p>
        <p>数量:<span>{{item.count}}</span></p>
        <p>价格:<span>{{item.price}}</span></p>
      </div>
      <div class="btn" :class="[commentCls]" @click="clickComment">{{commentTxt}}</div>
    </div>
    <div class="comment-text-container" v-show="item.commentState===1">
      <textarea class="comment-text" ref="commentText" v-model="commentDisc"></textarea>
      <star :star="star" @starClick="starClick"></star>
      <div class="btn-group">
        <div class="btn" @click="submitClick">提交</div>
        <div class="btn unseleted-btn" @click="cancelClick">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
  import Star from 'base/Star/Star'
  import axios from 'axios'
  import {ERR_OK} from 'common/config'
  export default {
    props: {
      item: {
        type: Object,
        default: {} // commentState  0-未评价 1-评价中 2-已评价(已评价)
      }
    },
    data() {
      return {
        star: 0,
        commentDisc: ''
      }
    },
    computed: {
      // 评价按钮文字
      commentTxt() {
        return this.item.commentState === 0 ? '评价' : this.item.commentState === 1 ? '评价中...' : '已评价'
      },
      // 评价按钮样式
      commentCls() {
        return this.item.commentState === 2 ? 'unseleted-btn' : ''
      }
    },
    methods: {
      // 点击星星
      starClick(index) {
        this.star = index + 1
      },
      // 点击评价
      clickComment() {
        if (this.item.commentState === 2) {
          return
        }
        this.item.commentState = 1
      },
      // 提交
      submitClick() {
        axios.post('/api/submitComment', {
          id: this.item.id,
          comment: this.commentDisc,
          star: this.star
        }).then(response => {
          if (response.status === ERR_OK) {
            this.item.commentState = 2
          }
        })
      },
      // 取消
      cancelClick() {
        this.item.commentState = 0
      }
    },
    components: {
      Star
    }
  }
</script>
<style scoped lang="sass">
.item-container {
  display:flex;
  align-items:flex-start;
}
.pic {
  width:96px;
  height:72px;
  margin-right:10px;
  img {
      width:100%;
      height: 100%;
      display: block;
  }
}
.content {
  flex:1;
  p {
      font-size:12px;
      line-height: 1.8;
      color:#666;
  }
}   
.btn {
  width:64px;
  height:28px;
  line-height:28px;
  font-size:12px;
  text-align: center;
  color:#fff;
  background: #f63;
  align-self:center;
}
.unseleted-btn {
    background: #999;
}
.comment-text-container {
  margin-top:10px;
  .comment-text {
      width:100%;
      resize:none;
      border:1px solid #e1e1e1;
      padding:10px;
      font-size:12px;
      line-height: 1.5;
      height:70px;
      box-sizing:border-box;
  }
  .btn-group {
    display:flex;
    justify-content:flex-end;
  }
  .btn {
      margin-right: 10px;
  }
  .btn:last-child{
      margin-right: 0;
  }
}
</style>