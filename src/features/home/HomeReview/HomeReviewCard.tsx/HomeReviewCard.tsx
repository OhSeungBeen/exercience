import { ImUser } from 'react-icons/im';
import { MdOpenInNew } from 'react-icons/md';

type Props = {
  title: string;
  writer: string;
  content: string;
};

export default function HomeReviewCard({ title, writer, content }: Props) {
  return (
    <div className="card h-[485px] cursor-pointer overflow-hidden break-normal bg-base-200 shadow-md hover:!-translate-y-2">
      <button className="absolute right-3 top-3">
        <MdOpenInNew className="h-5 w-5 text-gray-500" />
      </button>
      <div className="flex items-center gap-4 px-8 pt-8">
        <div className="avatar placeholder">
          <div className="relative flex h-14 w-14 overflow-hidden rounded-full bg-base-300">
            <ImUser className="absolute -bottom-1 h-14 w-14 text-base-100" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1">
          <div className="text-[13px] font-bold">{title}</div>
          <div className="text-xs text-gray-500">{writer}</div>
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
      <div className="card-body px-8 pb-8 pt-6">
        <div
          className="line-clamp-[19] text-[11px]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
