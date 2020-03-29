const axios = require("axios");
const http = axios.create({
  timeout: 3000
});

let a = async function getdata(url) {
  let theurl = `http:/${url}`;

  return await http
    .get(theurl)
    .then(response => [response.status, response.data])
    .catch(error => {
      // console.log('出现错误', error);
      // if (error.response === undefined) {
      //     return '链接超时'
      // }
      return [error.status, error.data];
    });
};
module.exports = a;
