<template>
  <div class="social flexcenter">
    <a
      href="https://www.instagram.com/bridgestudio_kyoto/"
      target="_blank"
    >
      <img
        src="/img/social/instagram.svg"
        alt="Instagram"
      />
    </a>
    <!-- <a
      href="https://www.facebook.com/bridgetokyoto"
      target="_blank"
    >
      <img src="/img/social/facebook.svg" alt="Facebook" />
    </a> -->
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.social {
  line-height: 0;

  gap: var(--gap, 0);

  a {
    height: 100%;
    width: 4rem;
    height: 4rem;
    padding: 1.4rem;
    background-color: var(--social-bg, transparent);

    &:hover {
      background-color: var(--base);
      // filter: brightness(1.2);
    }

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
