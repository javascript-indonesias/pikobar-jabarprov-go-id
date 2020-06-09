function handleImport (module) {
  return module ? module.default || module : {}
}

export const isJsonKotaReady = () => import(
  /* webpackChunkName: "json-kotaV2" */
  /* webpackMode: 'lazy' */
  '@/assets/kotaV2.json')
  .then(handleImport)
export const isJsonKecamatanReady = () => import(
  /* webpackChunkName: "json-kecamatanV2" */
  /* webpackMode: 'lazy' */
  '@/assets/kecamatanV2.json')
  .then(handleImport)
export const isJsonKelurahanReady = () => import(
  /* webpackChunkName: "json-kelurahanV2" */
  /* webpackMode: 'lazy' */
  '@/assets/kelurahanV2.json')
  .then(handleImport)