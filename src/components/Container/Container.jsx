import ContainerStyles from "./container.module.css";

export default function Container({ children }) {
  return <div className={ContainerStyles.container}>{children}</div>;
}
