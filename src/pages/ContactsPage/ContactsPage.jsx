import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import module from "./ContactsPage.module.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { selectLoading, selectMessage } from "../../redux/contacts/selectors";
import { selectError } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("The contacts were successfully update!");
  };

  useEffect(() => {
    dispatch(fetchContacts());
    if (message === true) {
      notify();
    }
  }, [dispatch, message]);

  return (
    <div className={module.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={module.contactDiv}>
        <ContactForm />
        <div className={module.listDiv}>
          <SearchBox />
          {loading && <p className={module.loading}>Contacts are loading...</p>}
          {error && <p className={module.loading}>Error: {error}</p>}
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
