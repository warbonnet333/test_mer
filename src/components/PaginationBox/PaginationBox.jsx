import React from "react"
import style from "./PaginayionBox.module.css"

const PaginationBox = ({ page, arr = [], nextPage, prevPage }) => {

  const lastPage = Math.ceil(arr.length / 5) - 1

  const onPrevClick = () => {
    if (!page) {
      return
    }
    prevPage()
  }

  const onNextClick = () => {
    if (page === lastPage) {
      return
    }
    nextPage()
  }

  return (
    <div className={style.container}>
      <button className={style.paginBtn} onClick={onPrevClick}>
        <svg className={!page ? style.paginBtnDisable : style.paginBtnPrev} viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2L3 14L15 26" stroke="#00a0dc" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </button>
      <button className={style.paginBtn} onClick={onNextClick}>
        <svg className={page !== lastPage ? style.paginBtnNext : style.paginBtnNextDis} viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L14 14L2 26" stroke="#00a0dc" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}

export default PaginationBox