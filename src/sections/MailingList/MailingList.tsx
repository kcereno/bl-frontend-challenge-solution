const MailingList = () => {
  return (
    <section
      id="mailing-list"
      className="mt-10 tablet:mt-20"
    >
      <div className="relative flex justify-center h-auto bg-mailing-list bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-50 z-0"></div>
        <div className="py-5 z-10">
          <h3 className="font-bold text-xl text-white text-center mb-4">
            Join our mailing list
          </h3>
          {/* Form */}
          <div className="grid grid-cols-1 bg-slate-200 w-4/5 mx-auto rounded-lg text-sm p-4 gap-4">
            {/* Form */}
            <form>
              <div className="mb-2">
                <label htmlFor="fullnName">Full Name</label>
                <br />
                <input
                  className="w-full p-1"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="w-full p-1"
                  type="email"
                  placeholder="jane_doe@gemail.com"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="industry">Industry</label>
                <br />
                <select
                  className="w-full p-1"
                  name="industry"
                  id="industry"
                >
                  <option value="esports">E-Sports</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                </select>
              </div>
            </form>
            {/* Text and Signup button */}
            <div className="flex flex-col">
              <p className="mb-4 text-center">
                Join our mailing to recieve notifications about program
                availability and special discounts
              </p>
              <button className="bg-blue-800 px-2 py-2 text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailingList;
