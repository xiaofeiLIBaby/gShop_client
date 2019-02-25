import ajax from './ajax'

export const reqAddress = (longitude, latitude) => ajax(`api/position/${latitude},${longitude}`)
export const reqCategory = () => ajax('api/index_category')
export const reqShop = ({longitude, latitude}) => ajax('api/shops', {latitude, longitude})
