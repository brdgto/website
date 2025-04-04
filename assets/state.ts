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
