import Presenter from ".";
import { TViewProps } from "./types";

const MyComp = ({ isMobile }: TViewProps) => {
  const { title, paragraph, onClick } = Presenter({ isMobile });
  return (
    <>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      {isMobile && <span>Só sou exibido no mobile</span>}
      <br />
      <button onClick={onClick}>Click-me</button>
    </>
  );
};

export default MyComp;
