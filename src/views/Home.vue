<template>
  <div class="home">
    <section
      class="grid"
    >
      <div
        v-for="(item, i) in divNum"
        :key="i"
        :data-id="item"
        :class="`box${i}`"
        @mousedown="placeChild(i, 's')"
        @mouseup="placeChild(i, 'e')"
      >
        {{item}}
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { arr, templateRow, templateColumn } from './index';
export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const divNum = ref(arr);
    const columns = 5;
    const rows = 6;
    const child: any = {};
    let startIdx = 0;
    let endIdx = 30;
    const placeChild = (item: number, startend: string) => {
      child[`${startend}row`] = Math.ceil(item / columns);
      child[`${startend}col`] = item - (child[`${startend}row`] - 1) * columns;
      if (startend === 's') {
        startIdx = item;
      } else {
        endIdx = item;
        if (endIdx < startIdx) {
          // 从后往前移动
          let tempStartItem = divNum.value[startIdx];
          divNum.value.splice(startIdx, 1);
          divNum.value.splice(endIdx, 1, tempStartItem, divNum.value[endIdx]);
        } else if (endIdx > startIdx) {
          if (endIdx - startIdx === 1) {
            [divNum.value[startIdx], divNum.value[endIdx]] = [divNum.value[endIdx], divNum.value[startIdx]]
          }
          // 从前往后移动
          let tempEndItem = divNum.value[endIdx];
          divNum.value.splice(endIdx, 1, divNum.value[startIdx], tempEndItem);
          divNum.value.splice(startIdx, 1);
        }
      }
    }
    return {
      divNum,
      templateRow,
      templateColumn,
      startIdx,
      endIdx,
      placeChild
    }
  }
});
</script>
<style lang="less" scoped>
@keyframes bounce {
    from {
      transform: scale(1.06);
    }
    to {
      transform: scale(1);
    }
}
.grid {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(5, 1fr);
  row-gap: 10px;
}
div[class*="box"] {
  user-select: none;
  animation: bounce 2s;
  transform-origin: center bottom;
  color: #fff;
  background: rgb(1, 1, 1);
  width: 100px;
  height: 100px;
  border-radius: 10px;
  position: relative;
  cursor: move;
  z-index: 1000;
}
</style>
