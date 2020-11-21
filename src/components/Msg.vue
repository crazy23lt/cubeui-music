<template>
  <div class="msg">
    <transition name="fade">
      <div class="main wrapper" v-if="flag">
        <cube-scroll
          ref="scroll"
          :scroll-events="['scroll']"
          @scroll="handlerScroll"
        >
          此乃个人信息页
          <cube-button :inline="true" @click="handlerClose">关闭</cube-button>
        </cube-scroll>
      </div>
    </transition>
  </div>
</template>

<script>
import { BetterScroll } from "cube-ui";
export default {
  name: "Msg",
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    handlerClose() {
      this.flag = false;
      this.timer = setTimeout(() => {
        this.$emit("close");
      }, 500);
    },
    handlerScroll() {
      // const scroll = this.$refs.scroll;
      // let bs = new BetterScroll(scroll, {});
      // console.info(scroll.movingDirectionX);
      // console.info(scroll.directionX);
      // console.info(scroll);
      let bs = new BetterScroll(".wrapper", {});
      console.info(bs);
      // const hooks = bs.scroller.actionsHandler.hooks;
      // hooks.on("beforeStart", (event) => {
      //   console.log(event.target);
      // });
      // hooks.on("start", (event) => {
      //   console.log(event.target);
      // });
      // hooks.on("move", ({ deltaX, deltaY, e }) => {
      //   console.log(deltaX, deltaY, e);
      // });
      // hooks.on("end", (event) => {
      //   console.log(event.target);
      // });
    },
  },
  mounted() {
    this.flag = true;
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="less" scoped>
.msg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  .main {
    width: 90vw;
    height: 100vh;
    background-color: chartreuse;
  }
}
/* 定义过度动画 fade为过渡动画的名字*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(-100%);
}
</style>
