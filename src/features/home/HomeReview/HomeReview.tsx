import { Element } from 'react-scroll';

export default function HomeReview() {
  return (
    <Element
      id="program"
      name="program"
      className="element p-2 pt-20 sm:relative sm:mx-auto sm:p-0 sm:pt-40"
    >
      <div className="sm:aspect-auto relative flex justify-center bg-cover bg-center sm:mt-0 sm:flex-1 sm:bg-none">
        <div className="absolute inset-0 bg-white opacity-50 sm:hidden" />
        <div className="z-10 flex flex-col justify-center gap-8 sm:gap-16 sm:p-0">
          <div className="text-center text-2xl font-extrabold sm:text-4xl">
            BEST REVIEW
          </div>
          <div className="flex flex-col gap-8 sm:gap-14">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div>
                <div className="avatar placeholder">
                  <div className="w-16 rounded-full bg-neutral text-neutral-content">
                    <span className="text-xl">AI</span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
