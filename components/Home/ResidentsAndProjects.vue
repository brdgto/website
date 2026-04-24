<template>
  <section class="v5" id="residents">
    <div
      v-lazy:background-image="
        '/img/2024/20231202_kyoto_220_4000.jpg'
      "
      class="interstitial shadow"
    ></div>

    <div class="contentcolumn full">
      <!-- <h1>Past Projects</h1>

      <div class="row padbotbig">
        <div v-if="residents.upcoming?.length">
          <div class="flex">
            <HomeResident
              v-for="r in residents.upcoming || []"
              :key="r.id + r.name + locale"
              :r="r"
            />
          </div>
        </div>

        <div v-if="residents.past?.length">
          <div class="flex">
            <HomeResident
              v-for="r in residents.past || []"
              :key="r.id + r.name + locale"
              :r="r"
            />
          </div>
        </div>
      </div> -->

      <h1>Past Residents</h1>

      <div class="row">
        <div v-if="residents.upcoming?.length">
          <div class="flex">
            <HomeResident
              v-for="r in residents.upcoming || []"
              :key="r.id + r.name + locale"
              :r="r"
            />
          </div>
        </div>

        <div v-if="residents.past?.length">
          <div class="flex">
            <HomeResident
              v-for="r in residents.past || []"
              :key="r.id + r.name + locale"
              :r="r"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

import { residents } from '~/assets/people'
</script>

<style lang="scss" scoped>
.contentcolumn {
  --side-pad: 5%;

  width: 100%;
  overflow-x: hidden;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  // padding-top: 0;
}
h1 {
  // margin-top: 130px;
  margin-left: var(--side-pad);
}
h3 {
  opacity: 0.5;
  margin-bottom: 0.5em;
}

.row {
  padding: 0 var(--side-pad);
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding-bottom: calc(min(var(--side-pad) * 2, 6em));
}
</style>
