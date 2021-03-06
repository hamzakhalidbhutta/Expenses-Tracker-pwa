import { useContext } from "react";
import { TransectionsContext } from "../store/Context/transectionContext";
import Card from "./Card";

const Transections = (): JSX.Element => {
  const context: any = useContext(TransectionsContext);
  const delTransection = (dt: any) => {
    context.delTransection(dt);
  };

  const updateTransection = (dt: any) => {
    context.updateTransection(dt);
  };

  return (
    <div className="transections">
      {
      (context.transections.length <= 0)?
      <h3>No Transion History Found!!!</h3>
      :
      
      context.transections.map((v: any, i: any) => {
        return (
          <Card
            key={i}
            title={v.title}
            amount={v.amount}
            id={i}
            updateTransection={updateTransection}
            delTransection={delTransection}
          />
        );
      })}
    </div>
  );
};

export default Transections;
