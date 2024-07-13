import s from './Contact.module.css'

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <li className={s.item}>
            <p>{name}: {number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
    );
};

export default Contact;
