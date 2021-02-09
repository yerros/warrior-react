import React, { Component } from "react";
import Layout from "../../component/Layout";
import Table from "../../component/Table";
import { Link } from "react-router-dom";
import { Get } from "../../lib";
import Loading from "../../component/Loading";
import Pagination from "react-js-pagination";

class merpati extends Component {
  constructor() {
    super();
    this.state = {
      pigeons: [],
      currentPage: 1,
      totalItems: 1,
      totalPage: 1,
      isLoading: true,
      inputSearch: "",
    };
  }

  componentDidMount() {
    this.getDataPigeon();
  }
  async getDataPigeon() {
    await Get(`merpati?page=${this.state.currentPage}`).then((res) => {
      this.setState({
        pigeons: res.merpati,
        totalItems: res.totalItems,
        isLoading: !this.state.isLoading,
      });
    });
  }
  handlePageChange = async (pageNumber) => {
    await this.setState({
      currentPage: pageNumber,
      isLoading: !this.state.isLoading,
    });
    this.getDataPigeon();
  };

  handleSearch = async (val) => {
    this.setState({
      inputSearch: val,
    });
    Get(`merpati/search?q=${val}`).then((res) => {
      this.setState({
        pigeons: res,
      });
    });
  };

  render() {
    return (
      <Layout title="Merpati">
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="w-auto mx-auto">
            <div className="flex flex-row-reverse px-6 py-4">
              <div className="items-center justify-center sm:flex">
                <Link to="/merpati/add">
                  <button className="px-3 py-2 text-xs font-bold text-gray-100 bg-pink-600 rounded-full cursor-pointer hover:bg-pink-700 hover:text-white focus:outline-none">
                    <i className="mr-1 text-pink-500 fas fa-plus group-hover:text-pink-400"></i>
                    Tambah Merpati
                  </button>
                </Link>
              </div>
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="inputSearch"
                  value={this.state.inputSearch}
                  onChange={(e) => this.handleSearch(e.target.value)}
                  className="py-2 pl-10 mr-2 text-sm text-white bg-gray-100 rounded-full w-60 focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search by ring ..."
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="max-w-md mx-4 my-6 bg-white rounded shadow-md lg:max-w-full">
              <Table
                pigeons={this.state.pigeons}
                showModal={this.state.showModalEdit}
                toggleShowHideEdit={this.toggleShowHideEdit}
              />
            </div>
            <div className="flex flex-col items-center my-12">
              <div className="flex text-gray-700">
                <Pagination
                  activePage={this.state.currentPage}
                  innerClass="flex h-8 font-medium bg-gray-200 rounded-full"
                  itemClass="items-center justify-center flex w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex "
                  activeClass="items-center justify-center hidden w-8 leading-5 text-white transition duration-150 ease-in bg-pink-600 rounded-full cursor-pointer md:flex "
                  itemsCountPerPage={10}
                  totalItemsCount={this.state.totalItems}
                  pageRangeDisplayed={5}
                  hideFirstLastPages={true}
                  onChange={this.handlePageChange}
                />
              </div>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}

export default merpati;
