export const Container = ({ children }) => {
  return (
    <div className="max-w-[1600px] w-full mx-auto my-0 max-[576px]:px-2 px-5 h-auto">
      {children}
    </div>
  );
};
