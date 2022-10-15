import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (<div>
      <RouterView></RouterView>
      <RouterLink to={`/`}>Bar</RouterLink> <br/>
      <RouterLink to={`/about`}>Foo</RouterLink>
    </div>)
  }
})
