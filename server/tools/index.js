import config from '../config'

const RETURN_CODES = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export function wechatValidate(data) {
	let error = null
	data = formatData(data)
  if (data.return_code == RETURN_CODES.FAIL) {
    error = new Error(data.return_msg);
    error.name = 'ProtocolError';
  } else if (data.result_code == RETURN_CODES.FAIL) {
    error = new Error(data.err_code);
    error.name = 'BusinessError';
  } else if (data.appid && config.appId !== data.appid) {
    error = new Error();
    error.name = 'InvalidAppId';
  } else if (data.mch_id && config.mchId !== data.mch_id) {
    error = new Error();
    error.name = 'InvalidMchId';
  } 
}

export function formatData(data) {
	let obj = {}
	for(var k in data) {
		obj[k] = data[k][0]
	}
	return obj
}
