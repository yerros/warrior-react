import { Link } from "react-router-dom";

export default function Table(props) {
  const dataMerpati = props.pigeons || [];
  return (
    <table className="w-full text-sm text-left border-collapse">
      <thead>
        <tr>
          <th className="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">
            Ring
          </th>
          <th className="hidden px-6 py-4 text-sm font-bold uppercase border-b lg:table-cell bg-grey-lightest text-grey-dark border-grey-light">
            Nama Burung
          </th>
          <th className="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">
            Genotif (J/B)
          </th>
          <th className="px-6 py-4 text-sm font-bold uppercase border-b bg-grey-lightest text-grey-dark border-grey-light">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {dataMerpati.map((i) => {
          return (
            <tr className="hover:bg-grey-lighter" key={i._id}>
              <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={i.picture || "/img/pigeon.jpeg"}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 whitespace-no-wrap">
                      {i.ring} /
                      <span className="ml-1 text-xs italic font-thin text-gray-500">
                        PPMBSI {i.ppmbsi}
                      </span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="hidden px-6 py-4 text-xs font-normal border-b lg:table-cell lg:text-sm border-grey-light">
                <div>{i.name}</div>
              </td>
              <td className="px-6 py-6 text-xs font-normal border-b lg:text-sm border-grey-light">
                <div className="flex">
                  <img
                    className="h-6 mx-2"
                    src={
                      i.gender === "betina"
                        ? "/img/female.png"
                        : "/img/male.png"
                    }
                    alt="gender"
                  />
                  {i.gender}
                </div>
              </td>
              <td className="px-6 py-4 border-b border-grey-light">
                <Link to={`/merpati/edit/${i.shortid}`}>
                  <button className="px-3 py-1 mr-1 text-xs font-bold bg-gray-300 rounded-full text-grey-lighter hover:bg-gray-200 hover:text-gray-600">
                    <i className="mr-0 far fa-edit lg:mr-1"></i>
                    <span className="hidden md:inline lg:inline">Edit</span>
                  </button>
                </Link>
                <Link to={`/merpati/trah/${i.shortid}`}>
                  <button className="px-3 py-1 text-xs font-bold text-white bg-pink-600 rounded-full hover:bg-pink-700">
                    <i className="mr-0 lg:mt-0 far fa-eye lg:mr-1"></i>
                    <span className="hidden md:inline lg:inline">View</span>
                  </button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
