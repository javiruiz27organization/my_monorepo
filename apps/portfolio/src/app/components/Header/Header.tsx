import { HeaderRoutes } from './HeaderRoutes';

const GIFT_URL =
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWFicTRyc3Vjb2JiZHl1anA4a3gyaGpld3RhdXpyeDE0Y2lnNWd3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/br99SojJZ5rlfSYset/giphy.gif';

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center h-28 text-center px-12 bg-white shadow-md z-[9999]">
      <div className="flex items-center gap-4">
        <img
          src={GIFT_URL}
          alt="Animated Gif"
          className="w-16 h-16 rounded-full"
        />
        <h1 className="text-2xl font-bold">JAVIER RUIZ</h1>
      </div>
      <div>
        <HeaderRoutes />
      </div>
    </div>
  );
};
