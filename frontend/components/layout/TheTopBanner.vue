<template>
  <section>
    <v-parallax
      :src="require(`~/assets/vbanner.jpg`)"
      height="400"
      dark
    >
      <v-layout
        wrap
        align-center
        justify-center
        class="white--text"
      >
        <v-flex text-right class="mr-5">
          <img src="~/assets/icon.png" alt="doccano" height="200">
        </v-flex>
        <v-flex>
          <h1 class="mb-2 display-1 text-xs-center">
            {{ $t('home.mainTitle') }}
          </h1>
          <div class="mt-4">
            <p>Login credentials are defined in your deployment.</p>
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>
  </section>
</template>
