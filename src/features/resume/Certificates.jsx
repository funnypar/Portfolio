const Certificates = () => {
    return (
        <>
            <h4 className="text-2xl font-bold mt-12">Certificates</h4>
            <div className="flex flex-wrap gap-12 mt-8 phone:gap-12 phone:justify-center">
                <div className=" w-1/3 text-center outline outline-4 rounded-lg outline-gray-600 outline-offset-4 flex flex-col gap-2">
                    <img
                        src="/public/media/cs50x.png"
                        alt="cs50x"
                        className="rounded-lg hover:scale-150 transition-all duration-700"
                    />
                    <h5 className="font-semibold">CS50X</h5>
                </div>
                <div className=" w-1/3 text-center outline outline-4 rounded-lg outline-gray-600 outline-offset-4 flex flex-col gap-2">
                    <img
                        src="/public/media/cs50p.png"
                        alt="cs50p"
                        className="rounded-lg hover:scale-150 transition-all duration-700"
                    />
                    <h5 className="font-semibold">CS50P</h5>
                </div>
                <div className=" w-1/3 text-center outline outline-4 rounded-lg outline-gray-600 outline-offset-4 flex flex-col gap-2">
                    <img
                        src="/public/media/B2.png"
                        alt="B2"
                        className="rounded-lg hover:scale-150 transition-all duration-700"
                    />
                    <h5 className="font-semibold">Goethe-Zertifikat B2</h5>
                </div>
            </div>
        </>
    );
};

export default Certificates;
