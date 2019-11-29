// api请求地址
var baseUrl = 'http://localhost/yishiyuan/api.php';
// 获取短信验证码及验证地址
var verifyUrl = 'http://localhost/reqOtherApi/index.php';

// post请求
function $post(action, params) {
  params['action'] = action;
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: baseUrl,
      type: 'POST',
      data: params,
      success: function (res) {
        resolve(res);
      },
      error: function (res) {
        reject(res);
      }
    });
  });
}

// get请求
function $get(action, params) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: baseUrl + '?action=' + action,
      type: 'GET',
      data: JSON.stringify(params),
      success: function (res) {
        resolve(res);
      },
      error: function (res) {
        reject(res);
      }
    });
  });
}

// 获取手机验证码
function getVerifyCode(phone) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: verifyUrl + '?type=5&mobile=' + phone,
      type: 'GET',
      success: function (res) {
        resolve(res);
      },
      error: function (err) {
        reject(err);
      }
    });
  });
}

// 验证手机验证码
function checkVerifyCode(phone, code) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: verifyUrl + '?type=6&mobile='+ phone + '&code=' + code,
      type: 'GET',
      success: function (res) {
        resolve(res);
      },
      error: function (err) {
        reject(err);
      }
    });
  });
}