// Styless
declare module "*.module.css";
declare module "*.module.scss";
declare module "*.module.sass";
declare module "*.module.less";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }