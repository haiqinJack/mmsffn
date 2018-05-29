import config from '../config'

const RETURN_CODES = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export function wechatValidate(data) {
	data = formatData(data)
  console.log(data)
  if (data.return_code == RETURN_CODES.FAIL) {
    return false
  } else if (data.result_code == RETURN_CODES.FAIL) {
    return false
  } else if (data.appid && config.wechat.appId !== data.appid) {
    return false
  } else if (data.mch_id && config.shop.mchId !== data.mch_id) {
    return false
  } else {
    return data
  }
}

export function formatData(data) {
	let obj = {}
	for(var k in data) {
		obj[k] = data[k][0]
	}
	return obj
}
