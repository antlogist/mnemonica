function setParams(config) {
  const params = config.params || {};
  const data = config.data || {};
  config.params = Object.assign(params, {});
  config.data = Object.assign(data, {
    status: "private"
  });
  config.headers["Authorization"] = localStorage.mnemonicaToken;

  // If user try to login
  const isLoginURL = config.url.includes("login");
  if (isLoginURL) {
    // Create a title for the login post
    const date = new Date();
    const sec = date.getTime() + 3600000 * 3; // Moscow time
    const currentDate = new Date(sec);
    const title = currentDate
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");

    config.data = Object.assign(data, {
      title: title
    });
  }

  return config;
}

function returnData(res) {
  return res.data;
}

function onError(err) {
  console.dir(err);
  return Promise.reject(err);
}

export default function(axios) {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(returnData, onError);
}
