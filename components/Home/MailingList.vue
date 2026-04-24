<template>
  <section class="v2 shadowFromTop" id="mailingList">
    <div class="light v1" style="opacity: 0.1"></div>

    <div class="contentcolumn relative z2">
      <div class="textcolumn newsletter">
        <h1>Newsletter</h1>

        <div v-if="locale === 'ja'">
          ニュースレターでは、オープンコールやイベント情報などを不定期でお送りしています。
        </div>
        <div v-else>
          Sign up for our newsletter for upcoming open calls
          and events! No spam — we'll only send mail when we
          actually have something useful to say.
        </div>

        <div class="substack-post-embed martop">
          <p lang="en">
            What We Made, Repaired, and Noticed /
            つくること、直すこと、観測すること by Bridge
            Studio / Bridge To
          </p>
          <a
            data-post-link
            href="https://bridgestudiobridgeto.substack.com/p/what-we-made-repaired-and-noticed"
            >Read on Substack</a
          >
        </div>

        <!-- Mailchimp
        <div id="mc_embed_signup">
          <form
            action="https://brdg.us11.list-manage.com/subscribe/post?u=89bd154de3e56c4285b8d19ab&amp;id=54bc678374&amp;f_id=007fa9e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address</label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div id="mce-responses" class="clear foot">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_89bd154de3e56c4285b8d19ab_54bc678374"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
              </div>
            </div>
          </form>
        </div> -->

        <!-- <div id="substack-feed-embed" class="martop"></div> -->
        <!-- <a
          href="https://bridgestudiobridgeto.substack.com/"
          target="_blank"
          class="button primary martop"
        >
          <div>Check it Out Here</div>
        </a> -->
        <iframe
          src="https://bridgestudiobridgeto.substack.com/embed"
          id="substack"
          width="100%"
          height="150"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

useHead({
  script: [
    {
      src: 'https://substack.com/embedjs/embed.js',
      async: true,
    },
  ],
})

// useHead({
//   script: [
//     {
//       src: 'https://substackapi.com/embeds/feed.js',
//       async: true,
//     },
//   ],
// })

// onMounted(() => {
//   ;(window as any).SubstackFeedWidget = {
//     substackUrl: 'bridgestudiobridgeto.substack.com',
//     posts: 1,
//     layout: 'left',
//     hidden: ['author', 'reactions', 'comments', 'premium'],
//     colors: {
//       primary: '#404040',
//       secondary: '#808080',
//       background: '#FFFFFF',
//     },
//   }
// })

// onMounted(async () => {
//   if (!window) return;

//   // @ts-ignore
//   while (!window.jQuery) {
//     console.log("waiting for jQuery");
//     await new Promise((resolve) => setTimeout(resolve, 100));
//   }

//   (function ($) {
//     // @ts-ignore
//     window.fnames = new Array();
//     // @ts-ignore
//     window.ftypes = new Array();
//     // @ts-ignore
//     fnames[0] = "EMAIL";
//     // @ts-ignore
//     ftypes[0] = "email";
//     // @ts-ignore
//     fnames[1] = "FNAME";
//     // @ts-ignore
//     ftypes[1] = "text";
//     // @ts-ignore
//     fnames[2] = "LNAME";
//     // @ts-ignore
//     ftypes[2] = "text";
//     // @ts-ignore
//     fnames[3] = "ADDRESS";
//     // @ts-ignore
//     ftypes[3] = "address";
//     // @ts-ignore
//     fnames[4] = "PHONE";
//     // @ts-ignore
//     ftypes[4] = "phone";
//     // @ts-ignore
//     fnames[5] = "BIRTHDAY";
//     // @ts-ignore
//     ftypes[5] = "birthday";
//     // @ts-ignore
//   })(window.jQuery);
//   // @ts-ignore
//   window.$mcj = jQuery.noConflict(true);
// });
</script>

<style lang="scss">
.newsletter.textcolumn {
  max-width: 600px;
  padding: 0;
}

// #substack {
//   margin-top: 2em;
// }

.substack-feed-widget {
  border-radius: 0 !important;
}

/*
#mc-embedded-subscribe-form {
  margin: 0;
  margin-top: 1.5em;
}
#mc_embed_signup .mc-field-group {
  width: 100%;
}

#mc_embed_signup
  #mc-embedded-subscribe-form
  #mc_embed_signup_scroll
  #mc-embedded-subscribe,
#mc_embed_signup .button {
  text-align: center;
  background: var(--primary);
  height: 100%;
  width: 100%;
  min-width: 180px;
  padding: 25px 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  color: white;

  &.reverse {
    background: white;
    color: var(--primary);
  }

  @media (max-width: 768px) {
    letter-spacing: 2.5px;
    font-size: 1rem;
    min-width: 100px;
  }

  &:hover {
    background: var(--primaryl1);
    letter-spacing: 5.5px;

    &.reverse {
      background: white;
      color: var(--primary-d2);
    }

    @media (max-width: 768px) {
      letter-spacing: 2.5px;
    }
  }
}*/

#substack {
  margin-top: -4.5rem;
  position: relative;
  z-index: 3;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;

  @media (max-width: 768px) {
    margin-top: -7rem;
  }
}
.substack-post-embed {
  position: relative;
  z-index: 2;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 100% !important;
  border-right: 1px solid white;

  & > * {
    width: 100%;
  }
}
</style>
