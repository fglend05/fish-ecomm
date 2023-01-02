import React from "react";

const Edit = ({ open, onClose }) => {
  if (!open) return null;
  return (
    // Modal
    <div>
      <div
        tabindex="-1"
        aria-hidden="true"
        className="bg-[rgba(0,0,0,0.5)] fixed top-[50%] left-[50%] z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative mx-auto w-full h-full max-w-md md:h-auto">
          {/* Modal COntent */}
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ray-800 -white"
              data-modal-toggle="authentication-modal"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 ">Edit Item</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
