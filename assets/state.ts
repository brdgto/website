export const mobile = computed(() => winSize.value[0] < 768)
export const fullscreen = ref(false)
export const winSize: Ref<[number, number]> = ref([
  1200, 1200,
])
export const dev = computed(() =>
  useRoute().fullPath.includes('localhost'),
)
export const windowScroll = ref(0)
export const mousePos = ref([0, 0])

export const openCall = ref(true)
export const ipInfo: Ref<IpInfo | null> = ref(null)

export const pm = computed(() => {
  if (!ipInfo.value) return 1

  // North America
  if (ipInfo.value.continent_code === 'NA') return 1.4
  // Europe
  if (ipInfo.value.continent_code === 'EU') return 1.4
  // Asia
  if (ipInfo.value.continent_code === 'AS') {
    // Japan
    if (ipInfo.value.country_code === 'JP') return 1
    // South Korea
    if (ipInfo.value.country_code === 'KR') return 1
    // China
    if (ipInfo.value.country_code === 'CN') return 1
    // Hong Kong
    if (ipInfo.value.country_code === 'HK') return 1
    // Taiwan
    if (ipInfo.value.country_code === 'TW') return 1
    // Vietnam
    if (ipInfo.value.country_code === 'VN') return 0.8
    // Indonesia
    if (ipInfo.value.country_code === 'ID') return 0.8
    // Philippines
    if (ipInfo.value.country_code === 'PH') return 0.8
    // Thailand
    if (ipInfo.value.country_code === 'TH') return 0.8
    // Malaysia
    if (ipInfo.value.country_code === 'MY') return 0.8
    // India
    if (ipInfo.value.country_code === 'IN') return 1
    // Singapore
    if (ipInfo.value.country_code === 'SG') return 1

    return 1
  }
  // Africa
  if (ipInfo.value.continent_code === 'AF') {
    // North Africa
    if (ipInfo.value.longitude > 25) return 1
    // Sahara and Below
    else return 0.7
  }
  // South America
  if (ipInfo.value.continent_code === 'SA') return 0.8
  // Oceania
  if (ipInfo.value.continent_code === 'OC') return 1

  return 1
})

interface IpInfo {
  asn: string
  city: string
  continent_code: string
  country: string
  country_area: number
  country_calling_code: string
  country_capital: string
  country_code: string
  country_code_iso3: string
  country_name: string
  country_population: number
  country_tld: string
  currency: string
  currency_name: string
  in_eu: boolean
  ip: string
  languages: string
  latitude: number
  longitude: number
  network: string
  org: string
  postal: string
  region: string
  region_code: string
  timezone: string
  utc_offset: string
  version: string
}

/*
  asn: "AS2518"
  city: "Naha"
  continent_code: "AS"
  country: "JP"
  country_area: 377835
  country_calling_code: "+81"
  country_capital: "Tokyo"
  country_code: "JP"
  country_code_iso3: "JPN"
  country_name: "Japan"
  country_population: 126529100
  country_tld: ".jp"
  currency: "JPY"
  currency_name: "Yen"
  in_eu: false
  ip: "60.239.90.164"
  languages: "ja"
  latitude: 26.2124
  longitude: 127.6757
  network: "60.239.80.0/20"
  org: "BIGLOBE Inc."
  postal: "900-0021"
  region: "Okinawa"
  region_code: "47"
  timezone: "Asia/Tokyo"
  utc_offset: "+0900"
  version: "IPv4"
 */
