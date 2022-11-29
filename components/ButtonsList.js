import Title from "./Title";

function ButtonsList({ children }) {
  return (
    <>
      <Title title="Button Components" />
      <div className="w-9/12 flex flex-row gap-2 flex-wrap justify-center items-center">
        {children}
      </div>
    </>
  );
}

export default ButtonsList;
