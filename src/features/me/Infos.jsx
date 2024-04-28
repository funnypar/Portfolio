const Infos = () => {
    return (
        <div className="grid grid-cols-2 gap-16 mt-10">
            <p>
                {`I am Mohammadparsa Norouzi and my friends call me {Mopano},
        a Frontend-developer with 1 year of experience. During this
        time, I have learned a lot and read many books and articles
        in this field. Throughout my career, I've had the
        opportunity to work on various projects. In my free time, I
        enjoy reading books, learning new things and play football.
        I am eager to bring my expertise and creativity to new
        projects and collaborations.`}
            </p>
            <div className=" flex flex-col justify-between">
                <h5 className="text-me font-semibold">
                    Age <span className="text-white ml-5 font-normal">23</span>
                </h5>
                <h5 className="text-me font-semibold">
                    Nationality{" "}
                    <span className="text-white ml-5 font-normal">Iran</span>
                </h5>
                <h5 className="text-me font-semibold">
                    Address{" "}
                    <span className="text-white ml-5 font-normal">
                        Sadeghye, Tehran
                    </span>
                </h5>
                <h5 className="text-me font-semibold">
                    E-mail{" "}
                    <span className="text-white ml-5 font-normal">
                        p.r.7.norouzi@gmail.com
                    </span>
                </h5>
                <h5 className="text-me font-semibold">
                    Phone{" "}
                    <span className="text-white ml-5 font-normal">
                        +98 939 8280 260
                    </span>
                </h5>
            </div>
        </div>
    );
};

export default Infos;
