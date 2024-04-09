export const Container = ({ children }) => {
  return (
    <div className="container max-w-[1600px] mx-auto my-0 max-[576px]:px-2 px-10 h-auto">
      {children}
    </div>
  );
};
