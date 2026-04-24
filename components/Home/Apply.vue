<template>
  <section class="v3 shadowFromTop" id="apply">
    <div class="light v3"></div>

    <div class="contentcolumn">
      <h1>Get Involved</h1>

      <div class="columns padtop">
        <div class="span2 textcolumn el">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/event.svg"
              class="applyIcon"
            />
            スペースレンタル
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/event.svg"
              class="applyIcon"
            />
            Rent the Space
          </h2>

          <div class="marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024/20231202_kyoto_209_4000.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              <div>
                Bridge
                Studioを、集まりや展覧会、短期的なプロジェクトの場としてご利用いただけます。用途に応じて柔軟に対応可能です。
              </div>
            </template>
            <template v-else>
              <div>
                Use Bridge Studio as a site for your own
                gatherings, exhibitions, or temporary
                projects. The space is available for
                short-term use, with flexibility for
                different formats.
              </div>
            </template>
          </div>
        </div>

        <div class="el span2 textcolumn">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/residency.svg"
              class="applyIcon"
            />
            滞在制作
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/residency.svg"
              class="applyIcon"
            />
            Become a Resident
          </h2>

          <div
            class="openCallBanner"
            v-if="false && state.openCall.value"
          >
            <template v-if="locale === 'ja'">
              <!-- <h3>Open Call</h3> -->
              <div>
                2025年の滞在制作の募集は終了しました。2026年以降の募集に関しては、詳細が決定次第HPとInstagramにてアナウンスします。
              </div>
            </template>
            <template v-else>
              <!-- <h3>Open Call</h3> -->
              <div>
                We are currently full for 2025 residencies.
                We will announce details for 2026 once our
                schedule has been finalized. Please check
                back here for updates.
              </div>

              <!-- <div class="martoptiny themes">
                Our work is guided by specific research themes designed to
                stimulate open discussions:
                <ul>
                  <li>Critical Making and Design Anthropology</li>
                  <li>Urban Ecology and Alternative Urbanism</li>
                  <li>Cross-Cultural Design and Creative Adaptation</li>
                </ul>
              </div> -->

              <!-- <div class="bottomHighlight">
                Additionally, we're looking for
                videographers and carpenters who might want
                to help us on projects for the space in
                exchange for a reduced rate! Let us know if
                you're interested.
              </div> -->
            </template>
          </div>

          <div class="grid2 gapsmall marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024_2/8.jpg"
            /><img
              class="sectionImage"
              src="/img/2024_2/15.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              レジデンシープログラムでは、京都の都市環境に身を浸しながらリサーチや実践を深める時間を過ごすことができます。主に都市・建築・ものづくり・デザイン分野で活動するアーティスト、デザイナー、リサーチャーを広く歓迎します。現在は招待および紹介制で実施をしていますが、日本人の方はお気軽にお問い合わせください。
            </template>

            <template v-else>
              Join our residency program and spend time
              developing your practice within Kyoto's urban
              landscape. We welcome artists, designers, and
              researchers working across disciplines.
              <div class="highlight martopsmall">
                Currently by invitation and referral only,
                so please note that we may not be able to
                respond to all individual inquiries at this
                time.
              </div>
            </template>
          </div>
        </div>

        <div class="el span2 textcolumn">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/fellowship.svg"
              class="applyIcon"
            />
            コラボレーション
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/fellowship.svg"
              class="applyIcon"
            />
            Collaboration
          </h2>

          <div class="marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024_2/2.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              <div>
                個人、団体、機関とのコラボレーションを歓迎しています。アイデアや企画、関心の共有などがあれば、ぜひご連絡ください。
              </div>
            </template>
            <template v-else>
              <div>
                We are open to collaborations with
                individuals, organizations, and
                institutions. If you have an idea, proposal,
                or shared interest, we'd love to hear from
                you.
              </div>
            </template>
          </div>
        </div>
      </div>

      <a
        href="mailto:bridgetoresidency@gmail.com"
        target="_blank"
        class="button martopbig"
        style="
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <div class="secondary">
          Contact Us for Inquiries
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * 
        <div class="studio span2 textcolumn">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/studio.svg"
              class="applyIcon"
            />
            シェアスタジオ
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/studio.svg"
              class="applyIcon"
            />
            Shared Studio
          </h2>

          <div class="grid2 gapsmall marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024_2/13.jpg"
            />
            <img
              class="sectionImage"
              src="/img/2024_2/14.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              洋館部分の2階を使用したいアーティストやデザイナーを募集しています。オープンスタジオを定期的に開催し、地域に開いたシェアスタジオとなる予定です。
              <ul>
                <li>
                  ジャンルやキャリアは問いません。アート、デザイン、建築、工芸、印刷など、幅広く創作活動に携わる方を幅広く募集しています。
                </li>
                <!-- <li>利用料月額: 税込28,000円 (光熱費、運営費含む)</li>
                <li>
                  敷金としてスタジオ利用料1ヶ月分が必要です（退去後返却されます）
                </li> -->
                <li>
                  占有ではなく、オープンなスタジオとして使用するため、定期的に見学者などが入ってくることが大丈夫な方。
                </li>
                <li>
                  1階のトイレ、洗面所、台所なども使用頂けます。
                </li>
              </ul>
            </template>
            <template v-else>
              We are looking for artists and designers who
              would like to use the Western-style second
              floor of Bridge Studio as a workspace. We plan
              to hold open studios regularly and become a
              shared studio open to the community.
              <ul class="martopsmall">
                <li>
                  Any form of creator is accepted. We are
                  looking for a wide range of people
                  involved in a wide range of creative
                  activities, including art, design,
                  architecture, crafts, and printing.
                </li>
                <li>
                  One month's worth of studio usage fee is
                  required as a security deposit (to be
                  returned on departure)
                </li>
                <li>
                  As the studio is a workspace and not a
                  living space, be prepared for an active
                  flow of creators and visitors.
                </li>
                <li>
                  You can also use the toilet, washroom, and
                  kitchen (within reason) on the first
                  floor.
                </li>
              </ul>

              <!-- <h4>Cost:</h4>
              <div class="marleft">
                <b>USD $200 per month</b>
                <div class="sub">
                  This price includes taxes, utilities, and
                  operating costs.
                </div>
              </div> -->
            </template>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd42B_H7NKqFqVnKJal0LnxsNd7MrqWYCPn_zY_nQp34OGzIA/viewform"
            target="_blank"
            class="button martop"
          >
            <div class="secondary">
              Apply for Shared Studio
            </div>
          </a>
        </div>

        <div class="coworking">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/fellowship.svg"
              class="applyIcon"
            />
            コワーキング
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/fellowship.svg"
              class="applyIcon"
            />
            Coworking
          </h2>

          <div class="marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024_2/6.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              <br />
              <br />
              コワーキングメンバーは、パソコン作業や読書などでブリッジスタジオの共有スペースを午前10時から午後6時まで好きな時間でご利用いただけます。
              <ul>
                <li>月額12,000円</li>
                <li>冷蔵庫・キッチンの使用可</li>
                <li>備え付けの机と椅子が利用可</li>
                <li>
                  Wi-Fi、プロジェクター、プリンター、スピーカーが利用可
                </li>
                <li>
                  個人の所持品を保管するロッカーはありませんのでご注意ください
                </li>
                <!-- <li>Bridge Toコミュニティへのアクセス</li>
                <li>
                  海外連携団体や拠点とのコラボレーションやレジデンスの機会の提供
                </li> -->
              </ul>
            </template>
            <template v-else>
              Coworking members get access to the common
              spaces of Bridge Studio from 10AM to 6PM, any
              day of the week.
              <br />
              You may work, have meetings, use the
              fridge/kitchen, and generally come and go as
              you please.

              <ul>
                <li>12,000 yen per month</li>
                <li>
                  Desks and chairs are provided for use
                </li>
                <li>Bicycle parking is available</li>
                <li>
                  Wi-Fi, projector, printer, and speaker are
                  available
                </li>
                <li>
                  Please note that there are no lockers for
                  storing personal belongings
                </li>
              </ul>

              <!--               
              We are looking for 10 to 20 "fellows" who will
              actively participate in the management,
              planning, and use of
              <b>Bridge Studio</b> in a co-op format, as if
              they were joint renters.
              <br />
              <h4>Fellows get:</h4>
              <ul>
                <li>
                  Use of Bridge Studio as a satellite
                  workspace
                </li>
                <li>
                  Use of the space for events and workshops
                </li>
                <li>
                  Overnight stays at Bridge Studio (Pending
                  discussion, no more than a day or two per
                  month)
                </li>
                <li>
                  Opportunities for collaboration and
                  residency with overseas partner
                  organizations and centers
                </li>
                <li>
                  Direct line of communication with the
                  Bridge To team
                </li>
              </ul> -->

              <!-- <h4>Cost:</h4>
              <div class="marleft">
                <b>USD $150 per month</b>
                <div class="sub">
                  This price includes taxes, utilities, and
                  operating costs.
                </div>
              </div> -->
            </template>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd234TPVBNFxu_XeuzD6bhfV4JlPFSzWQHkkyex3pPBiIQIuA/viewform"
            target="_blank"
            class="button martop"
          >
            <div class="secondary">Apply for Coworking</div>
          </a>
        </div>

 */
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
.section {
  padding-bottom: 10vh;
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
    background: var(--primary-d2);
  }
}

