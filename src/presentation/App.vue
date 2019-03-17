<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import router from "./routes";
import store from "./store/store";

@Component<App>({
  template: require("./views/layouts/base.html"),
  data: () => ({
    drawer: null
  }),
  router,
  store
})
export default class App extends Vue {
  homeHref = { name: "index" };
  aboutHref = { name: "about" };
  contactsHref =
    "https://docs.google.com/forms/d/e/1FAIpQLSdBrMncEtJ6NIjODL0U8tv28_8eHRop-yDw2jtb2hpgCg1l4g/viewform";
}
</script>
