import { useEffect, useState } from "react";
import { TViewProps, IViewModel } from "./types";

const Presenter = ({ isMobile }: TViewProps): IViewModel => {
  const [title, setTitle] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");

  useEffect(() => {
    setParagraph(`Esse Paragrafo é ${isMobile ? "mobile" : "desktop"}`);

    if (isMobile) {
      setTitle("Titulo Mobile");
    } else {
      setTitle("Titulo Desktop");
    }
  }, [isMobile]);

  const onClick = () => {
    console.log("click");
  };

  const viewModel: IViewModel = {
    title,
    paragraph,
    onClick,
    isMobile
  };

  return viewModel;
};

export default Presenter;
