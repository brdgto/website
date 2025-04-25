<template>
  <section class="v5" id="observatory" ref="observatory">
    <div
      v-lazy:background-image="'/img/observatoryBg.jpg'"
      class="bg"
      :style="{
        backgroundPosition: `center calc(${
          scrollPosition * 0.7
        }px `,
      }"
    >
      <div class="contentcolumn">
        <img
          src="/img/observatoryLogo.png"
          alt="Observatory"
          class="observatoryLogo"
        />
        <div style="max-width: 400px">
          <div v-if="locale === 'ja'">
            Bridge
            Studioを拠点に活動する「都市エコロジー観測所
            （Observatory for Urban Ecologies）」は、
            文化人類学やデザインの研究者・実践者を中心とした活動体であり、
            都市におけるさまざまなエコロジーが私たちの生活にどのような影響を及ぼしているのかについて、
            DIY的に探索しています。
          </div>
          <div v-else>
            Bridge Studio is home to the Observatory for
            Urban Ecologies, a DIY public participation
            facility that explores the complex relationships
            that shape our lives in cities.
          </div>
          <a
            class="button martop"
            href="https://observatoryforurbanecologies.studio.site/"
            target="_blank"
          >
            <div>
              {{
                locale === 'ja'
                  ? '詳しくはこちら'
                  : 'Learn more'
              }}
              »
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const observatory = ref<HTMLElement | null>(null)
const scrollPosition = ref(0)

onMounted(() => {
  window.addEventListener('scroll', handleScroll, {
    passive: true,
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  if (observatory.value) {
    const rect = observatory.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    if (rect.top < viewportHeight && rect.bottom > 0) {
      scrollPosition.value = rect.top
    }
  }
}
</script>

<style lang="scss" scoped>
.contentcolumn {
  display: flex;
  align-items: center;
  gap: 6rem;
  color: var(--base-l2);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
}

.bg {
  // max-height: 800px;
  padding-top: 10vh;
  background-size: calc(max(130vw, 150vh));
  background-position: center center;
  background-attachment: fixed;
  margin-bottom: 0;

  @media (max-width: 768px) {
    max-height: auto;
    padding-top: 0;
    background-size: 250vh;
  }
}

.observatoryLogo {
  width: 100%;
}
</style>
