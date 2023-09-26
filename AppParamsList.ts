export type AppParamsList = {
  Home: undefined;
  About: undefined;
  Downloads: undefined;
  Login: undefined;
  Logout: undefined;
};

export const AppParamsLinking = {
  prefixes: ["https://tobesrl.github.io/SDKDownload/"],
  screens: {
    Home: { path: "home" },
    About: { path: "about" },
    Downloads: { path: "downloads" },
    Login: { path: "login" },
    Logout: { path: "logout" },
  },
};
