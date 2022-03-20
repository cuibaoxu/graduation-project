/*
 * @Author: cuibx
 * @Date: 2022-03-20 18:55:21
 * @Description: 表格配置
 */
export const contentTableConfig = {
  title: '商品列表',
  // newBtnTitle: '新建商品',
  columns: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '80', slotName: 'newPrice' },
    { prop: 'desc', label: '商品描述', minWidth: '100' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'imageSlot' },
    { prop: 'inventoryCount', label: '库存（件）', minWidth: '100' },
    { prop: 'saleCount', label: '销量（件）', minWidth: '100' },
    { prop: 'favorCount', label: '收藏（件）', minWidth: '100' },
    { prop: 'address', label: '地址', minWidth: '80' },
    { prop: 'createAt', label: '创建时间', minWidth: '220', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '220', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
