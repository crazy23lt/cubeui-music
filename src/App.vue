<template>
  <div id="app" class="themea">
    <!-- 头部导航 -->
    <div class="head-nav">
      <div class="btn">
        <cube-button :inline="true" @click="handlerMsg">Msg</cube-button>
      </div>
      <ul class="nav-group">
        <li class="nav-item" v-for="(item, index) in navGroup" :key="index">
          <div class="nav-cont" @click="changeColor(item.command)">
            {{ item.name }}
          </div>
        </li>
      </ul>
      <div class="btn">
        <cube-button :inline="true">Search</cube-button>
      </div>
    </div>
    <!-- 主页轮播组件 -->
    <cube-slide
      direction="horizontal"
      ref="slide"
      :auto-play="false"
      :loop="false"
    >
      <cube-slide-item>
        <div class="page">
          <div>
            <cube-scroll
              ref="scroll"
              :data="items"
              direction="horizontal"
              class="horizontal-scroll-list-wrap"
              nest-mode="free"
              :options="scroll_options"
              :scroll-events="['scroll']"
              @scroll="s"
            >
              <ul class="list-wrapper">
                <li
                  v-for="(item, index) in items"
                  class="list-item"
                  v-bind:key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </cube-scroll>
          </div>
        </div>
      </cube-slide-item>
      <cube-slide-item>
        <div class="page">
          <div>
            <cube-scroll
              ref="scroll"
              :data="items"
              direction="horizontal"
              class="horizontal-scroll-list-wrap"
              nest-mode="free"
              :options="scroll_options"
              :scroll-events="['scroll']"
              @scroll="s"
            >
              <ul class="list-wrapper">
                <li
                  v-for="(item, index) in items"
                  class="list-item"
                  v-bind:key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </cube-scroll>
          </div>
        </div>
      </cube-slide-item>
      <cube-slide-item>
        <div class="page">
          Page C
        </div>
      </cube-slide-item>
      <cube-slide-item>
        <div class="page">
          Page D
        </div>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navGroup: [
        { name: "我的", command: "a" },
        { name: "发现", command: "b" },
        { name: "云村", command: "c" },
        { name: "视频", command: "a" },
      ],
      items: ["nav1", "nav2", "nav3", "nav4", "nav5", "nav6", "nav7"],
      scroll_options: {
        bounce: false,
      },
    };
  },
  methods: {
    changeColor(command) {
      document.getElementById("app").className = "theme" + command;
    },
    s({ x }) {
      let { slide } = this.$refs.slide;
      let { scroll } = this.$refs.scroll;
      slide.disable();
      if (scroll.maxScrollX === x || x === 0) {
        slide.enable();
      }
    },
    handlerMsg() {
      // 点击头部的时候通过调用API组件的方式显示头部详情
      // $create+HeaderDetail
      const msg =
        msg ||
        this.$createMsg({
          // 配置参数$props
          // 是父组件向子组件传递数据，类似于直接在组件中绑定属性传值
          $events: {
            close() {
              msg.remove();
            },
          },
        });
      // 还可以调用API组件中的show()方法
      msg.show();
    },
  },
};
</script>
<style lang="less">
@import url(./assets/theme/color.less);
.head-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-group {
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .nav-item {
    flex-grow: 1;
    .nav-cont {
      width: 100%;
      height: 100px;
      text-align: center;
      font-size: 50px;
      line-height: 100px;
    }
  }
}
.page {
  height: 100vh;
}
.horizontal-scroll-list-wrap {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .cube-scroll-content {
    display: inline-block;
  }
  .list-wrapper {
    padding: 0 10px;
    line-height: 60px;
    white-space: nowrap;
  }
  .list-item {
    display: inline-block;
    width: 500px;
    height: 200px;
    text-align: center;
    line-height: 200px;
  }
}
</style>
