<template>
  <v-app>
    <TheAppBar @show-navigation="$refs.navigationDrawer.show()" />
    <TheNavigationDrawer ref="navigationDrawer" />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
