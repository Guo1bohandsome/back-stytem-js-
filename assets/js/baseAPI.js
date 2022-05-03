$.ajaxPrefilter(function(options) {

  options.url = 'http://api-breakingnews-web.itheima.net' + options.url
  console.log(options.url);

  options.complete = function(res) {

    //   console.log('执行了complete回调');
    //   console.log(res);
    if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败!') {
      localStorage.removeItem('token')
      location.href = '/login.html'
    }
  }
})