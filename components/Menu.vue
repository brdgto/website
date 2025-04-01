<template>
  <div
    v-if="!s.mobile.value"
    class="menu padleftsmall"
    :style="{
      display: s.windowScroll.value > 0 ? 'flex' : 'none',
    }"
  >
    <!-- <div class="bg"></div> -->
    <a href="#openCall" class="highlight">Open Call</a>
    <!-- <a href="#space">Space</a> -->
    <a href="#apply">Apply</a>
    <a href="#faq">FAQ</a>
    <!-- <a href="#workwithus">
      <template v-if="locale === 'ja'"> Recruit </template>
      <template v-else> Work with us! </template>
    </a> -->
  </div>
</template>

<script setup lang="ts">
import * as s from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
.menu {
  height: 4rem;
  position: relative;
  overflow: hidden;
  transition: all 0.2s;

  a {
    color: inherit;
    text-decoration: none;
    // font-weight: 600;
    font-size: 1rem;
    padding: 0 1em;
    color: var(--base-l2);
    display: flex;
    align-items: center;
    transition: all 0.2s;
    text-shadow: 0 0 0.5em var(--base-d);

    &.highlight {
      color: var(--primary);
    }

    &:hover {
      background: var(--base);
    }
  }
}
</style>
