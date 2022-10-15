import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    const refCount = ref(0)
    const countAdd = () => {
      refCount.value++
    }
    return () => (
      <>
        <div>{refCount.value}</div>
        <div>
          <button onClick={countAdd}>+1</button>
        </div>
      </>
    )
  }
})
