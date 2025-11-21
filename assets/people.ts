interface ResidentHomepage {
  current?: ResidentData[]
  past: ResidentData[]
  upcoming?: ResidentData[]
}

export const studioMembers: ResidentHomepage = {
  current: [
    {
      id: 'lin',
      name: 'Lin Ichen',
      description: `Taipei-born painter, Japanese contemporary literature researcher.`,
      descriptionJa: `台湾・台北出身、京都芸術大学大学院博士課程在籍中。画家､日本現代文学研究。`,
      url: 'https://www.instagram.com/ichen2193/',
    },
    {
      id: 'kawasaki',
      name: 'Mineo Kawasaki',
      description: 'Drummer and composer.',
      descriptionJa: 'ドラマー、ビートメイカー',
      url: 'https://linktr.ee/mineo_kawasaki',
    },
    {
      id: 'osawa',
      name: 'Yuki Osawa',
      description: `Architect.`,
      descriptionJa: `建築家。`,
      url: 'https://www.instagram.com/osawa_opdo/',
    },
  ],
  past: [
    {
      id: 'teo',
      name: 'Teo Knives',
      description:
        'A clinical psychologist working with mindfulness / tea ceremony and ikebana artist',
      descriptionJa:
        '臨床心理学者、茶道とイケバナのアーティスト',
      url: 'https://teo.knives.li/',
    },
    {
      id: 'ian',
      name: 'Ian Knives',
      description:
        'Japanese poet writing in Russian, white-hat hacker.',
      descriptionJa:
        'ロシア語で書いている日本詩人、白帽ハッカー。',
      url: 'https://t.me/s/iannoshi',
    },
    {
      id: 'hmw',
      name: 'Hand Made Works',
      description: `Leather artists.`,
      descriptionJa: `革職人。`,
      url: 'https://at0.handcrafted.jp/',
    },
    {
      id: 'unnuntei',
      name: 'Unnuntei',
      description: `Photographer and painter unit.`,
      descriptionJa: `写真家と画家のユニット。`,
      url: 'https://www.instagram.com/unnun_sha/',
    },
    {
      id: 'colin',
      name: 'Colin Zimbleman',
      description: `A clinical psychologist working with images.`,
      descriptionJa: `臨床心理学者`,
      url: 'http://www.zimbleman.com/',
    },
    {
      id: 'martin',
      name: 'Martin De Mello',
      description: `A poet, short fiction writer and editor based in Glasgow.`,
      descriptionJa: `グラスゴー拠点の詩人、短編小説家、編集者。`,
    },
    {
      id: 'marie',
      name: 'Marie Østerskov',
      description: `Natural dye artist.`,
      descriptionJa: `天然染色アーティスト。`,
    },
  ],
}

