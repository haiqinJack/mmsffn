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
  } else if (data.appid && config.appId !== data.appid) {
    return false
  } else if (data.mch_id && config.mchId !== data.mch_id) {
    return false
  } 
  return true
}

export function formatData(data) {
	let obj = {}
	for(var k in data) {
		obj[k] = data[k][0]
	}
	return obj
}
