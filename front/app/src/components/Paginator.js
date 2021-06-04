import { useState, useEffect } from "react";

export function Paginator(props) {
  const {
    data,
    RenderComponent,
    pageLimit,
    dataLimit,
    RenderComponentHandleClick,
  } = props;
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = () => startIndex + dataLimit;

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIdx = startIndex;
    return data.slice(startIdx, endIndex(startIndex));
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  const activeStyles =
    "z-10 bg-indigo-50 border-secondary text-secondary relative inline-flex items-center px-4 py-2 border text-sm font-medium ";
  const unselectedStyles =
    "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium ";

  return (
    <>
      {getPaginatedData().map((product) => (
        <RenderComponent
          key={product.id_product}
          product={product}
          handleClick={() => RenderComponentHandleClick(product)}
        />
      ))}
      <div className="w-full bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={goToPreviousPage}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={goToNextPage}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">{endIndex(startIndex)}</span> of{" "}
              <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={goToPreviousPage}
                className={
                  currentPage === 1
                    ? `${unselectedStyles} pointer-events-none`
                    : unselectedStyles
                }
              >
                <span className="sr-only">Previous</span>
                {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
                {"<"}
              </button>
              {getPaginationGroup().map((item, index) => (
                <button
                  key={index}
                  onClick={changePage}
                  className={
                    currentPage === item ? activeStyles : unselectedStyles
                  }
                >
                  <span>{item}</span>
                </button>
              ))}

              <button
                onClick={goToNextPage}
                className={
                  currentPage === pages
                    ? `${unselectedStyles} pointer-events-none`
                    : unselectedStyles
                }
              >
                <span className="sr-only">Next</span>
                {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
                {">"}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
