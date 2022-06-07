
import react, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStarwarList, getStarWarInfo } from '../../redux/actions/index'
import { MDBDataTableV5 } from 'mdbreact';
import { Table, Spinner } from 'react-bootstrap';
import { useNavigate, createSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const itemsPerPage = 3;

function StarwarList() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const starwarData = useSelector((state) => state.startwar)
    const dispatch = useDispatch();
    const [tableData, setTableData] = useState([]);
    const navigation = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageOffset, setPageOffset] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const handlePageClick = (event) => {
        console.log("event.selected",event.selected,event)
        dispatch(getStarwarList(event.selected + 1))
        const newOffset = (event.selected * 10) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        console.log("newOffset", newOffset)
        setItemOffset(newOffset);
    };




    useEffect(() => {
        dispatch(getStarwarList())
    }, []);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
      }, [itemOffset,itemsPerPage]);


    const handleUserprofile = (url, id) => {
        console.log("hii userId", url);
        dispatch(getStarWarInfo(url))
        navigation('/starwar-info', {
            state: {
                id: id,
            }
        })

    }

  

    if (starwarData.loading == true) {
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }





        return (
            <div className='table-css'>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Birth Year</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {starwarData.starwarsList  && Array.isArray(starwarData.starwarsList.results) && starwarData.starwarsList.results.map((ele, index) =>
                            <tr key={index} onClick={() => handleUserprofile(ele.url, index + 1)}>
                                <td>{index + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.birth_year}</td>
                                <td>{ele.height}</td>
                                <td>{ele.mass}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                /> */}
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeClassName="active"
                    forcePage={pageOffset}
                />

            </div>
        )
    
}


export default StarwarList;