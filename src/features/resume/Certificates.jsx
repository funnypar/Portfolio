import { useQuery } from "@tanstack/react-query";
import { CircleLoader } from "react-spinners";
import getAllDocs from "../../utils/services/getAllDocs";

const Certificates = () => {
    const { data: docs, isLoading } = useQuery({
        queryFn: () => getAllDocs(),
        queryKey: ["docs"],
    });

    return (
        <>
            <h4 className="text-2xl font-bold mt-12">Certificates</h4>
            <div className="flex flex-wrap gap-12 mt-8 phone:gap-12 phone:justify-center">
                {isLoading ? (
                    <CircleLoader color="bg-front" />
                ) : (
                    docs?.map((el) => {
                        return (
                            <div
                                className=" w-1/3 text-center outline outline-4 rounded-lg outline-gray-600 outline-offset-4 flex flex-col gap-2"
                                key={el.id}
                            >
                                <img
                                    src={el.image}
                                    alt={el.title}
                                    className="rounded-lg hover:scale-150 transition-all duration-700"
                                />
                                <h5 className="font-semibold">{el.title}</h5>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default Certificates;
