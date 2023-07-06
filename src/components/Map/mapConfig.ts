const mapConfig = {
  zoomControl: window.innerWidth > 768,
  zoomControlOptions: {
    position: document.documentElement.lang === 'he'
      ? 6.0
      : 9.0,
  },
  streetViewControl: false,
  fullscreenControl: false,
  mapTypeControl: false,
  clickableIcons: false,
  styles: []
}

export default mapConfig
