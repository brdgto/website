<template>
  <main>
    <HomeIntro />
    <!-- <HomeOpenCallBanner /> -->
    <!-- <Kickstarter /> -->
    <HomeAbout />
    <HomeObservatory />
    <HomeSpace />
    <!-- <HomeOurInitiatives /> -->
    <!-- <HomeInsta /> -->
    <!-- <HomeApply /> -->
    <!-- <HomeResidents /> -->
    <!-- <HomeStudioMembers /> -->
    <HomeFAQ />
    <HomePartners />
    <!-- <HomeWorkWithUs /> -->
    <HomeMailingList />
    <!-- <HomeTCU /> -->
    <HomeContact />
    <HomeFooter />
  </main>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

// useHead({
//   link: [
//     {
//       rel: 'stylesheet',
//       href: 'https://cdn-images.mailchimp.com/embedcode/classic-071822.css',
//     },
//   ],
//   script: [
//     {
//       src: 'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
//       type: 'text/javascript',
//     },
//   ],
// })
</script>

<style lang="scss" scoped>
main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--accent);
}
</style>
