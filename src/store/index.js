// 模块一
import { defineStore } from "pinia";
const useInitialState = defineStore("initialState", {
  state: () => {
    return {
    };
  },
});





// 统一导出useStore方法
export default function useStore() {
  return {
    initialState: useInitialState(),
  };
}
