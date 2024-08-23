import { Form, Button } from 'react-bootstrap';
import './searchBar.css';


function SearchBar() {

    return (
        <>
            <div className="search-bar">
                <Form
                    className="search-form d-flex align-items-center"
                    method="POST"
                    action="#"
                >
                    <Button type="submit" variant="outline-light" className="search-button">
                        <i className="bi bi-search text-black"></i>
                    </Button>
                    <input
                        type="text"
                        name="query"
                        placeholder="Search..."
                        title="Enter serach keyword"
                    />
                </Form>
            </div>
        </>
    );
};

export default SearchBar;