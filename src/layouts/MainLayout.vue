<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-yellow-10 text-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Pizza's
          <q-btn
            dense
            color="yellow-9"
            round
            icon="shopping_cart"
            class="q-ml-md"
          >
            <q-badge color="green" floating>{{ cart.length }}</q-badge>
          </q-btn>
        </q-toolbar-title>

        <div>Welcome</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
        <q-item clickable v-ripple>
          <q-item-section avatar
            >Home
            <q-icon color="primary" name="home" class="Home-icon" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar
            >Meus Pedidos
            <q-icon
              color="primary"
              name="format_list_bulleted"
              class="Wish-list"
            />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar
            >Conta
            <q-icon
              color="primary"
              name="account_circle"
              class="Account-icon"
            />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar
            >Configurações
            <q-icon
              color="primary"
              name="manage_accounts"
              class="Config-icon"
            />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar
            >Ajuda
            <q-icon color="primary" name="contact_support" class="Help-icon" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import cartStore from "src/stores/cartStore";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      EssentialLink: linksList,
      cart: cartStore.carrinho,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
