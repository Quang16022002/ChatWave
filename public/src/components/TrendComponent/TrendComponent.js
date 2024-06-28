import React from "react";
import "./TrendComponent.scss";
const TrendComponent = () => {
  return (
    <div style={{ padding: 20 }}>
      <div className="trend-list d-flex justify-content-between ">
        <div className="trend-list-item">
          <p>
            <span>1</span> Nghệ thuật
          </p>
          <img src="https://cdn.tuoitre.vn/2022/6/12/photo-1-1655021957135238215435.jpg" />
        </div>
        <div
          style={{ backgroundColor: "rgb(40, 38, 166)" }}
          className="trend-list-item"
        >
          <p>
            <span style={{ backgroundColor: "rgb(145, 143, 255)" }}>2</span> Vũ
            hội quái vật
          </p>
          <img src="https://media.ngoisao.vn/resize_580/news/2016/10/11/ac-quy-4-ngoisao.vn.jpg" />
        </div>
        <div
          style={{ backgroundColor: "rgb(166, 38, 144)" }}
          className="trend-list-item"
        >
          <p>
            <span style={{ backgroundColor: "rgb(247, 69, 218)" }}>3</span>{" "}
            Chuyển giới nam
          </p>
          <img src="https://cdn.tuoitre.vn/2022/6/12/photo-1-1655021957135238215435.jpg" />
        </div>
        <div
          style={{ backgroundColor: "rgb(32, 94, 17)" }}
          className="trend-list-item"
        >
          <p>
            <span style={{ backgroundColor: "rgb(13, 232, 9)" }}>4</span> bg3
          </p>
          <img src="https://cdn.tuoitre.vn/2022/6/12/photo-1-1655021957135238215435.jpg" />
        </div>
        <div
          style={{ backgroundColor: "rgb(0, 105, 150)" }}
          className="trend-list-item"
        >
          <p>
            <span style={{ backgroundColor: "rgb(13, 182, 255)" }}>5</span>{" "}
            Người nhân tạo
          </p>
          <img src="https://image.nhandan.vn/1200x630/Uploaded/2024/athlrainagbna/2023_03_08/tri-tue-nhan-tao-ai-2-3436.jpg.webp" />
        </div>
        {/* <div style={{backgroundColor:'rgb(148, 82, 191)'}} className='trend-list-item'>
                <p><span style={{backgroundColor:'rgb(148, 12, 121)'}}>6</span> Người đẹp và...</p>
                <img src='https://file1.dangcongsan.vn/data/0/images/2021/03/31/havtcd/2020050501213468.jpg'/>
            </div> */}
      </div>

      <div className="channel py-4">
        <div className="channel-item" style={{backgroundColor:'rgb(247, 235, 239)'}}>
          <div  className="d-flex channel-info justify-content-between">
            <div className="d-flex">
                <img
                  style={{ borderRadius: "50%" , width:55, marginRight:20}}
                  src="https://public.bnbstatic.com/image/pgc/202402/3c152318ac7929accbeccf9de16998fb.png"
                />
                <div className="channel-info-right">
                  <p style={{ color: "rgb(212, 6, 68)" }}>Tham gia</p>
                  <strong>
                    Bitcoin | Crypto <i class="check fa-solid fa-check"></i>
                  </strong>
                  <p style={{ color: "rgb(148, 148, 148)" }}>20k người đăng ký </p>
                </div>
            </div>
            <i style={{marginTop:-30}} class="fa-solid fa-ellipsis"></i>
          </div>
          <div className="channel-content my-3" >
                <a style={{color:'rgb(15, 110, 252)', marginBottom:5}}>https://blogtienao.com/ceo-cong-ty-daossss...</a>
                <img src="https://media.vneconomy.vn/w800/images/upload/2024/05/06/btc01.png"/>
          </div>
          <div className="d-flex justify-content-between">
          <div className="d-flex">
                <img
                  style={{ borderRadius: "50%" , width:55, marginRight:20}}
                  src="https://public.bnbstatic.com/image/pgc/202402/3c152318ac7929accbeccf9de16998fb.png"
                />
                <div className="channel-info-right">
                  <strong>
                    Bitcoin | Crypto 
                  </strong>
                  <p style={{ color: "rgb(148, 148, 148)" }}>20k người đăng ký </p>
                </div>
            </div>
            <p>20/3/2024</p>
          </div>
        </div>
        <div className="channel-item">1</div>
        <div className="channel-item">1</div>
        <div className="channel-item">1</div>
      </div>
    </div>
  );
};

export default TrendComponent;
