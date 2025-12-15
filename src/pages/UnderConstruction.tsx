import { Link } from "react-router-dom";
import { Construction, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-200">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg animate-pulse">
              <Construction className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Trang Web Đang Được Cập Nhật
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Chúng tôi đang nỗ lực hoàn thiện trang web này để mang đến trải nghiệm tốt nhất cho bạn.
            <br />
            Vui lòng quay lại sau hoặc liên hệ với chúng tôi để biết thêm thông tin.
          </p>

          {/* Contact Info */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-200">
            <h3 className="font-semibold text-gray-800 mb-3">Liên hệ với chúng tôi:</h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-medium">Hotline:</span>{" "}
                <a href="tel:0933549469" className="text-blue-600 hover:text-blue-700 font-semibold">
                  0933 549 469
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:cskh@sof.vn" className="text-blue-600 hover:text-blue-700">
                  cskh@sof.vn
                </a>
              </p>
              <p>
                <span className="font-medium">Website:</span>{" "}
                <a href="http://sof.vn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  sof.vn
                </a>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Quay lại
            </Button>
            <Link to="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white w-full sm:w-auto"
              >
                <Home className="w-5 h-5 mr-2" />
                Về trang chủ
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer text */}
        <p className="mt-8 text-gray-500 text-sm">
          © 2024 SOF.VN - Giải pháp phần mềm quản lý toàn diện
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
