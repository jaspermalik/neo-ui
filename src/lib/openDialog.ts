import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = ({
  title,
  content,
  ok,
  cancel,
  closeOnClickOverlay = true,
}) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newValue) => {
            if (newValue === false) {
              close();
            }
          },
          ok,
          cancel,
          closeOnClickOverlay,
        },
        {
          title: () => h("div", title),
          content: () => h("div", content),
        }
      );
    },
  });
  app.mount(div);
};
