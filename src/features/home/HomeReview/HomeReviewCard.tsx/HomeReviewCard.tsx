import { BsPerson } from 'react-icons/bs';

type Props = {
  title: string;
  name: string;
  content: string;
};

export default function HomeReviewCard({ title, name, content }: Props) {
  return (
    <div className="card h-[400px] overflow-hidden bg-base-100 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <div className="flex gap-4 pl-4 pr-4 pt-4">
        <div className="avatar placeholder flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-neutral text-neutral-content">
            <BsPerson className="h-8 w-8" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1">
          <div className="text-[13px] font-semibold">{title}</div>
          <div className="text-xs">{name}</div>
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
      <div className="card-body p-4">
        <div
          className="line-clamp-[17] text-[11px]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
