import React, { forwardRef } from 'react';
import { BsXLg } from 'react-icons/bs';
import { ImUser } from 'react-icons/im';

type Props = {
  title: string;
  name: string;
  content: string;
};

const HomeReviewModal = forwardRef<HTMLDialogElement, Props>(
  ({ title, name, content }, ref) => {
    return (
      <dialog
        ref={ref}
        id="home-review-modal"
        className="modal modal-top sm:modal-middle"
        data-lenis-prevent
      >
        <div className="card modal-box h-screen max-h-screen cursor-pointer overflow-auto break-normal rounded-none bg-base-100 p-0 sm:h-auto sm:max-h-[calc(100vh-5rem)]">
          <form method="dialog">
            <button className="absolute right-3 top-3">
              <BsXLg className="h-5 w-5 text-gray-500" />
            </button>
          </form>
          <div className="flex items-center gap-4 px-8 pt-8">
            <div className="avatar placeholder">
              <div className="relative flex h-14 w-14 overflow-hidden rounded-full bg-base-300">
                <ImUser className="absolute -bottom-1 h-14 w-14 text-base-100" />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1">
              <div className="text-[13px] font-bold">{title}</div>
              <div className="text-xs text-gray-500">{name}</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating"
                  readOnly
                  className="mask mask-star-2 h-5 w-5 bg-primary"
                />
                <input
                  type="radio"
                  name="rating"
                  readOnly
                  className="mask mask-star-2 h-5 w-5 bg-primary"
                />
                <input
                  type="radio"
                  name="rating"
                  readOnly
                  className="mask mask-star-2 h-5 w-5 bg-primary"
                />
                <input
                  type="radio"
                  name="rating"
                  readOnly
                  className="mask mask-star-2 h-5 w-5 bg-primary"
                />
                <input
                  type="radio"
                  name="rating"
                  readOnly
                  className="mask mask-star-2 h-5 w-5 bg-primary"
                  checked
                />
              </div>
            </div>
          </div>
          <div className="card-body px-8 pb-2 pt-6">
            <div
              className="text-[11px]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    );
  },
);

HomeReviewModal.displayName = 'HomeReviewModal';

export default HomeReviewModal;
