import config from '../config'

const RETURN_CODES = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export function wechatValidate(data) {
	let error = null
	data = formatData(data)
  if (data.return_code == RETURN_CODES.FAIL) {
    throw new Error('ProtocolError')
  } else if (data.result_code == RETURN_CODES.FAIL) {
    throw new Error('BusinessError')
  } else if (data.appid && config.appId !== data.appid) {
    throw new Error('InvalidAppId')
  } else if (data.mch_id && config.mchId !== data.mch_id) {
    throw new Error('InvalidMchId')
  } 
}

export function formatData(data) {
	let obj = {}
	for(var k in data) {
		obj[k] = data[k][0]
	}
	return obj
}
