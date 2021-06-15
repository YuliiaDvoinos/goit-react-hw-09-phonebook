import styles from "./common.module.css";
import background from "../images/background.jpeg";

//redux imports
import { connect } from "react-redux";
import { operations, getLoading } from "../redux/ContactsBook";
//components imports
import { Component } from "react";
import Container from "../components/Container";
import Form from "../components/PhoneBook/Form";
import ContactsList from "../components/PhoneBook/ContactsList/index";
import Spinner from "../components/Spinner";
class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Container>
        {this.props.isLoadingContacts && <Spinner />}

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
}
const mapStateToProps = (state) => ({
  isLoadingContacts: getLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
