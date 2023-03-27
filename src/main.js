import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";


const pinia = createPinia()

pinia.use((context) => {

    const storeId = context.store.$id

    const serializer = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
    }

    const fromStorage = serializer.deserialize(window.localStorage.getItem(storeId))

    if (fromStorage) {
        context.store.$patch(fromStorage)
    }

    context.store.$subscribe((mutation, state) => {
        window.localStorage.setItem(storeId, serializer.serialize(state))
    })
})

createApp(App)
.use(router)
.use(pinia)
.mount("#app");