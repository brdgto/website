<template>
  <section class="v2" id="whatWeDo">
    <div class="light"></div>

    <div class="contentcolumn">
      <h1>What We Do</h1>

      <div class="leftright">
        <div class="photo">
          <img src="/img/2024_2/8.jpg" />
        </div>

        <div>
          <h2>Residency</h2>
          <template v-if="locale === 'ja'">
            <p>
              アーティスト、デザイナー、都市の実践者を招き、フィールドに根ざした滞在型リサーチ、実験、協働の機会を提供しています。滞在期間は1〜3ヶ月で、その成果はBridge
              Studioにて発表されます。2026年4月現在、招待および紹介制での実施となっています。
            </p>
          </template>
          <template v-else>
            <p>
              Artists, designers, and urban thinkers are
              invited to engage with Kyoto’s urban ecologies
              through site-based research, experimentation,
              and collaboration, and to showcase their work
              at Bridge Studio over a period of 1–3 months.
            </p>
            <p class="highlight">
              Currently by invitation and referral only.
            </p>
          </template>
        </div>
      </div>

      <div class="leftright">
        <div class="photo">
          <img src="/img/people/hidemi_project.jpg" />
        </div>

        <div>
          <h2>Exhibitions</h2>
          <template v-if="locale === 'ja'">
            <p>
              展覧会、オープンスタジオ、展示販売会などさまざまな形式で空間・物質・社会に関する問いを探求します。
            </p>
          </template>
          <template v-else>
            <p>
              Exhibitions at Bridge Studio explore spatial,
              material, and social questions through
              installations, open studios, and evolving
              formats.
            </p>
          </template>
        </div>
      </div>

      <div class="leftright">
        <div class="photo">
          <img src="/img/people/jan_project.jpg" />
        </div>

        <div>
          <h2>Workshops &amp; Talks</h2>
          <template v-if="locale === 'ja'">
            <p>
              国内外の実践者を迎え、対話、レクチャー、ハンズオン形式のセッションを行います。
            </p>
          </template>
          <template v-else>
            <p>
              A series of conversations, lectures, and
              hands-on sessions that bring together local
              and international practitioners.
            </p>
          </template>
        </div>
      </div>

      <div class="leftright">
        <div class="photo">
          <img
            src="/img/people/christianeSauer_project.jpg"
          />
        </div>

        <div>
          <h2>Screenings</h2>
          <template v-if="locale === 'ja'">
            <p>
              Bridge
              Studioの関心テーマに共鳴する映画やドキュメンタリー、映像作品の上映会を定期的に行なっています。
            </p>
          </template>
          <template v-else>
            <p>
              Informal screenings of films, documentaries,
              and moving image works that resonate with our
              themes followed by discussions.
            </p>
          </template>
        </div>
      </div>

      <div class="leftright">
        <div class="photo">
          <img src="/img/2024_2/6.jpg" />
        </div>

        <div>
          <h2>Shop &amp; Cafe</h2>
          <template v-if="locale === 'ja'">
            <p>
              出版物やプロダクト、軽飲食を提供する、小さく変化し続ける場です。2026年秋オープン予定。
            </p>
          </template>
          <template v-else>
            <p>
              A small, evolving space offering publications,
              objects, and light refreshments. Opening in
              autumn 2026.
            </p>
          </template>
        </div>
      </div>

      <div class="leftright">
        <div class="photo">
          <img src="/img/books/p3_small.jpg" />
        </div>

        <div>
          <h2>Publication</h2>
          <template v-if="locale === 'ja'">
            <p>
              ZINEからエッセイまで、Bridge
              Studioの活動を記録し、拡張するための印刷物およびデジタル媒体を制作しています。
            </p>
          </template>
          <template v-else>
            <p>
              From zines to essays, Printed and digital
              outputs that document and extend the work of
              Bridge Studio.
            </p>
          </template>
        </div>
      </div>

      <div class="leftright">
        <div class="photo">
          <img src="/img/partners/observatory.jpg" />
        </div>

        <div>
          <h2>Research</h2>
          <template v-if="locale === 'ja'">
            <p>
              「都市エコロジー観測所（Observatory of Urban
              Ecologies）」は、マテリアルフローや都市環境、場所に根ざした実践を探求するリサーチプラットフォームです。大阪大学文化人類学研究科との連携のもと運営されています。
            </p>
          </template>
          <template v-else>
            <p>
              The Observatory of Urban Ecologies is an
              ongoing research platform investigating
              material flows, urban environments, and
              situated practices, supported by an
              anthropology lab at Osaka University.
            </p>
          </template>
        </div>
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
.section {
  @media (max-width: 900px) {
    overflow-x: hidden;
  }
}

h1 {
  padding-top: 8rem;
  margin-bottom: 1em;
  position: relative;
  z-index: 4;

  @media (max-width: 900px) {
    padding-top: 0px;
  }
}

.leftright {
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  transform: translateX(10%);
  padding-bottom: calc(var(--marBig) * 1.5);

  & > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .photo {
    position: relative;
    width: 45%;
    padding-top: 45%;
    height: 0;
    flex-grow: 0;
    flex-shrink: 0;
    aspect-ratio: 1;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    transform: translateX(-10%);

    & > * {
      align-items: flex-end;
      text-align: right;
    }
  }

  @media (max-width: 900px) {
    transform: none !important;
    flex-direction: column !important;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & > * {
      align-items: center !important;
      text-align: center !important;
    }

    &:not(:last-of-type) {
      padding-bottom: calc(var(--marBig));
    }

    h2 {
      margin-bottom: 0.5rem;
    }

    .photo {
      width: 75%;
      padding-top: 75%;
    }
  }
}

h2,
p {
  position: relative;
  z-index: 2;
}

p {
  margin-bottom: 1.2em;
}

.contentcolumn {
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
}
</style>
