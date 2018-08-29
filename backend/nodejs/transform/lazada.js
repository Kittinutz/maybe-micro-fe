const fp = require('lodash/fp')

const transformLazadaFlashSale = fp.flow(
  fp.get('data.resultValue'),
  fp.flow(
    fp.map(fp.get('data')),
    fp.flatten
  )
)

const flatMapLazadaFlashSaleItems = fp.flatMap((sale) => {
  const id = fp.get('id', sale)
  const items = fp.get('items', sale)
  return fp.map(fp.assign({ flashSaleId: id }), items)
})

const filterLazadaFlashSaleItems = byKey => filterFn =>
  fp.flow(
    fp.filter(
      fp.flow(
        fp.get(byKey),
        fp.toLower,
        filterFn
      )
    )
  )

const filterNeededFlashSaleItems = fp.flow(
  transformLazadaFlashSale,
  flatMapLazadaFlashSaleItems,
  filterLazadaFlashSaleItems('itemDiscountPrice')(
    fp.flow(
      fp.replace(/,/gi, ''),
      fp.toFinite,
      fp.lt(2000)
    )
  )
)

module.exports = {
  transformLazadaFlashSale,
  flatMapLazadaFlashSaleItems,
  filterNeededFlashSaleItems,
}
