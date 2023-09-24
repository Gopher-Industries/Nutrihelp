const setCookie = (res, name, value, options) => {
    res.cookie(name, value, options);
  };
  
  const getCookie = (req, name) => {
    return req.cookies[name];
  };
  
  const clearCookie = (res, name) => {
    res.clearCookie(name);
  };
  
  module.exports = {
    setCookie,
    getCookie,
    clearCookie
  };
  