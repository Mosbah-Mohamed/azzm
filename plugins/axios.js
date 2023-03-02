// axios config

export default function ({ $axios, redirect, store, app }) {
  $axios.onRequest((config) => {
    // ? add accepted language

    console.log(app.i18n.locale);
    config.headers.common["Accept-Language"] = app.i18n.locale;

    // ? add token to each request

    // const { token } = store.state

    // if (token) {
    //   config.headers.common.Authorization = `Bearer ${token}`
    // }

    // ? add basic auth to protect apis

    // const username = "dzit_Elryad223";
    // const password = "elryad223@";
    // config.auth = { username, password };

    console.log("Making request to " + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400 || code === 404) {
      redirect("/404");
    }
  });
}