.contentcolumn {
  position: relative;
  z-index: 2;
}

h1 {
  padding-top: 30px;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.openCallBanner {
  // text-align: center;
  position: relative;
  padding: 1rem 2rem 1rem 2rem;
  // max-width: 550px;
  margin: 3.2em auto 2em auto;
  color: var(--primary);

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 100%;
  //   height: 100%;
  //   background: var(--primary-d3);
  //   opacity: 0.5;
  //   // background: radial-gradient(
  //   //   var(--primary-d),
  //   //   transparent
  //   // );
  //   // filter: blur(40px);
  //   z-index: -1;
  // }

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    --inset: 0rem;
    top: var(--inset);
    left: var(--inset);
    width: calc(100% - calc(var(--inset) * 2));
    height: calc(100% - calc(var(--inset) * 2));
    border: 1px solid var(--primary);
    opacity: 0.5;
  }

  h3 {
    position: absolute;
    top: 0;
    left: 1rem;
    transform: translateY(-50%);
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 0.2em;
    background: var(--primary);
    padding: 0.1rem 1rem;
    color: var(--primary-d2);
    z-index: 3;
  }

  .bottomHighlight {
    margin: 1rem -2rem -1rem -2rem;
    // background: var(--base-d);
    // color: var(--base-d2);
    padding: 1rem 2rem;
    // border-top: 1px solid var(--primary);
    width: calc(100% + 4rem);
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary);
      opacity: 0.1;
      z-index: -1;
    }
  }
}

.el {
  @media (max-width: 768px) {
    padding: 0;
  }
}
.span2 {
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
}

h2 {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.applyIcon {
  height: 1.5em;
  max-width: 1.8em;
}

.event {
  @media (max-width: 768px) {
    margin: -30px -50vw -15vh -50vw;
    padding: 30px 50vw 15vh 50vw;
  }
}

a {
  color: white;
}

p {
  margin: 1em 0;
}

li {
  line-height: 1.5;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 2rem;
  // text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
}

h3 {
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
}

h4 {
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
}

.button {
  margin-top: 1em;
}

.indent {
  margin-left: 1.5em;
}

.themes {
  li {
    margin: 0;
  }
}
</style>
