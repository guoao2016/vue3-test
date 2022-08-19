import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <el-button>Default</el-button>
        {/* <Button shape="round" loading /> */}
        <a-button type="primary">Hello World</a-button>
        {/* <van-button type="primary">主要按钮</van-button> */}
        <h1>About</h1>
      </>
    );
  }
});