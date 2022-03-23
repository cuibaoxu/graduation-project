/*
 * @Author: cuibx
 * @Date: 2022-03-23 14:08:55
 * @Description: 经纬度
 */
import { coordinateData } from './coordinate-data'

export const convertData = (data: any) => {
  const res = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
