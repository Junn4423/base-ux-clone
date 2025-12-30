"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Construction, Phone, Mail, Globe } from "lucide-react";

// Client Component (required for onClick handlers)
export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4fbff] to-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#a7d5ec]">
          {/* Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-[#3087fe] to-[#0f426c] rounded-full flex items-center justify-center mx-auto mb-8">
            <Construction className="w-12 h-12 text-white animate-pulse" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f426c] mb-4">
            Trang Web Đang Được Cập Nhật
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            Chúng tôi đang nâng cấp trang này để mang đến trải nghiệm tốt hơn
            cho bạn. Vui lòng quay lại sau hoặc liên hệ với chúng tôi nếu cần hỗ
            trợ.
          </p>

          {/* Contact Info */}
          <div className="bg-[#f4fbff] rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-[#0f426c] mb-4">
              Liên hệ hỗ trợ:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-[#3087fe]" />
                <span>Hotline: 0933549469</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-[#3087fe]" />
                <span>Email: cskh@sof.com.vn</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Globe className="w-4 h-4 text-[#3087fe]" />
                <span>Website: sof.com.vn</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-[#a7d5ec] text-[#0f426c] hover:bg-[#f4fbff]"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.history.back();
                }
              }}
            >
              Quay lại
            </Button>
            <Link href="/">
              <Button className="bg-[#3087fe] hover:bg-[#0f426c] text-white">
                Về trang chủ
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} CÔNG TY TNHH SOF. All rights reserved.
        </p>
      </div>
    </div>
  );
}
