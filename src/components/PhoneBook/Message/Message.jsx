import { createUseStyles } from "react-jss";
const tablet = 768;
const laptop = 1024;
const useStyles = createUseStyles({
  messageContainer: {
    outline: "1px solid cadetblue",
    backgroundColor: "#d5e2ea",
    marginTop: 20,
    padding: 10,
    minHeight: 100,
  },
  message: {
    textAlign: "center",
    marginTop: 10,
  },
  contactsTitle: {
    textAlign: "center",
    marginTop: 10,
    color: "#3e7671",
  },
  [`@media (min-width: ${tablet}px)`]: {
    messageContainer: {
      width: 290,
      margin: 0,
      padding: "10px 30px ",
      background: "transparent",
    },
    contactsTitle: {
      margin: 0,
    },
  },
  [`@media (min-width: ${laptop}px)`]: {
    messageContainer: {
      width: 390,
    },
  },
});
const Message = () => {
  const classes = useStyles();
  return (
    <div className={classes.messageContainer}>
      <h2 className={classes.contactsTitle}>Contacts:</h2>
      <p className={classes.message}>You haven't any contacts </p>
    </div>
  );
};

export default Message;
