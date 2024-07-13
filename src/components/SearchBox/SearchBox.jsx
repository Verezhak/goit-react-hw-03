import s from './SearchBox.module.css'

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={s.searchBox}>
            <label>
                Find contacts by name
                <input type="text" value={value} onChange={onChange} />
            </label>
        </div>
    );
};

export default SearchBox;

