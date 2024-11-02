import { MdOpenInNew } from 'react-icons/md';

export default function HomeReviewCardSkelton() {
  return (
    <div className="card h-[485px] bg-base-200 shadow-md">
      <button className="absolute right-3 top-3">
        <MdOpenInNew className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </button>
      <div className="flex w-full items-center gap-4 px-8 pt-8">
        <div className="avatar">
          <div className="skeleton h-14 w-14 rounded-full bg-base-300"></div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1">
          <div className="skeleton h-[19.5px] w-full"></div>
          <div className="skeleton h-4 w-1/5 text-gray-500 dark:text-gray-400"></div>
          <div className="rating">
            <input
              type="radio"
              name="rating"
              readOnly
              className="mask mask-star-2 skeleton h-5 w-5"
            />
            <input
              type="radio"
              name="rating"
              readOnly
              className="mask mask-star-2 skeleton h-5 w-5"
            />
            <input
              type="radio"
              name="rating"
              readOnly
              className="mask mask-star-2 skeleton h-5 w-5"
            />
            <input
              type="radio"
              name="rating"
              readOnly
              className="mask mask-star-2 skeleton h-5 w-5"
            />
            <input
              type="radio"
              name="rating"
              readOnly
              className="mask mask-star-2 skeleton h-5 w-5"
              checked
            />
          </div>
        </div>
      </div>
      <div className="card-body px-8 pb-8 pt-6">
        <div className="skeleton h-full w-full"></div>
      </div>
    </div>
  );
}
