import ContainerStyles from "./container.module.css";

const Container = ({ children }) => (
  <div className={ContainerStyles.container}>{children}</div>
);

export default Container;
