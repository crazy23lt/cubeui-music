// 导入 createAPI 模块
import { createAPI } from "cube-ui";
// 导入Vue
import Vue from "vue";
// 导入需要注册的组件
import Msg from "../components/Msg.vue";

// 将 HeaderDetail 组件注册为全局API模式调用
createAPI(Vue, Msg, ["close"], true);
