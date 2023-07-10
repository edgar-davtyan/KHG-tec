import { ReactNode } from "react";
import { createContext, useState, useMemo } from "react";

export const ModalContext = createContext({
  isModalShow: false,
  setIsModalShow: (open: boolean) => {},
});

export default function Modal({ children }: { children: ReactNode }) {
  const [isModalShow, setIsModalShow] = useState(false);

  const value: any = useMemo(
    () => ({ isModalShow, setIsModalShow }),
    [isModalShow]
  );

  return (
    <ModalContext.Provider value={value}>
      <>{children}</>
    </ModalContext.Provider>
  );
}
