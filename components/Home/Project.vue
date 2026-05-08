<template>
  <div class="project">
    <div class="images">
      <div
        class="smallImage"
        v-lazy:background-image="
          `/img/projects/${r.id}.jpg`
        "
        :alt="`Photo of project at Bridge Studio`"
      ></div>
      <div
        class="bigImage"
        v-lazy:background-image="
          `/img/projects/${r.id}2.jpg`
        "
        :alt="`Photo of project at Bridge Studio`"
      ></div>
    </div>

    <h2 class="name">{{ r.name }}</h2>

    <div class="description">
      <div class="marbottiny">
        {{
          locale === 'ja' ? r.descriptionJa : r.description
        }}
      </div>

      <span class="website" v-if="r.url">
        <a
          v-if="!Array.isArray(r.url)"
          :href="r.url"
          target="_blank"
          >Website</a
        >
        <template
          v-else
          v-for="(url, index) in r.url"
          :key="index"
        >
          <a :href="url" target="_blank"
            >Website {{ index + 1 }}</a
          >
          <span v-if="index < r.url.length - 1">, </span>
        </template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const props = defineProps<{
  r: ProjectData
}>()
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  width: 300px;
  max-width: 90vw;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // text-align: center;
  word-break: break-word;

  --imgWidth: 250px;
  --smallImageWidth: var(--imgWidth);

  --smallImageWidth: 150px;
  --bigImageWidth: var(--imgWidth);
  --imageOverlap: 30px;

  width: calc(
    var(--smallImageWidth) +
      var(--bigImageWidth) - var(--imageOverlap)
  );
}

.images {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
  position: relative;
  max-width: 100%;

  & > * {
    flex-shrink: 0;
    position: relative;
  }
}

.smallImage {
  position: relative;
  top: -1rem;
  width: var(--smallImageWidth);
  height: var(--smallImageWidth);
  aspect-ratio: 1;
  max-width: 70vw;
  max-height: 70vw;
  // border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center center;
  z-index: 2;
  box-shadow: 0 0 0 0.2em var(--primary-l);
}

.bigImage {
  width: var(--bigImageWidth);
  height: var(--bigImageWidth);
  aspect-ratio: 1;
  max-width: 65vw;
  max-height: 65vw;
  background-color: rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center center;
  // border-radius: 50%;
  margin-left: calc(-1 * var(--imageOverlap));
  // box-shadow: 0 0 0 0.5em var(--base-l);

  &.isLink {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
}

a {
  color: inherit;
}

// p {
//   margin-left: var(--side-pad);
//   max-width: 550px;
// }

h2 {
  margin-top: 0;
  margin-bottom: 0.3em;

  width: 100%;
}
.description {
  width: 100%;
  font-size: 0.9em;
}
</style>
