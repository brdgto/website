<template>
  <div class="languagePicker flex padleftsmall">
    <span
      v-for="locale in i18n.locales.value as any[]"
      :key="locale.code"
    >
      <nuxt-link
        :to="switchLocalePath(locale.code)"
        class="smallcaps"
        :class="{
          current: i18n.locale.value === locale.code,
        }"
        >{{ locale.code }}</nuxt-link
      >
    </span>
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped>
.languagePicker {
  position: relative;
}
a {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  width: 2.5rem;
  height: 2rem;
  text-align: center;
  padding: 0 0.5em;
  background-color: var(--base-d);
  color: var(--base-l2);
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(.current):hover {
    background-color: var(--base);
  }

  &.current {
    background-color: var(--base-l2);
    color: var(--base-d);
  }
}
</style>
