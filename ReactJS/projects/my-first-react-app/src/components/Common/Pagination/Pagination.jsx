import React, {useState, useEffect} from "react";
import s from "./Pagination.module.css";

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    useEffect(() => onPageChanged(leftPortionNumber), [portionNumber])
    return (
        <div className={s.pagination}>
            {portionNumber > 1
                ? <div style={{display: "inline-block"}}>
                    <button onClick={() => setPortionNumber(1)}>First</button>
                    <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
                </div> : ''}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((page, i) => {
                    return <span onClick={() => {
                        onPageChanged(page)
                    }} className={`page_number ${page === currentPage ? s.selectedPage : ''}`} key={i}>{page}</span>

                })}
            {}
            {portionCount > portionNumber
                ? <div style={{display: "inline-block"}}>
                    <span style={{cursor: "default"}}>...{pagesCount}</span>
                    <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
                    <button onClick={() => setPortionNumber(portionCount)}>Last</button>
                </div>
                : ''}

        </div>
    )
}
export default Pagination