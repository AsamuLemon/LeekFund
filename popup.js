function jsonpgz(data) {
  return data;
}
let idArr = ['005827', '162605', '004746', '519736', '163406', '161725', '001475']
// let idArr = ['005827', '161725']
let i = 0;
function getFundData(){
  console.log('执行了')
  let id = idArr[i]
  // console.log('11111111:',$('.input').val())
  // let id = $('.input').val()
  let url = `https://fundgz.1234567.com.cn/js/${id}.js?rt=1527344754062`
  console.log('url:',url)
  $.ajax({
    type: "get",
    url: url,
    dataType:'jsonp',
    jsonp:'callback',
    jsonpCallback:"jsonpgz",
    success: function(data) {
      console.log('成功了')
      //这里就可以将data当作是JSON对象来直接调用属性来使用了
      $('.table').append(
        `<tr>
          <td class="id">${data.fundcode}</td>
          <td class="name">${data.name}</td>
          <td class="net-value">${data.dwjz}</td>
          <td class="valuation">${data.gsz}</td>
          <td class="increase ${data.gszzl<0?'green':data.gszzl==0?'gray':'red'}">${data.gszzl > 0 ? ('+'+data.gszzl) : data.gszzl} </td>
          <td class="fresh-time">${data.gztime}</td>
        </tr>`
      )
      if(i<idArr.length-1){
        i++
        getFundData()
      }
    },
    error: function(){
      console.log('fail');
    }
  });
}
getFundData()
