import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
export default function BannerPackage() {
  const [APIData, setAPIData] = useState();
  const [APIData1, setAPIData1] = useState();
  const [loading, setLoading] = useState(true);

  let { image } = useParams();
  const { id } = useParams();

  const baseURL = `https://fservices.azurewebsites.net/api/packages/${id}`;

  useEffect(() => {
    // async function fetchUserData() {
    //   const res = await fetch(baseURL);
    //   if (res.ok) {
    //     const data = await res.json();
    //     setAPIData(data);
    //     console.log(data.packageDetails[0].serviceId);
    //     const respone = await fetch(
    //       `https://fservices.azurewebsites.net/api/services/${data.packageDetails[0].serviceId}`
    //     );
    //     if (respone.ok) {
    //       const data = await respone.json();
    //       setAPIData1(data);
    //     }
    //     setLoading(false);
    //   } else throw new Error(`HTTP Status: ${res.status}`);
    //   setLoading(false);
    // }
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    try {
      const res = await fetch(baseURL);
      if (res.ok) {
        const data = await res.json();
        setAPIData(data);
        console.log(data.packageDetails[0].serviceId);
        const response = await fetch(
          `https://fservices.azurewebsites.net/api/services/${data.packageDetails[0].serviceId}`
        );
        if (response.ok) {
          const responseData = await response.json();
          setAPIData1(responseData);
        } else {
          throw new Error(`HTTP Status: ${response.status}`);
        }
      } else {
        throw new Error(`HTTP Status: ${res.status}`);
      }
    } catch (error) {
      console.error("Error fetching banner data:", error);
      setLoading(false);
    }
  };

  const bannerStyle = {
    backgroundImage: `url(${APIData?.image})`,
  };

  return (
    <div>
      <div id="header" />
      <section>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div style={bannerStyle} className="banner-img position-relative" />
            <div className="position-absolute banner-text">
              <h1 className="banner-title mb-3">
                {APIData?.name}
                <br />
              </h1>
              <p className="col-md-5">{APIData?.description}</p>
              <div>
                <button
                  className="ex-btn"
                  type="button"
                  style={{ color: "#fff" }}
                >
                  Trải nghiệm dịch vụ
                </button>
              </div>
            </div>
            ``
          </div>
        </div>
      </section>
    </div>
  );
}