export const residents: ResidentHomepage = {
  upcoming: [],
  past: [
    {
      id: 'yoon',
      name: 'Yoon Ei Kyaw',
      description: `An urbanist and curator from Myanmar with a background in architecture. Her practice explores how public spaces and community memory shape the experience of cities. Working across community arts, cultural mapping, and spatial research, she focuses on how urban environments hold lived histories and collective resilience. She also uses writing and photography to document and share these stories.`,
      descriptionJa: `ミャンマー出身のアーバニスト／キュレーター。建築を背景に、公共空間とコミュニティの記憶が都市の体験をどのように形づくるのかを探求している。コミュニティアート、カルチュラルマッピング、空間リサーチを横断しながら、都市環境に刻まれた生活の歴史やレジリエンスに関心を寄せる。また、執筆や写真を通して、これらの物語を記録し共有する実践を続けている。`,
    },
    {
      id: 'christianeSauer',
      name: 'Christiane Sauer',
      description: `A Germany-based architect and material researcher. Her work focuses on material development for spatial contexts, drawing on textiles, active materials, and bio-inspiration. She is a Professor of Material Design at Weißensee School of Art and Design Berlin and a member of the Matters of Activity research cluster at Humboldt University.`,
      descriptionJa: `ドイツを拠点とする建築家・マテリアルリサーチャー。テキスタイル構造やアクティブマテリアル、自然界の仕組みを手がかりに、空間のための素材開発に取り組んでいる。ベルリン芸術大学ヴァイセンゼー校でマテリアルデザインの教授を務め、フンボルト大学の研究クラスター「Matters of Activity」に所属している。`,
      url: 'https://www.matters-of-activity.de/en/members/213/prof-christiane-sauer',
    },
    {
      id: 'nessim',
      name: 'Nessim Cohen',
      description: `An artist and curator whose practice listens to the living earth and the rhythms of the heart. Working with clay, seeds, and ritual gestures, he explores how slowness and care can re-weave our connection to the environments we inhabit.`,
      descriptionJa: `アーティスト／キュレーター。生きている大地と心の鼓動に耳を澄ませるように、粘土や種、儀式的な身振りを通して、ゆっくりとした時間とケアが、私たちと環境とのつながりをどのように編み直すのかを探求している。`,
      url: 'https://www.nessimcohenstudio.com/',
    },
    {
      id: 'margre',
      name: 'Margré Steensma',
      description: `An artist from the Netherlands. Her work moves through shifting desires, creating shapes, objects, and sculptures while tracing spaces in search of grounding.`,
      descriptionJa: `オランダ出身のアーティスト。移ろう欲望を手がかりに、形やオブジェクト、彫刻を制作し、よりどころを探すように空間や場所を辿っている。`,
      url: 'https://margresteensma.com',
    },
    {
      id: 'alisha',
      name: 'Alisha Baker',
      description: `A landscape architect, gardener, and maker based in Australia. Her practice explores stories of place and care through collaborations with ecologists, craftspeople, and communities.`,
      descriptionJa: `オーストラリアを拠点とするランドスケープアーキテクト、ガーデナー、メイカー。生態学者や職人、コミュニティとの協働を通じて、場所とケアの物語を探求している。`,
    },
    {
      id: 'geraldine',
      name: 'Geraldine Guterman Kuroda',
      description: `An Argentine architect and visual artist exploring the real and imagined threshold between rural East and port-city West. Through working with salvaged objects, she continues an ongoing practice of revisiting and reinterpreting her own origins.`,
      descriptionJa: `アルゼンチン出身の建築家・ヴィジュアルアーティスト。
      農村的な東洋と港町的な西洋、そのあいだに横たわる現実と想像の境界を探究している。拾い集めたオブジェクトを手がかりに、自身のルーツを問い直す実践を続けている。`,
      url: 'https://drive.google.com/file/d/1rmMkn_cLTWVjBpOAe_bNBL-dIzsqceBE/view?usp=drivesdk',
    },
    {
      id: 'jan',
      name: 'Jan Albert Eckert',
      description: `A Swiss urbanist, researcher and lifelong learning expert reimagining human-planetary relationships. He is the initiator of Nominute.City and the project’s owner and Principal Investigator. He is also the author of the Space-Place-Identity Framework, which he started developing in 2006.`,
      descriptionJa: `スイス出身のアーバニスト／リサーチャーであり、生涯学習の専門家。人間と地球の関係性を再考する取り組みを行っている。Nominute.City の提唱者であり、同プロジェクトのオーナー兼プリンシパル・インベスティゲーター（主任研究者）を務める。また、2006年より開発を始めた「Space-Place-Identity Framework（空間・場所・アイデンティティ・フレームワーク）」の著者でもある。`,
      url: 'https://nominute.city/',
    },
    {
      id: 'nina',
      name: 'Nina Fradet',
      description: `Artist, craftswoman and founder. Interested for several years in building a relationship between Cabinetmaking and Takezaiku - Japanese bamboo basketry - her research is gradually being refined to find its essence in the exercise of line and the consciousness of gestures to bring it to life.`,
      descriptionJa: `アーティストであり女性職人、そしてHINNの創設者であるNinaは、協働するクリエイターたちを結びつけ、すべての作品に深く関与している。長年にわたり、キャビネット制作（木工家具）と竹細工（日本の竹かご作り）の関係性に関心を寄せ、線の表現と手の動きに意識を向けながら、その本質を探求し続けている。`,
      url: 'https://www.hinnstudio.com/',
    },
    {
      id: 'arjan',
      name: 'Arjan Rietveld',
      description: `Dutch curator, editor and publisher. Following a long-stretched musical journey, he develops projects and stories within cultural and societal contexts.`,
      descriptionJa: `オランダ出身のキュレーター、編集者、出版者。 長年にわたる音楽の探求を経て、文化や社会の文脈の中でプロジェクトやストーリーを展開している。`,
      url: 'https://studio-rietveld.com/',
    },
    {
      id: 'jamie',
      name: 'Jamie Kruse',
      description: `Artist and professor based in New York and Maine. Inspired by both ancient and contemporary observations of Earth’s time and place in the cosmos, we stage embodied engagements with the planet’s ever-transforming events and conditions — human and nonhuman.`,
      descriptionJa: `ニューヨークとメイン州を拠点とするアーティスト兼教授。写真やパフォーマティブ・リサーチのほか、マルチプル、マイクロ・プロダクションを手がける。古代と現代の視点から、地球の時間や宇宙における位置を観察することで、人間と非人間の視点から、絶えず変容する地球の出来事や環境と直接関わる体験を創り出している。`,
      url: 'https://www.smudgestudio.org/',
    },
    {
      id: 'elizabeth',
      name: 'Elizabeth Ellsworth',
      description: `A multidisciplinary artist. Her media include letterpress, collage, photography, and built objects. Her work focuses on creatively adapting, moment to moment, to the changing planetary conditions we live within.`,
      descriptionJa: `学際的なアーティスト。彼女のメディアは、活版印刷、コラージュ、写真、立体作品など。変化し続ける地球環境の中で、瞬間ごとに創造的に適応していくことをテーマとしている。`,
      url: 'https://www.smudgestudio.org/',
    },
    {
      id: 'maciej',
      name: 'Maciej Burdalski',
      description: `Practicing architect with over 13 years of experience from leading design companies in Europe and Asia. Working on large scale mixed use projects. Currently searching for his own design language by exploring complex geometries, watercolor and 3d printing.`,
      descriptionJa: `ヨーロッパやアジアの大手設計会社で13年以上の経験を持つ建築家。大規模な複合施設のプロジェクトに携わる。現在は、自身のデザインスタイルを模索しながら、複雑な形状、水彩画、3Dプリントを探求している。`,
    },
    {
      id: 'anja',
      name: 'Anja Giese',
      description: `A Hamburg based Graphic artist and painter.
    Her work often combines urban narratives with layered compositions. During her residency, she aims to explore themes of home, the dynamic relationship between nature and city, and shifting perspectives from exterior to interior as a foreigner in unknown territory.`,
      descriptionJa: `ハンブルクを拠点とするグラフィックアーティスト、画家。
    彼女の作品は、都市の物語とレイヤー構成を組み合わせたものが多い。滞在制作中には、「家」、自然と都市のダイナミックな関係、そして未知の領域における外国人としての外から内への視点の変化といったテーマを探求する。`,
      url: 'https://diegiese.de/',
    },
    {
      id: 'tsai',
      name: 'Tsai Shih-Hsiang',
      description: `Co-founder of an art collective in Taiwan.  
    Tsai’s works often use video and photography to contemplate the city, landscapes, and the people toiling within them, or to document processes of drifting, shifting, and transcending the identity.`,
      descriptionJa: `台湾にあるアートコレクティブの創始者。作品はビデオや写真を使って、都市や風景、その中で働く人々について考えたり、漂流や移動、アイデンティティの超越のプロセスを記録したりする。`,
      url: 'https://www.tsaishihhsiang-artstudio.com/',
    },
    {
      id: 'konstanze',
      name: 'Konstanze Stoiber',
      description: `Artist and PhD candidate.
      She draws upon references of fallen systems, dissecting the remnants of monarchial and religious structures. An analysis of extremes - sublimity and violence in power structures and their self-contradictory nature.`,
      descriptionJa: `アーティスト、博士号候補
      彼女は、崩壊したシステムを参照し、君主制や宗教構造の残滓を解剖する。権力構造に潜む崇高さと暴力、そしてそれが内包する矛盾について分析する。`,
      url: 'https://konstanzestoiber.com/',
    },
    {
      id: 'karien',
      name: 'Karien Vandekerkhove',
      description: `Belgian photographer and visual artist.
      Her body of work encompasses photography, installations, paintings and small scale models, generating ‘a sense of absence’ through spiritual- and meditative compositions.`,
      descriptionJa: `ベルギー出身の写真家でビジュアル・アーティスト。
      彼女の作品は、写真、インスタレーション、絵画、小規模な模型を含み、スピリチュアルで瞑想的な構図を通して「不在の感覚」を生み出している。`,
      url: 'https://karienvandekerkhove.mypixieset.com/',
    },
    {
      id: 'tony',
      name: 'Tony Jouanneau',
      description: `A textile designer, craftsman and researcher. 
      Founded a textile+science laboratory, including experimenting with microalgae dyeing, patterns devoured by insects, or bacterial printing on fabrics.`,
      descriptionJa: `テキスタイルデザイナー、工芸者、研究者。`,
      url: 'https://www.atelier-sumbiosis.com',
    },
    {
      id: 'claudia',
      name: 'Claudia Chinyere Akole',
      description: `Illustrator, animator, comic artist from Sydney, Australia.
      She exhibited pages from "Fog" — her graphic novel memoir that she worked on during her residency. Her illustrations are done in her unique ʻTracing Paper Comixʼ style of comic-making, which involves using POSCA acrylic paint markers on multiple layers of tracing paper.`,
      descriptionJa: `シドニー出身のイラストレーター・アニメーター・コミックアーティスト。`,
      url: 'https://claudinsky.com',
      showProject: true,
    },
    {
      id: 'hidemi',
      name: 'Hidemi Takagi',
      description: `A photographer, visual artist, & social practitioner based in NYC.
      During her residency, she curated and exhibited photographs of teenagers with Asian (primarily Japanese) roots that she has taken over the years, inviting guests to consider their own perspectives on identity.`,
      descriptionJa: `ニューヨーク拠点の写真家、ビジュアルアーティスト、社会活動家。
      今回、Bridge Studioで、彼女がこれまで撮影したアジア（主に日本）にルーツがある10代若者の写真をキュレーションし、展示を開催しました。`,
      url: 'http://hidemitakagi.com/',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/uNwkPbjRamQNhEF1A',
    },

    {
      id: 'celeste',
      name: 'Celeste Gatier',
      description: `Sound artist, PhD researcher on Japanese architecture and acoustics.
      She developed a DIY electronic sound device using "paper circuits", creating delicate electronic sounds by folding, bending, and stroking paper, drawing inspiration from origami, shoji, and fusuma of Japanese architecture, inspired by Junichiro Tanizaki's "In-ei Raisan".`,
      descriptionJa: `サウンドアーティスト、日本の建築と音響に関する博士号取得者。
      「紙の回路」を使った、DIY電子音デバイスを開発。紙を折ったり、曲げたり、撫でたりすることで繊細な電子音を生み出すもので、折り紙や日本建築の障子、襖、谷崎潤一郎の『陰翳礼讃』などから着想を得ています。`,
      url: 'https://www.instagram.com/celeste.gatier/',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/6tCnKRE4JDv9Bk1g7',
    },

    {
      id: 'lemos',
      name: 'Lemos+Lehmann',
      description: `An artist duo focusing on perception, contemplation, and emotion.
        In addition to holding a listening session for SOLSTICE, their limited-edition sound art piece that captures the spiritual cycle of winter in Iceland, they created a space that invited guests to meditate on what comes after life.`,
      descriptionJa: `知覚、瞑想、感情に焦点を当てたアーティストデュオ。
      アイスランドの冬の精神的なサイクルを捉えた限定版サウンドアート作品「SOLSTICE」のリスニングセッションを開催するだけでなく、来客に人生のその先について瞑想する空間を創り上げました。`,
      url: 'https://www.lemosandlehmann.com',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/orSHSCvycjXpWSXu7',
    },

    {
      id: 'celineAndAliki',
      name: 'Céline Pelcé and Aliki van der Kruijs',
      description: `A pair of food and textile designers.
      Alongside open events involving water tastings, free-association, and reflection, they organized a performance along the Kamo River, inviting the participants to embrace the presence of water.`,
      descriptionJa: `フードデザイナー、テキスタイルデザイナー。
      水のテイスティング、フリーアソシエーション、リフレクションを含むオープンイベントに加え、鴨川沿いでのパフォーマンスを企画し、参加者に水の存在を受け入れるよう促しました。`,
      url: [
        'http://www.celinepelce.fr/',
        'http://www.alikivanderkruijs.com',
      ],
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/TGFTGjiJAYZwg5887',
    },

    {
      id: 'vincent',
      name: 'Vincent Collet',
      description: `Author-director, performer and visual artist.`,
      descriptionJa: `ディレクター、パフォーマー、ビジュアルアーティスト。`,
      url: 'http://www.theatre-airelibre.fr/',
    },

    {
      id: 'jasmine',
      name: 'Jasmine Shigemura Lee',
      description: `A performer and writer from London, UK.
      She created and performed an original Butoh performance utilizing the architecture of Bridge Studio, using custom-made props and sounds to explore transformation and transcendence.`,
      descriptionJa: `ロンドン出身のパフォーマー、ライター。`,
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/AxewnGvQinnWozh97',
    },

    {
      id: 'august',
      name: 'August Henry Moehrke',
      description: `Visual artist located in New York City.
      He has held multiple exhibitions in Bridge Studio, his latest being "Koyo", which illuminated the autumnal world on painted lanterns, inviting guests to meditate with the fleeting foliage. Previous shows also include "Hanami", exploring the ephemeral beauty of cherry blossoms, and his "Monster Hunter" exploration  into the creation of identity.`,
      descriptionJa: `ニューヨーク拠点のビジュアルアーティスト。`,
      url: 'https://www.augusthenry.com/',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/HrRhMd9dQ9XWLVHv8',
    },

    {
      id: 'momoko',
      name: 'Momoko Watanabe',
      description: `A Japanese artist focusing on dance & body expression.
      She carried out a unique project in which she attempted (successfully) to survive in Kyoto for one month without spending any money whatsoever, trading work, favors, and goodwill for food and life supplies.`,
      descriptionJa: `ダンス、身体表現。`,
      projectAlbumUrl:
        'https://www.instagram.com/nomoney_momoko/',
      showProject: true,
    },
    // {
    //   id: 'waldo',
    //   name: 'Waldo De Keersmaecker',
    //   description: `Architect.`,
    //   descriptionJa: `建築家。`,
    // },
    // {
    //   id: 'anneleen',
    //   name: 'Anneleen Bertels',
    //   description: `Textile designer.`,
    //   descriptionJa: `テキスタイルデザイナー。`,
    // },

    {
      id: 'eliza',
      name: 'Eliza Soroga',
      description: `A site-specific performance artist from Athens.
        She hosted a "performance architecture" workshop, inviting the people of Jodoji to playfully explore the relationship between the body and the built spaces around them.`,
      descriptionJa: 'パフォーミングアーティスト。',
      url: 'http://www.elizasoroga.com/',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/MsT4kyW3MpUJR4df8',
    },

    {
      id: 'juliette',
      name: 'Juliette Pénélope Pépin',
      description: `Artist and researcher.
      As part of her residency, she created a kit to construct papercraft frogs, and invited guests from the neighborhood to build and paint their own. The creations were then 3D-scanned and used as part of a larger digital environment.`,
      descriptionJa: `ペーパークラフトアーティスト、研究者。`,
      url: 'https://juliettepenelope.com/',
      projectAlbumUrl:
        'https://photos.app.goo.gl/fDYNbMjqTyCFnoXt5',
      showProject: true,
    },
    // {
    //   id: 'taina',
    //   name: 'Tainá Guedes',
    //   descriptionJa: `ベルリン 拠点のアーティスト、フードアクティビスト、シェフ`,
    //   description: `Berlin-based artist, food activist, book author and trained cook.`,
    //   url: 'https://entretempo-kitchen-gallery.com/',
    // },

    {
      id: 'harry',
      name: 'Harry Lee',
      description: `Tea / Ceramic / Landscape artist.
      He hosted a "Mystic Tea House", reinvigorating an abandoned machiya with a uniquely curated tea ceromony held amongst a grove of bamboo growing up through the floorboards.`,
      descriptionJa:
        '茶人 / 陶芸家 / ランドスケープアーティスト',
      showProject: true,
      projectAlbumUrl:
        'https://photos.app.goo.gl/J7BEmxqPU2nTMMd77',
    },

    // {
    //   id: 'misa',
    //   name: 'Misa Murata',
    //   description: 'Phytotherapist / Botanical artist',
    //   descriptionJa: '植物療法士／植物表現家',
    //   url: 'https://verseau.me/',
    // },
    // {
    //   id: 'pierre',
    //   name: 'Pierre Verret',
    //   description: 'Michelin-starred chef from Quebec.',
    //   descriptionJa: `ケベック出身のミシュランシェフ`,
    // },
    // {
    //   id: 'uenosono',
    //   name: 'Uenosono Masato',
    //   description: 'Architect and project director.',
    //   descriptionJa: `建築家・プロジェクトディレクター`,
    // },
    // {
    //   id: 'kanako',
    //   name: 'Kanako Shintaku',
    //   description: 'Visual and sculptural artist.',
    //   descriptionJa: `身体表現を行うアーティスト`,
    //   url: 'https://www.shintakukanako.com/',
    // },

    {
      id: 'eva',
      name: 'Eva Ešnerová',
      description: `Urban strategic planner and researcher from Prague, Czechia.`,
      descriptionJa: `チェコ出身の都市戦略プランナー`,
      url: 'https://camp.ofcn.cz/en/index.html',
    },
  ],
}

// {
//   id: 'severin',
//   name: 'Studio B Severin',
//   description:
//     'Berlin-based design studio exploring culture and society.',
//   descriptionJa: `ベルリン拠点のデザインスタジオ`,
//   url: 'https://studiobseverin.com/',
// },
// {
//   id: 'cleo',
//   name: 'Cléo Verstrepen',
//   description: `Graduate in cultural studies preparing research community art spaces.`,
//   descriptionJa: `コミュニティ・アート・スペースのリサーチャー`,
//   url: 'https://www.instagram.com/cleoverstrepen/',
// },
