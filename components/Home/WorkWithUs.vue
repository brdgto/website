<template>
  <section class="v5" id="workwithus">
    <div class="light v2"></div>

    <div class="contentcolumn">
      <h1 v-if="locale === 'ja'">採用情報</h1>
      <h1 v-else>Work with us!</h1>

      <div class="">
        <template v-if="locale === 'ja'">
          <h2 class="marbottiny">業務内容</h2>
          <ul>
            <li>Bridge Studioへの週１〜2日の在廊</li>
            <li>
              Bridge
              Studioの場所運営に関わる実務全般のサポート
              <ul>
                <li>
                  アーティストやクリエイターとのコミュニケーション
                </li>
                <li>
                  掃除、備品買い出し、DIY、修繕、来客対応、展示インストールなど
                </li>
              </ul>
            </li>
            <li>
              テーマおよび業務に必要に応じたリサーチ実施・サポート
            </li>
            <li>
              ワークショップ設計およびファシリテーション実施業務・サポート
            </li>
            <li>
              広報（イベントレポート作成、SNS運用など）
            </li>
          </ul>

          <button
            @click="seeMore = true"
            v-if="!seeMore"
            class="martop fullwidth"
          >
            <div class="dark">もっと見る</div>
          </button>

          <template v-if="seeMore">
            <h2 class="marbottiny">前提・条件</h2>
            <ul>
              <li>
                対面での打ち合わせや現地での対応が可能な方
                <ul>
                  <li>
                    オンラインでの打ち合わせなどが入ることもありますが、基本的に週1〜2日の頻度でBridge
                    Studioのオフィスに出勤できる方。
                  </li>
                </ul>
              </li>
              <li>
                週に最低6時間〜最大20時間
                <ul>
                  <li>フレキシブルに日程を調整できる方</li>
                </ul>
              </li>
              <li>1200円〜 / 時給、交通費支給なし</li>
              <li>
                雇用形態
                <ul>
                  <li>アルバイト、インターン、業務委託</li>
                </ul>
              </li>
            </ul>

            <h2 class="marbottiny">
              求める人物像・スキル・経験
            </h2>
            <ul>
              <li>
                日常会話以上の英語力
                <ul>
                  <li>
                    海外のクリエイターとの会話や英語でのメールのやり取りがあるため
                  </li>
                </ul>
              </li>
              <li>
                アートやデザイン文脈に詳しい方、もしくは興味がある方
              </li>
              <li>
                ワークショップ設計やファシリテーション経験がある方、もしくは学びたいという意欲のある方
              </li>
              <li>
                DIY作業が好きな方、ものづくりが好きな方
              </li>
              <li>
                デスクリサーチ、ヒアリング、事例調査など様々なリサーチができる方
              </li>
              <li>
                Discord、Instagram、Google
                Calendarなど基本的なデジタルツールが使いこなせる方
              </li>
              <li>
                ジェンダーや国籍、年齢は問いません
                <ul>
                  <li>
                    海外在住の方で日本でのインターンに興味がある方は、個別でお問合せください。
                  </li>
                </ul>
              </li>
            </ul>

            <h2 class="marbottiny">歓迎スキル</h2>
            <ul>
              <li>DIY、大工仕事</li>
              <li>グラフィックデザイン</li>
              <li>プロダクトや空間の設計</li>
            </ul>
          </template>
        </template>

        <template v-else>
          <h2 class="marbottiny">Job Description</h2>
          <ul>
            <li>
              Being present at Bridge Studio 1-2 days per
              week
            </li>
            <li>
              Support for general operational duties at
              Bridge Studio
              <ul>
                <li>
                  Communication with artists and creators
                </li>
                <li>
                  Cleaning, purchasing supplies, DIY,
                  repairs, guest reception, exhibition
                  installation, etc.
                </li>
              </ul>
            </li>
            <li>
              Conducting and supporting research as required
              by themes and duties
            </li>
            <li>
              Workshop design and facilitation
              duties/support
            </li>
            <li>
              Public relations (creating event reports,
              social media management, etc.)
            </li>
          </ul>

          <button
            @click="seeMore = true"
            v-if="!seeMore"
            class="martop fullwidth"
          >
            <div class="dark">Read More</div>
          </button>

          <template v-if="seeMore">
            <h2 class="marbottiny">
              Requirements and Conditions
            </h2>
            <ul>
              <li>
                Must be available for in-person meetings and
                on-site work
                <ul>
                  <li>
                    While there may be online meetings, must
                    be able to come to Bridge Studio office
                    1-2 days per week.
                  </li>
                </ul>
              </li>
              <li>
                6-20 hours per week
                <ul>
                  <li>
                    Must be able to maintain a flexible
                    schedule
                  </li>
                </ul>
              </li>
              <li>
                ~1200 yen/hour, no transportation allowance
              </li>
              <li>
                Employment type
                <ul>
                  <li>
                    Part-time, internship, or contract work
                  </li>
                </ul>
              </li>
            </ul>

            <h2 class="marbottiny">
              Desired Profile, Skills, and Experience
            </h2>
            <ul>
              <li>
                Above conversational level English
                proficiency
                <ul>
                  <li>
                    Required for conversation with
                    international creators and email
                    correspondence in English
                  </li>
                </ul>
              </li>
              <li>
                Knowledge of or interest in art and design
                contexts
              </li>
              <li>
                Experience in workshop design and
                facilitation, or eager to learn
              </li>
              <li>Enjoys DIY work and creating things</li>
              <li>
                Able to conduct various types of research
                including desk research, interviews, and
                case studies
              </li>
              <li>
                Proficient in basic digital tools such as
                Discord, Instagram, Google Calendar
              </li>
              <li>
                Open to all genders, nationalities, and ages
                <ul>
                  <li>
                    If you're living overseas and interested
                    in an internship in Japan, please
                    inquire individually.
                  </li>
                </ul>
              </li>
            </ul>

            <h2 class="marbottiny">
              We're especially excited if you know about...
            </h2>
            <ul>
              <li>DIY, carpentry</li>
              <li>Graphic design</li>
              <li>Product and spatial design</li>
            </ul>
          </template>
        </template>
      </div>

      <a
        href="#"
        target="_blank"
        class="button martop"
        v-if="seeMore"
      >
        <div class="">Apply</div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const seeMore = ref(false)
</script>

<style lang="scss" scoped>
.contentcolumn {
  position: relative;
  z-index: 2;
}

h1 {
  padding-top: 30px;
}
</style>
