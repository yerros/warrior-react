/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./ViewPigeon.css";
import Layout from "../../component/Layout";
import { Get } from "../../lib";

function ViewPigeon(props) {
  // state
  const [name, setName] = useState("");
  const [ring, setRing] = useState("");
  const [ppmbsi, setPpmbsi] = useState("");
  const [gender, setGender] = useState("");

  const [parrent, setParrent] = useState([]);
  const [kakek, setKakek] = useState([]);
  const [nenek, setNenek] = useState([]);
  const { id } = props.match.params;

  useEffect(async () => {
    const res = await Get(`merpati/${id}`);
    if (!res) {
      return props.history.push("/merpati");
    }
    setName(res.name);
    setRing(res.ring);
    setPpmbsi(res.ppmbsi);
    setGender(res.gender);
    setParrent(res.parrents);
    setMultiParrent(res.parrents);
  }, []);

  const setMultiParrent = (data) => {
    if (data.length !== 0) {
      console.log(data[0].parrents);
      setKakek(data[0].parrents);
      setNenek(data[1].parrents);
    }
  };
  const Items = (data) => {
    const images =
      data.gender === "betina" ? "/img/female.png" : "/img/male.png";
    return (
      <div className={`m_segment ${data.position}`}>
        <span>
          <button className="w-full text-left transition duration-300 ease-in-out hover:bg-gray-300 focus:outline-none">
            <div className="flex items-center px-2 space-x-2 kotak">
              <img
                src={images}
                alt="Pic"
                className="object-contain w-4 lg:w-8"
              />
              <div className="flex-grow w-16 p-0 lg:p-2">
                <div className="font-semibold text-gray-700 truncate">
                  {data.ring}
                </div>
                <div className="font-normal text-gray-500 truncate">
                  {data.ppmbsi}
                </div>
              </div>
            </div>
          </button>
        </span>
      </div>
    );
  };
  const ParrentList = (parrent) => {
    const data = parrent.data;
    if (data.length !== 0) {
      return (
        <div className="match_unit">
          <Items
            ring={data[0].ring}
            ppmbsi={data[0].ppmbsi}
            gender={data[0].gender}
            position="m_top"
          />
          <Items
            ring={data[1].ring}
            ppmbsi={data[1].ppmbsi}
            gender={data[1].gender}
            position="m_botm"
          />
        </div>
      );
    } else {
      return <div style={{ height: 160 }}></div>;
    }
  };

  return (
    <Layout title={`Trah ${ring}`}>
      <div className="shadow max-w-screen playground rounded-xl">
        <div className="brackets_container">
          <div className="p-6 text-xl font-semibold">Silsilah / TRAH</div>
          <table>
            <thead>
              <tr>
                <th>
                  <span></span>
                </th>
                <th>
                  <span></span>
                </th>
                <th>
                  <span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr id="playground">
                <td className="round_column r_8">
                  <div className="mtch_container">
                    <ParrentList data={kakek} />
                  </div>
                  <div className="mtch_container">
                    <ParrentList data={nenek} />
                  </div>
                </td>
                <td className="round_column r_4">
                  <div className="mtch_container">
                    <ParrentList data={parrent} />
                  </div>
                </td>
                <td className="round_column r_2">
                  <div className="mtch_container">
                    <div className="match_final">
                      <div className="m_segment m_top winner">
                        <span>
                          <button className="w-full text-left transition duration-300 ease-in-out hover:bg-gray-300 focus:outline-none">
                            <div className="flex items-center px-2 space-x-2 kotak">
                              <img
                                src={
                                  gender === "betina"
                                    ? "/img/female.png"
                                    : "/img/male.png"
                                }
                                alt="My profile"
                                className="object-contain w-4 lg:w-8"
                              />
                              <div className="flex-grow w-16 p-0 lg:p-2">
                                <div className="font-semibold text-gray-700 truncate">
                                  {ring}
                                  <span className="hidden text-xs font-thin text-gray-500 truncate xl:inline-block">
                                    &nbsp; / {name}
                                  </span>
                                </div>
                                <div className="font-normal text-gray-500 truncate">
                                  {ppmbsi}
                                </div>
                              </div>
                            </div>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default ViewPigeon;
