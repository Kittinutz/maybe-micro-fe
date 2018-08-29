const fp = require('lodash/fp')
const lazadaFlashSale = require('../fixtures/lazada-flash-sale.json')
const { filterNeededFlashSaleItems } = require('./lazada')
describe('transform/lazada', () => {
  it('.filterNeededFlashSaleItems', () => {
    expect(
      fp.keys(filterNeededFlashSaleItems(lazadaFlashSale)[0])
    ).toEqual([
      'flashSaleId',
      'itemChannelStockCode',
      'allSkuIds',
      'itemCurrentStock',
      'entityType',
      'itemTotalStock',
      'itemCutPrice',
      'itemSoldRatio',
      'currency',
      'id',
      'itemHaveStock',
      'baseSkuID',
      'itemImg',
      'skuId',
      'installmentEligible',
      'itemTitle',
      'sortIndex',
      'seller_is_approved',
      'itemSoldCntAll',
      'status',
      'nid',
      'itemSoldCnt',
      'itemDiscountPrice',
      'sku',
      'itemId',
      'itemPrice',
      'resolvedStatus',
      'groupId',
      'itemSoldCntMonth',
      'seller_is_holiday',
      'isCurrencyLeft',
      'itemSoldCntWeek',
      'skus',
      'itemDiscount',
      'itemActPrice',
      'itemStock',
      'itemUrl'
    ])
  })
})
