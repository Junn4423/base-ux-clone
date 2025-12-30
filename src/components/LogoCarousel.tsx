const logos = [
  { name: "Công Ty Dầu Khí Việt Nhật", logo: "https://tse3.mm.bing.net/th?id=OIP.p9XPw4piqJFBdCPTHi-mkAHaEP&pid=Api&P=0&h=180" },
  { name: "Công Ty Dầu Khí Đồng Tháp", logo: "https://tse1.mm.bing.net/th?id=OIP.BLH6vldIscj_ZjLCVeVgVwAAAA&pid=Api&P=0&h=180" },
  { name: "Công Ty CP Giải Pháp Biznet", logo: "https://static.topcv.vn/company_logos/cong-ty-co-phan-giai-phap-cong-nghe-biznet-628f4eceb2572.jpg" },
  { name: "Khách sạn 5* Imperial - Vũng Tàu", logo: "https://pbs.twimg.com/profile_images/1203596005502902272/GnJDC4Mg_400x400.jpg" },
  { name: "Công ty Bueno - KCN Nhơn Trạch", logo: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/cong-ty-tnhh-ky-thuat-bueno-5e7d77dd06e4c.jpg" },
  { name: "BECAMEX Bình Dương", logo: "https://forbes.baovanhoa.vn/wp-content/uploads/2022/06/LogoTop50_Becamex.jpg" },
  { name: "Công Ty Sợi Thế Kỷ", logo: "https://up.yimg.com/ib/th?id=OIP.g5NZdNu-aFraIQhmlDg6fgAAAA&pid=Api&rs=1&c=1&qlt=95&w=191&h=121" },
  { name: "Công Ty Vận Tải Nghi Phong", logo: "https://pic.trangvangvietnam.com/114586/logo-van-tai-nghi-long.gif" },
  { name: "Cty Công Nghệ Minh Phương", logo: "https://erp.minhphuong.biz/images/logo/logo.png" },
  { name: "Công Ty Bao Bì Thịnh Thành Đạt", logo: "https://studentjob.vn/resize/280/0/store/2018/12/thinh-thanh-dat-coltd-cong-ty-tnhh-bao-bi-thinh-thanh-dat.jpg" },
  { name: "Công Ty Cổ Phần Phân Bón Bình Điền", logo: "https://cdn.haitrieu.com/wp-content/uploads/2023/10/Logo-Binh-Dien-635x635.png" },
  { name: "Công Ty Dược Phẩm Hasan", logo: "https://static.topcv.vn/company_logos/cong-ty-duoc-pham-hasan-603db90ac4dbc.jpg" },
  { name: "Công Ty Brotex Việt Nam", logo: "https://dxwd4tssreb4w.cloudfront.net/image/db2944f727fe7c17c135966d3cb2750a" },
  { name: "Cty Wantai - KCN Phước Đông - Tây Ninh", logo: "https://wtrubber.com.vn/wp-content/uploads/2022/02/logo1.jpg" },
  { name: "Công Ty Quốc Tế Di Hưng", logo: "https://goldwellvn.com/upload/photo/logo_08593302102019.png" },
  { name: "Công Ty Điện Lạnh Đông Sapa", logo: "https://dongsapa.com.vn/wp-content/uploads/2022/10/Logo-DSP-new-1.png.webp" },
  { name: "Huy Vân", logo: "https://huyvan.sof.com.vn/images/logo/logo.png" },
  { name: "Geo", logo: "https://geo.sof.com.vn/images/logo/logo.png" },
  { name: "Thiên Vân", logo: "https://thienvan.sof.com.vn/images/logo/logo.png" },
];

export const LogoCarousel = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 border-y border-[#a7d5ec] overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 sm:mb-8 text-center">
          <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#0f426c] bg-[#0f426c]/10">
            <span className="text-[#0f426c] font-semibold text-sm sm:text-base">Rất nhiều</span>
          </div>
          <span className="text-sm sm:text-base text-[#507588]">
            doanh nghiệp đã chuyển mình cùng{" "}
            <span className="text-[#0f426c] font-medium">SOF</span>
          </span>
        </div>
      </div>

      {/* Infinite scroll logos */}
      <div className="relative">
        <div className="flex animate-slide-left items-center">
          {/* First set */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 sm:px-8 lg:px-12 flex items-center justify-center"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="h-10 sm:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
