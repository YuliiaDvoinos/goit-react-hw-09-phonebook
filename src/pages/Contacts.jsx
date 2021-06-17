import styles from "./common.module.css";
import background from "../images/background.jpeg";
//redux imports
import { useDispatch, useSelector } from "react-redux";
import { operations, getLoading } from "../redux/ContactsBook";
//components imports
import Container from "../components/Container";
import Form from "../components/PhoneBook/Form";
import ContactsList from "../components/PhoneBook/ContactsList/index";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoadingContacts = useSelector(getLoading);
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoadingContacts && <Spinner />}

      <div
        style={{ backgroundImage: `url(${background})` }}
        className={`${styles.greetingContainer} ${styles.contactsBookContainer}`}
      >
        <Form />
        <ContactsList />
      </div>
    </Container>
  );
}

// const mapStateToProps = (state) => ({
//   isLoadingContacts: getLoading(state),
// });
// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(operations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
