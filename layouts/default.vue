<template>
  <div>
    <nav class="flexbetween z4">
      <div></div>
      <!-- <Logo class="logo" :collapse="true" /> -->
      <div
        class="pad flexcolumn"
        style="align-items: flex-end; gap: 0.5em"
      >
        <div class="flexverticalcenter menuBar">
          <div class="bg"></div>
          <Menu />
          <LangPicker />
          <Social />
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const head: Parameters<typeof useHead>[0] = {
  meta: [
    {
      hid: `content-language`,
      'http-equiv': 'content-language',
      content: locale.value === 'ja' ? 'ja-JP' : 'en-US',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content:
        locale.value === 'ja'
          ? 'アーバニスト, アーティスト, スタジオ, アトリエ, DIY, 都市, 建築, 京都'
          : 'residency, coworking, studio, japan, art, DIY, urbanism, gallery, exhibition, kyoto',
    },
    {
      hid: 'description',
      name: 'description',
      content: `A multifunctional space for critical makers.`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `A multifunctional space for critical makers.`,
    },
  ],
  script: [
    // {
    //   async: true,
    //   src: 'https://www.googletagmanager.com/gtag/js?id=UA-112989318-2',
    // },
    {
      src: 'https://umm.jasperstephenson.com/script.js',
      defer: true,
      'data-website-id':
        '0d7c5af3-67a0-478a-9eb5-2bf66a3a4d63',
    },
  ],
}
useHead(head)

// // get visitor ip location
// onMounted(async () => {
//   state.ipInfo.value =
//     ((await $fetch('https://ipapi.co/json/')) as any) ||
//     null
// })

// window resize watcher
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
  updateWindowWidth()
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
function updateWindowWidth() {
  state.winSize.value = [
    window.innerWidth,
    window.innerHeight,
  ]
}

// scroll watcher
onMounted(() => {
  window.addEventListener('scroll', updateScroll)
  updateScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
})
function updateScroll() {
  state.windowScroll.value = window.scrollY
}

// // mouse watcher
// onMounted(() => {
//   window.addEventListener('mousemove', updateMouse)
//   updateMouse()
// })
// onBeforeUnmount(() => {
//   window.removeEventListener('mousemove', updateMouse)
// })
// function updateMouse(e?: MouseEvent) {
//   if (e) {
//     state.mousePos.value = [e.clientX, e.clientY]
//   } else {
//     state.mousePos.value = [0, 0]
//   }
// }

onMounted(() => {
  if (state.dev.value) return
  // @ts-ignore
  window.dataLayer = window.dataLayer || []
  function gtag() {
    // @ts-ignore
    dataLayer.push(arguments)
  }
  // @ts-ignore
  gtag('js', new Date())
  // @ts-ignore
  gtag('config', 'UA-112989318-2')
})
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0em;
  width: 100%;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }

  .logo {
    width: 200px;
  }

  .menuBar {
    position: relative;
    backdrop-filter: blur(4px);

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--base-d);
      opacity: 0.5;
      z-index: -1;
    }
  }
}
</style>
