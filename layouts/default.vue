<template>
  <v-app>
    <v-toolbar color="elevation-0">
      <v-toolbar-title to="/">
         Portfolio
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- responsive for big-->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" flat >Works</v-btn>
        <v-btn to="/contact" flat>Contact</v-btn>
      </v-toolbar-items>
      <!-- responsive for small -->
      <v-toolbar-items class="hidden-sm-and-up">
          <v-btn to="/" flat>
            <v-icon >folder_open</v-icon>
          </v-btn>
          <v-btn to="/contact" flat>
            <v-icon to="/contact" >email</v-icon>
          </v-btn>

      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md >
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      router:{

      }

    }
  }
}
</script>

<style>

  .v-content{
    background:#f5f5f5;
  }
</style>
