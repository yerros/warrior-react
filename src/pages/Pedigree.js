import React, { Component } from "react";
import Layout from "../component/Layout";

export default class Pedigree extends Component {
  render() {
    return (
      <Layout title="Pedigree">
        <div className="w-full p-6 bg-white">
          <div className="grid grid-cols-3 gap-4">
            <div></div>
            <div></div>
            <div className="bg-blue-400">Kakek / nenek</div>
            <div></div>
            <div className="bg-yellow-300">Bapak / ibu</div>
            <div></div>
            <div></div>
            <div></div>
            <div className="bg-blue-800">Kakek / nenek</div>
            <div className="bg-red-600">Anak</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="bg-blue-400">Kakek / nenek</div>
            <div></div>
            <div className="bg-yellow-600">Bapak / ibu</div>
            <div></div>
            <div></div>
            <div></div>
            <div className="bg-blue-800">Kakek / nenek</div>
          </div>
        </div>
      </Layout>
    );
  }
}
