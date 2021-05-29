// pages/_app.js
export function reportWebVitals(metric) {
  console.log(`[WEB-VITALS-${metric?.label}]:`, metric)
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp