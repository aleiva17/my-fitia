import { ReactElement } from "react";

export const AvatarCard = (): ReactElement => {
  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center min-w-20">
        <div className="rounded-full p-0.5 bg-white">
          <img
            className="rounded-full w-10 h-auto"
            src="https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg"
            alt="icon"
          />
        </div>
      </div>
      <div className="text-white text-nowrap">
        <p className="font-semibold">Vitaliy Dorozhko</p>
        <p className="text-sm text-neutral-200">Full-Stack Engineer</p>
      </div>
    </div>
  );
};