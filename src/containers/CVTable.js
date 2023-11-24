import { Row } from "antd";
import CVCard from "../components/CVCard";
import { Suspense } from "react";

const CVTable = ({ lst }) => {
  const datas = lst || [];
  return (
    <Suspense>
      <main className="min-h-[715px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent flex">
        <Row gutter={10} className="flex mt-sm-10 h-[70%] w-[100%]">
          {datas.map((value, index) => (
            <CVCard key={index} data={value} />
          ))}
        </Row>
      </main>
    </Suspense>
  );
};

export default CVTable;
