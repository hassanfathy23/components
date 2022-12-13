import Title from "./Title";

type AppProps = {
  children: React.ReactNode
}

function ButtonsList({ children }: AppProps) {
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
