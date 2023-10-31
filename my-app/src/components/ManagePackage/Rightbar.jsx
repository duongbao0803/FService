import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Rightbar() {
  const [apiData, setApiData] = useState(null);
  const [nameData, setNameData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fservices.azurewebsites.net/api/apartment-packages/1", {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6IjM0Yzc1Yjk1LTU2NDgtNGYzNC1hZTFhLTgxZDVhOGViOTI1OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg1MDQ4OTAsImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.X2slzD2SnT1POsYc4dL3XE3i7mM3YTqId1hTeWi4oFc`
        }
    });
    setApiData(response.data);
  

    const packageId = response.data.packageId;

    // Construct the endpoint for the second API call (Replace this URL if it's different)
    const secondApiUrl = `https://fservices.azurewebsites.net/api/packages/${packageId}`;

    const nameResponse = await axios.get(secondApiUrl, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6IjM0Yzc1Yjk1LTU2NDgtNGYzNC1hZTFhLTgxZDVhOGViOTI1OSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg1MDQ4OTAsImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.X2slzD2SnT1POsYc4dL3XE3i7mM3YTqId1hTeWi4oFc` 
      }
    });
    setNameData(nameResponse.data);

    const buildingsId = response.data.buildingsId;

    // Construct the endpoint for the second API call (Replace this URL if it's different)
    const thirdApiUrl = `https://fservices.azurewebsites.net/api/buildings/${buildingsId}`;

    const APIResponse = await axios.get(thirdApiUrl, {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6IjAzZDFkYWFmLWUyMjEtNDEzYS04OTU0LWM3Y2U4MWNkOGNhZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg0MjIzNjgsImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.cPvt06FJTr67fJGIYibI1iDjGNVHZW0oeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6ImRkN2EwZjYzLWY0NzYtNDU1MS05N2FhLTIyMjk5ZGRiOWUyMCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg0OTkzOTcsImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.nVp8XlcS6TyfBzKo1t4nAvzphSmuuGx3Tq1HxDa9G78` // Replace YOUR_TOKEN_HERE with your actual token
      }
    });
    setNameData(nameResponse.data);




} catch (error) {
    console.error("Error fetching data:", error);
    console.error("Error response:", error.response);
}
}

  return (

    <div className="right-bar">
      <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
      <div className="right_bar-main" style={{padding: '20px'}}>
        <div className="chooseHouse pb-3">
          <div className="choose" >
          <a href style={{borderBottom: '3px solid #ff8228'}} onClick={fetchData}>Căn hộ 1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href>Căn hộ 2</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href>Căn hộ 3</a>
          </div>
          <div className="orderedPackage">
            <div className="orderedPackage_main d-flex justify-content-between">
              <div className="orderedPackage-name ">
                <span>{nameData?.name}</span>
              </div>
              <div className="orderedPackage-status">
                <span>Trạng thái: </span>
                <span>{apiData?.packageStatus}</span>
              </div>
            </div>
            <div className="info-ordered">
              <table className="info_ordered-table">
                <tbody><tr />
                  <tr />
                  <tr>
                    <td>Căn hộ:</td>
                    <td>{apiData?.apartmentId}</td>
                  </tr>

                  <tr>
                    <td>Áp dụng từ:</td>
                    <td>{apiData?.startDate}-{apiData?.endDate}</td>

                  </tr>

                </tbody></table>
              <div className="button d-flex justify-content-end">
                <button>Xem chi tiết</button>
              </div>

            </div>

          </div>
        </div>
        <div className="orderedPackage">
          <div className="orderedPackage_main d-flex justify-content-between">
            <div className="orderedPackage-name ">
              <span>COMBO VỆ SINH NHÀ Ở (Cho căn 1PN)</span>
            </div>
            <div className="orderedPackage-status">
              <span>Trạng thái: </span>
              <span>ĐANG HOẠT ĐỘNG</span>
            </div>
          </div>
          <div className="info-ordered">
            <table className="info_ordered-table">
              <tbody><tr />
                <tr />
                <tr>
                  <td>Căn hộ:</td>
                  <td>S101-0310-Vinhomes Grand Park</td>
                </tr>

                <tr>
                  <td>Áp dụng từ:</td>
                  <td>01/10/2023 - 31/10/2023</td>

                </tr>

              </tbody></table>
            <div className="button d-flex justify-content-end">
              <button>Xem chi tiết</button>
            </div>

          </div>

        </div>
      </div>
    </div>





  );
}

export default Rightbar;