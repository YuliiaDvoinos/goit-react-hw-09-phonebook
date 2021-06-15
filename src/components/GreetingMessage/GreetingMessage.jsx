import styles from "../../pages/common.module.css";
import background from "../../images/background.jpeg";
const GreetingMessage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={styles.greetingContainer}
    >
      <h1 className={styles.greetingTitle}>Hi, I'm your phonebook</h1>
      <p className={styles.greetingDescr}>
        and I will help you to save any phone number
      </p>
    </div>
  );
};
export default GreetingMessage;
