import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.pagination}>
            {pages.map((page, i) => {
                if (page <= 10) {
                    return <span onClick={() => {
                        onPageChanged(page)
                    }} className={`page_number ${page === currentPage ? s.selectedPage : ''}`} key={i}>{page}</span>
                }
                return false
            })}
            <span>(-<i>{totalUsersCount}</i>-)</span>
        </div>
    )
}
export default Pagination