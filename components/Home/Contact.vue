<template>
  <section class="v5" id="contact">
    <div class="light"></div>
    <div
      v-lazy:background-image="
        '/img/2024/20231202_kyoto_198_4000.jpg'
      "
      class="interstitial"
    ></div>

    <div class="contentcolumn martopbig padbotbig">
      <div class="p flexcolumn gapbig flexcenter">
        <a
          class="button"
          href="mailto:bridgetoresidency@gmail.com"
          target="_blank"
        >
          <div
            class="primary invert padleftbig padrightbig"
          >
            Contact Us
          </div>
        </a>

        <Social
          style="
            transform: scale(1.5);
            --gap: 1em;
            --social-bg: var(--base-d);
          "
        />
      </div>

      <div>
        <h3>Bridge Studio</h3>
        <blockquote>
          69 Jodoji Higashidacho, Sakyo Ward, Kyoto,
          606-8411, Japan
          <br />〒606-8411 京都市左京区浄土寺東田町69
        </blockquote>
        <iframe
          width="600"
          height="450"
          frameborder="0"
          style="border: 0"
          src="https://www.google.com/maps/embed/v1/place?q=69%20Jodoji%20Higashidacho%2C%20Sakyo%20Ward%2C%20Kyoto%2C%20606-8411&key=AIzaSyCHF6DdpDLIG-1Ak4p0XyIK2Bc6DbVmgLY"
          allowfullscreen
        ></iframe>

        <!-- <h3>Bridge Office</h3>
        <blockquote>
          28-3 Jōdoji Banbachō, Sakyō-ku, Kyoto, 606-8412
          <br />〒606-8412 京都市左京区浄土寺馬場町28-3
        </blockquote>
        <iframe
          width="600"
          height="450"
          frameborder="0"
          style="border: 0"
          src="https://www.google.com/maps/embed/v1/place?q=28-3%20Jodoji%20Banbacho%2C%20Sakyo%20Ward%2C%20Kyoto%2C%20606-8412&key=AIzaSyCHF6DdpDLIG-1Ak4p0XyIK2Bc6DbVmgLY"
          allowfullscreen
        ></iframe> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
section {
  padding-top: 0;
}

h1 {
  margin-bottom: 0.8em;
}

.p {
  display: block;
  margin-bottom: 6em;

  & > *:first-child {
    margin-bottom: 5px;
  }
}

.button {
  max-width: 500px;
}

.sub {
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.4;
}

blockquote {
  display: inline-block;
  margin: 5px 0 10px 0;
  padding: 20px 30px;
  background: rgba(black, 0.05);
  border: 1px solid rgba(black, 0.1);
}

iframe {
  width: 100%;
}
</style>
