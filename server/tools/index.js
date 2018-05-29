import config from '../config'

const RETURN_CODES = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export function wechatValidate(data) {
	data = formatData(data)
  
  if (data.return_code == RETURN_CODES.FAIL) {
    return false
  } else if (data.result_code == RETURN_CODES.FAIL) {
    return false
  } else if (config.wechat.appID !== data.appid) {
    return false
  } else if (config.shop.mchId !== data.mch_id) {
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
